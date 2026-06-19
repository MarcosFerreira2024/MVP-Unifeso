import { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== "ADMIN") {
    throw new Error("Acesso negado. Privilégios de administrador necessários.");
  }
  next();
}
