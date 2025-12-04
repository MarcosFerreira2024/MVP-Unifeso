import { Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

function errorHandler(err: Error | any, res: Response) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof ZodError) {
    let errorMessage = "Validation failed";
    let path = "unknown";

    if (
      (err as ZodError).errors &&
      Array.isArray((err as ZodError).errors) &&
      (err as ZodError).errors.length > 0
    ) {
      const firstError = (err as ZodError).errors[0];
      path = Array.isArray(firstError.path)
        ? firstError.path.join(".") === ""
          ? "root"
          : firstError.path.join(".")
        : "unknown";
      errorMessage = `${firstError.message}`;
    } else if (err.message) {
      // Try parsing err.message if it contains stringified ZodError details
      try {
        const parsedMessage = JSON.parse(err.message);
        if (
          Array.isArray(parsedMessage) &&
          parsedMessage.length > 0 &&
          parsedMessage[0].path &&
          parsedMessage[0].message
        ) {
          const firstError = parsedMessage[0];
          path = Array.isArray(firstError.path)
            ? firstError.path.join(".") === ""
              ? "root"
              : firstError.path.join(".")
            : "unknown";
          errorMessage = `${firstError.message}`;
        }
      } catch (jsonError) {
        // Fallback to plain message if JSON parsing fails
        errorMessage = err.message;
      }
    }
    return res
      .status(400)
      .json({ error: `Validation failed on field '${path}': ${errorMessage}` });
  }

  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ error: "Internal server error" });
}

export { errorHandler, AppError };
