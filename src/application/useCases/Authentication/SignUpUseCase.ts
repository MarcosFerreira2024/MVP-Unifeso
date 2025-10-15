import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";
import { Password } from "../../../domain/value objects/Password";
import { Roles } from "../../../infrastructure/types/enums";

class SignUpUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private verificationCodeRepository: IVerificationCodeRepository,
    private emailService: IEmailService
  ) {}

  async execute(name: string, email: string, password: string): Promise<void> {
    const alreadyExists = await this.userRepository.findByEmail(email);
    if (alreadyExists) throw new Error("User already exists");

    const verifiedPassword = Password.validate(password);

    const code = await this.verificationCodeRepository.create();
    await this.emailService.sendVerificationCode(email, code);

    const hashedPassword = await this.hashProvider.generate(verifiedPassword);
    const userDTO = User.create(name, email, hashedPassword);

    await this.userRepository.create(userDTO);

    return;
  }
}

export { SignUpUseCase };
