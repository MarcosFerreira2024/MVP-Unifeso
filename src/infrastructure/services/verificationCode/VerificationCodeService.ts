import { inject, injectable } from "tsyringe";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";

@injectable()
class VerificationCodeService {
  constructor(
    @inject("EmailService") private emailService: IEmailService,
    @inject("VerificationCodeRepository")
    private verificationCodeRepository: IVerificationCodeRepository
  ) {}

  public async createAndSendEmail(userId: string, email: string) {
    const code = await this.verificationCodeRepository.create(userId);

    await this.emailService.sendVerificationCode(userId, email, code);
  }
}

export { VerificationCodeService };
