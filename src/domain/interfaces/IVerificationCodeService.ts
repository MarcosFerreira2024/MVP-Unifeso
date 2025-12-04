interface IVerificationCodeService {
  createAndSendEmail(
    userId: string,
    email: string,
    userName: string
  ): Promise<void>;
}

export { IVerificationCodeService };
