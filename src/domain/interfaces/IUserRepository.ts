import {
  UserFromDBWithRelations,
  UserWithoutPasswordFromDB,
} from "../../infrastructure/types/database.js";
import { User } from "../entities/User.js";

export type Role = "USER" | "ADMIN";

export type UpdateUserDTO = {
  name?: string;
  email?: string;
  password?: string;
  hashedPassword?: string;
  verified?: boolean;
  role?: Role;
};

interface IUserRepository {
  create(user: User): Promise<UserWithoutPasswordFromDB>;
  findByEmail(email: string): Promise<UserFromDBWithRelations | null>;
  findById(id: string): Promise<UserWithoutPasswordFromDB | null>;
  findAll(): Promise<UserWithoutPasswordFromDB[]>;
  update(userId: string, data: UpdateUserDTO): Promise<UserFromDBWithRelations>;
  delete(userId: string): Promise<void>;
}

export { IUserRepository };
