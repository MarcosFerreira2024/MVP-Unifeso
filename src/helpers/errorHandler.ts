import { Response } from "express";

function errorHandler(err: Error | any, res: Response) {
  if (err instanceof Error) return res.status(400).json({ error: err.message });
  return res.status(500).json({ error: "Internal server error" });
}

export { errorHandler };
