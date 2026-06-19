import { inject, injectable } from "tsyringe";
import { IUserRepository, UpdateUserDTO } from "../../../domain/interfaces/IUserRepository.js";
import { UserFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";
import { IHashProvider } from "../../../domain/interfaces/IHashProvider.js";
import { Password } from "../../../domain/value objects/Password.js";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute(userId: string, data: UpdateUserDTO): Promise<UserFromDBWithRelations> {
    const userExists = await this.userRepository.findById(userId);

    if (!userExists) {
      throw new AppError("User not found", 404);
    }

    if (data.password) {
      const verifiedPassword = Password.validate(data.password);
      data.hashedPassword = await this.hashProvider.generate(verifiedPassword);
    }
    delete data.password;

    const updatedUser = await this.userRepository.update(userId, data);

    return updatedUser;
  }
}

export { UpdateUserUseCase };
