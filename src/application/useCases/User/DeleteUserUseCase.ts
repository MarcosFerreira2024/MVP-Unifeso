import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository.js";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
