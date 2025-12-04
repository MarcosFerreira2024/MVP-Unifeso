import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { UserWithoutPasswordFromDB } from "../../../infrastructure/types/database";

@injectable()
class FindUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<UserWithoutPasswordFromDB> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { FindUserByIdUseCase };
