import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { VerifyTokenUseCase } from "../../application/useCases/Authorization/VerifyTokenUseCase";
import { errorHandler } from "../../helpers/errorHandler";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Requisição sem header de autorização");
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new Error("Token não encontrado");
  }

  try {
    const verifiedToken = await container
      .resolve(VerifyTokenUseCase)
      .execute(token);
    if (!verifiedToken) throw new Error("Token inválido");

    request.user = {
      id: verifiedToken.userId,
      email: verifiedToken.email,
      role: verifiedToken.role,
      token: verifiedToken.token,
    };

    return next();
  } catch (error) {
    return errorHandler(error, response);
  }
}
