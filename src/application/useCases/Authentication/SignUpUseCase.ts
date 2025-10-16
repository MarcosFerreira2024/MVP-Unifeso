import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";
import { Password } from "../../../domain/value objects/Password";
import { UseCaseResponse } from "../../../infrastructure/types/global";

@injectable()
class SignUpUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository,
    @inject("HashProvider") private hashProvider: IHashProvider,
    @inject("VerificationCodeRepository")
    private verificationCodeRepository: IVerificationCodeRepository,
    @inject("EmailService") private emailService: IEmailService
  ) {}

  async execute(
    name: string,
    email: string,
    password: string
  ): Promise<UseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (user) throw new Error("Usuario já cadastrado");

    const verifiedPassword = Password.validate(password);

    const hashedPassword = await this.hashProvider.generate(verifiedPassword);
    const userDTO = User.create(name, email, hashedPassword);

    const createdUser = await this.userRepository.create(userDTO);

    const code = await this.verificationCodeRepository.create(createdUser.id);
    await this.emailService.sendVerificationCode(
      createdUser.name,
      createdUser.email,
      code
    );

    return {
      status: "success",
      message: "Usuário criado com sucesso",
      data: null,
    };
  }
}

export { SignUpUseCase };
