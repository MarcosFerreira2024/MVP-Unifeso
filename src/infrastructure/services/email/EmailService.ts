import { injectable } from "tsyringe";
import { transporter } from "../../libs/nodemailer/config";

import fs from "fs/promises";
import path from "path";

@injectable()
class EmailService implements IEmailService {
  async sendVerificationCode(
    name: string,
    email: string,
    code: string
  ): Promise<void> {
    const templatePath = path.join(
      process.cwd(),
      "src/infrastructure/services/email/template/verificationCode.html"
    );
    const template = await fs.readFile(templatePath, "utf-8");

    const html = template.replace("{{name}}", name).replace("{{code}}", code);

    await transporter.sendMail({
      from: "Terê Verde Online <marcosfp2787@gmail.com>",
      replyTo: "marcosfp2021@hotmail.com",
      encoding: "utf-8",
      to: email,
      subject: "Verification code",
      html,
    });
    return;
  }
}

export { EmailService };
