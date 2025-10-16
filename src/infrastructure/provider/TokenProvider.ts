import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";

@injectable()
export class TokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET!;

  async generate(userId: string, email: string, role: string): Promise<string> {
    return jwt.sign({ userId, email, role }, this.secret, {
      expiresIn: "24h",
    });
  }

  async verify(
    token: string
  ): Promise<{
    userId: string;
    email: string;
    role: string;
    token: string;
  } | null> {
    try {
      const decoded = jwt.verify(token, this.secret) as {
        userId: string;
        email: string;
        role: string;
      };
      return {
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role,
        token,
      };
    } catch {
      throw new Error("Token inválido ou expirado");
    }
  }
}
