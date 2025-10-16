import { inject, injectable } from "tsyringe";
import { VerificationCode } from "../../../domain/entities/VerificationCode";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";
import { IVerificationCodeService } from "../../../domain/interfaces/IVerificationCodeService";
import { UseCaseResponse } from "../../../infrastructure/types/global";

@injectable()
class ConsumeVerificationCodeUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository,
    @inject("VerificationCodeRepository")
    private verificationCodeRepository: IVerificationCodeRepository
  ) {}

  async execute(codeInput: string): Promise<UseCaseResponse> {
    const code = await this.verificationCodeRepository.findCode(codeInput);
    if (!code) {
      throw new Error("Código inválido, verifique seu email e tente novamente");
    }

    new VerificationCode(code.code, code.validUntil, code.used).validate(
      codeInput
    );

    await this.userRepository.update(code.userId, {
      verified: true,
    });
    await this.verificationCodeRepository.delete(code.userId);

    return {
      status: "success",
      message: "Usuário verificado com sucesso",
      data: null,
    };
  }
}

export { ConsumeVerificationCodeUseCase };
