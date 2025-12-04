import { inject, injectable } from "tsyringe";
import { IVerificationCodeRepository } from "../../../domain/interfaces/IVerificationCodeRepository";
import { IEmailService } from "../../../domain/interfaces/IEmailService";

@injectable()
class VerificationCodeService {
  constructor(
    @inject("EmailService") private emailService: IEmailService,
    @inject("VerificationCodeRepository")
    private verificationCodeRepository: IVerificationCodeRepository
  ) {}

  public async createAndSendEmail(
    userId: string,
    email: string,
    userName: string
  ) {
    const code = await this.verificationCodeRepository.create(userId);

    await this.emailService.sendVerificationCode(userName, email, code);
  }
}

export { VerificationCodeService };
