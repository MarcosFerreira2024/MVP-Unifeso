import { container } from "tsyringe";
import { ConsumeVerificationCodeUseCase } from "../../application/useCases/Authentication/ConsumeVerificationCodeUseCase";
import z from "zod";
import { errorHandler } from "../../helpers/errorHandler";
import { Request, Response } from "express";

class VerificationCodeController {
  static async consume(req: Request, res: Response) {
    try {
      const schema = z.string();

      const { success, data, error } = schema.safeParse(req.body.code);
      if (!success) throw new Error(error.message);

      await container.resolve(ConsumeVerificationCodeUseCase).execute(data);

      res.status(200).json({ message: "Código verificado com sucesso" });
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export { VerificationCodeController };
