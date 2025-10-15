import { transporter } from "../../libs/nodemailer/config";

import fs from "fs/promises";

class EmailService implements IEmailService {
  async sendVerificationCode(
    name: string,
    email: string,
    code: string
  ): Promise<void> {
    const template = await fs.readFile(
      "./email/template/verificationCode.html",
      "utf-8"
    );
    const html = template.replace("{{name}}", name).replace("{{code}}", code);

    transporter.sendMail({
      from: "marcosfp2021@hotmail.com",
      encoding: "utf-8",
      to: email,
      subject: "Verification code",
      html,
    });
  }
}

export { EmailService };
