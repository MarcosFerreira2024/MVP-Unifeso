import { EmailService } from "../../infrastructure/services/email/EmailService";

describe("SendVerificationEmail", () => {
  it("should send a verification email without throwing an error", async () => {
    const emailService = new EmailService();

    let error: Error | null = null;

    try {
      await emailService.sendVerificationCode(
        "Marcos",
        "marcosfp2021@hotmail.com",
        "123456"
      );
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      } else {
        error = new Error("Unknown error occurred");
      }
    }

    expect(error).toBeNull();
  }, 15000);
});
