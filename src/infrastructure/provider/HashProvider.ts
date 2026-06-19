import bcrypt from "bcrypt";
import { injectable } from "tsyringe";
import { IHashProvider } from "../../domain/interfaces/IHashProvider";

@injectable()
class HashProvider implements IHashProvider {
  private readonly saltRounds = 10;

  async generate(payload: string): Promise<string> {
    return bcrypt.hash(payload, this.saltRounds);
  }

  async compare(payload: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(payload, hashed);
  }
}

export { HashProvider };
