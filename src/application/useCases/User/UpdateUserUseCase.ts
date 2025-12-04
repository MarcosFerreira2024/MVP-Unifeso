import { inject, injectable } from "tsyringe";
import { IUserRepository, UpdateUserDTO } from "../../../domain/interfaces/IUserRepository";
import { UserFromDB } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(userId: string, data: UpdateUserDTO): Promise<UserFromDB> {
    const userExists = await this.userRepository.findById(userId);

    if (!userExists) {
      throw new AppError("User not found", 404);
    }

    const updatedUser = await this.userRepository.update(userId, data);

    return updatedUser;
  }
}

export { UpdateUserUseCase };
