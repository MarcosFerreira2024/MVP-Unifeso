import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { UserWithoutPasswordFromDB } from "../../../infrastructure/types/database";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<UserWithoutPasswordFromDB[]> {
    const users = await this.userRepository.findAll();
    return users;
  }
}

export { ListUsersUseCase };
