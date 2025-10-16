import { inject, injectable } from "tsyringe";
import { VerificationCode } from "../../../domain/entities/VerificationCode";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";
import { IVerificationCodeService } from "../../../domain/interfaces/IVerificationCodeService";
import { Password } from "../../../domain/value objects/Password";
import { UseCaseResponse } from "../../../infrastructure/types/global";

@injectable()
class LoginUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository,
    @inject("HashProvider") private hashProvider: IHashProvider,
    @inject("TokenProvider") private tokenProvider: ITokenProvider,
    @inject("VerificationCodeRepository")
    private verificationCodeRepository: IVerificationCodeRepository,
    @inject("VerificationCodeService")
    private verificationCodeService: IVerificationCodeService
  ) {}

  async execute(email: string, password: string): Promise<UseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não existe");

    const verifiedPassword = Password.validate(password);

    const compare = await this.hashProvider.compare(
      verifiedPassword,
      user.hashedPassword
    );
    if (!compare) {
      return { status: "error", message: "Dados Inválidos" };
    }

    if (!user.verified) {
      const code = await this.verificationCodeRepository.findByUserId(user.id);

      if (!code) {
        await this.verificationCodeService.createAndSendEmail(
          user.id,
          user.email
        );

        throw new Error("Usuário nao verificado, verifique seu email");
      }

      new VerificationCode(code.code, code.validUntil, code.used).validate(
        code.code
      );
    }

    const token = await this.tokenProvider.generate(
      user.id,
      user.email,
      user.role
    );

    return {
      status: "success",
      message: "Login concluído com sucesso, aproveite nosso site ✌️",
      data: { token },
    };
  }
}

export { LoginUseCase };
