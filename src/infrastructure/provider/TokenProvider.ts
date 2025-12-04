import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import { ITokenProvider } from "../../domain/interfaces/ITokenProvider";
import { Role } from "../../domain/interfaces/IUserRepository";
import { randomUUID } from "crypto";

@injectable()
export class TokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET!;

  async generate(userId: string, email: string, role: string): Promise<string> {
    const token = jwt.sign({ userId, email, role }, this.secret, {
      expiresIn: "24h",
      jwtid: randomUUID(),
    });

    return token;
  }

  async verify(token: string): Promise<{
    userId: string;
    email: string;
    role: Role;
    token: string;
  } | null> {
    try {
      const decoded = jwt.verify(token, this.secret) as {
        userId: string;
        email: string;
        role: Role;
      };
      return {
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role,
        token,
      };
    } catch (e) {
      throw new Error("Token inválido ou expirado");
    }
  }
}
