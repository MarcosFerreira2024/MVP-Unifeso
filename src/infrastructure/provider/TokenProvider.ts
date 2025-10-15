import jwt from "jsonwebtoken";

export class JwtTokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET!;

  async generate(userId: string, email: string, role: string): Promise<string> {
    return jwt.sign({ userId, email, role }, this.secret, {
      expiresIn: "24h",
    });
  }

  async verify(
    token: string
  ): Promise<{ userId: string; email: string; role: string } | null> {
    try {
      const decoded = jwt.verify(token, this.secret) as {
        userId: string;
        email: string;
        role: string;
      };
      return decoded;
    } catch {
      throw new Error("Token inválido ou expirado");
    }
  }
}
