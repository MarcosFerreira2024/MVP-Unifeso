import z from "zod";
import { errorHandler } from "../../helpers/errorHandler";
import { Request, Response } from "express";
import { SignUpUseCase } from "../../application/useCases/Authentication/SignUpUseCase";
import { container } from "tsyringe";

class AuthenticationController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const zodSchema = z
        .object({ email: z.email(), password: z.string() })
        .safeParse(req.body);

      if (!zodSchema.success) throw new Error(zodSchema.error.message);

      const token = await container
        .resolve(LoginUseCase)
        .execute(email, password);
      return res.status(200).json(token);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  static async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      await container.resolve(SignUpUseCase).execute(name, email, password);
      return res
        .status(201)
        .json({ message: "User created, check your email" });
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}
