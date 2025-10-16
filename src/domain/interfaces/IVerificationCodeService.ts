interface IVerificationCodeService {
  createAndSendEmail(userId: string, email: string): Promise<void>;
}

export { IVerificationCodeService };
