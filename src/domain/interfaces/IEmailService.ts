interface IEmailService {
  sendVerificationCode(
    userName: string,
    email: string,
    code: string
  ): Promise<void>;
}
