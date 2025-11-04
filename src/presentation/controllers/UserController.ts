import { Request, Response } from "express";
import { errorHandler } from "../../helpers/errorHandler";
import {
  updateUserSchema,
  userIdSchema,
  userEmailSchema,
} from "../schemas/user.schema";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase";
import { FindUserByEmailUseCase } from "../../application/useCases/User/FindUserByEmailUseCase";

class UserController {
  static async update(req: Request, res: Response) {
    try {
      let id;
      if (req.params.id) {
        const data = userIdSchema.parse(req.params);
        id = data.id;
      }

      const userInfo = req.user;

      const data = updateUserSchema.parse(req.body);

      const updatedUser = await container
        .resolve(UpdateUserUseCase)
        .execute(userInfo, data, id);

      return res.status(200).json(updatedUser);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = userIdSchema.parse(req.params);

      const userInfo = req.user;

      const deletededUser = await container
        .resolve(DeleteUserUseCase)
        .execute(id, userInfo);

      return res.status(200).json(deletededUser);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async findById(req: Request, res: Response) {
    try {
      const { id } = userIdSchema.parse(req.params);

      const findedUser = await container
        .resolve(FindUserByIdUseCase)
        .execute(id);

      return res.status(200).json(findedUser);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async findByEmail(req: Request, res: Response) {
    try {
      const { email } = userEmailSchema.parse(req.body);

      const findUserByEmail = await container
        .resolve(FindUserByEmailUseCase)
        .execute(email);

      return res.status(200).json(findUserByEmail);
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export { UserController };
