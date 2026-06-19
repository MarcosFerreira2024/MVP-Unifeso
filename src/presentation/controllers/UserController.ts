import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase.js";
import { ListUsersUseCase } from "../../application/useCases/User/ListUsersUseCase.js";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase.js";
import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase.js";
import { UpdateUserDTO } from "../../domain/interfaces/IUserRepository.js";
import { errorHandler } from "../../helpers/errorHandler.js";

class UserController {
  async getProfile(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;
      const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);
      const user = await findUserByIdUseCase.execute(id);
      return res.status(200).json(user);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);
      const user = await findUserByIdUseCase.execute(id);
      return res.status(200).json(user);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const listUsersUseCase = container.resolve(ListUsersUseCase);
      const users = await listUsersUseCase.execute();
      return res.status(200).json(users);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data: UpdateUserDTO = req.body;

      const updateUserUseCase = container.resolve(UpdateUserUseCase);
      const updatedUser = await updateUserUseCase.execute(id, data);
      return res.status(200).json(updatedUser);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deleteUserUseCase = container.resolve(DeleteUserUseCase);
      await deleteUserUseCase.execute(id);
      return res.status(204).send();
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export { UserController };
