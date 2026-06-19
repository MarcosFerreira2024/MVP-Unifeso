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

function formatZodIssues(issues: ZodError["issues"]) {
  return issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "root";
    const parts = [`'${path}' ${issue.message}`];
    if ("expected" in issue) {
      parts.push(`esperado: ${JSON.stringify((issue as { expected: unknown }).expected)}`);
    }
    if ("received" in issue) {
      parts.push(`recebido: ${JSON.stringify((issue as { received: unknown }).received)}`);
    }
    return parts.join(", ");
  });
}

function errorHandler(err: unknown, res: Response) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof ZodError) {
    const formatted = formatZodIssues(err.issues);
    return res.status(400).json({
      error: "Erro de validação",
      details: formatted,
    });
  }

  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ error: "Erro interno do servidor" });
}

export { errorHandler, AppError };
