import {
  UserFromDB,
  UserFromDBWithRelations,
} from "../../infrastructure/types/dataBase";
import { User } from "../entities/User";

export type Role = "USER" | "ADMIN";

export type UpdateUserDTO = {
  name?: string;
  email?: string;
  password?: string;
  verified?: boolean;
  role?: Role;
};

interface IUserRepository {
  create(user: User): Promise<UserFromDB>;
  findByEmail(email: string): Promise<UserFromDBWithRelations | null>;
  findById(id: string): Promise<UserFromDBWithRelations | null>;
  update(userId: string, data: UpdateUserDTO): Promise<UserFromDB>;
  delete(userId: string): Promise<void>;
}

export { IUserRepository };
