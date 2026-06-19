import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import { ITokenProvider } from "../../domain/interfaces/ITokenProvider";
import { Role } from "../../domain/interfaces/IUserRepository";
import { randomUUID } from "crypto";

@injectable()
export class TokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET!;

  generate(userId: string, email: string, role: string): Promise<string> {
    return Promise.resolve(
      jwt.sign({ userId, email, role }, this.secret, {
        expiresIn: "24h",
        jwtid: randomUUID(),
      })
    );
  }

  verify(token: string): Promise<{
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
      return Promise.resolve({
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role,
        token,
      });
    } catch {
      throw new Error("Token inválido ou expirado");
    }
  }
}
