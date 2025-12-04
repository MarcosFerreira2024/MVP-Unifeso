import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase";
import { ListUsersUseCase } from "../../application/useCases/User/ListUsersUseCase";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase";
import { AppError } from "../../helpers/errorHandler";
import { UpdateUserDTO } from "../../domain/interfaces/IUserRepository";

class UserController {
  async getProfile(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);
    const user = await findUserByIdUseCase.execute(id);
    return res.status(200).json(user);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);
    const user = await findUserByIdUseCase.execute(id);
    return res.status(200).json(user);
  }

  async list(req: Request, res: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    const users = await listUsersUseCase.execute();
    return res.status(200).json(users);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data: UpdateUserDTO = req.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updatedUser = await updateUserUseCase.execute(id, data);
    return res.status(200).json(updatedUser);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(id);
    return res.status(204).send();
  }
}

export { UserController };