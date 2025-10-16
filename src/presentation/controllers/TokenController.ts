import { container } from "tsyringe";
import z from "zod";
import { errorHandler } from "../../helpers/errorHandler";
import { Request, Response } from "express";
import { VerifyTokenUseCase } from "../../application/useCases/Authorization/VerifyTokenUseCase";

class TokenController {
  static verify(req: Request, res: Response) {
    try {
      const { data, success, error } = z.string().safeParse(req.body.token);
      if (!success) throw new Error(error.message);
      const token = container.resolve(VerifyTokenUseCase).execute(data);

      return res
        .status(200)
        .json({ message: "Token is valid", data: token, status: "success" });
    } catch (e) {
      errorHandler(e, res);
    }
  }
}

export { TokenController };
