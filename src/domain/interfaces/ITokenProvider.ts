import { Role } from "./IUserRepository";

interface ITokenProvider {
  generate(userId: string, email: string, role: Role): Promise<string>;
  verify(token: string): Promise<{
    userId: string;
    role: Role;
    email: string;
    token: string;
  } | null>;
}

export { ITokenProvider };
