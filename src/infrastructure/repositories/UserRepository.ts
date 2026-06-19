import { injectable } from "tsyringe";
import { User } from "../../domain/entities/User.js";
import {
  IUserRepository,
  UpdateUserDTO,
} from "../../domain/interfaces/IUserRepository.js";
import { mapPrismaUserToUserFromDB } from "../../helpers/mapPrismaUserToUserFromDb.js";
import { prisma } from "../libs/prisma/prisma.js";
import {
  UserWithoutPasswordFromDB,
  UserFromDBWithRelations, // This type now reflects UserWithoutPasswordFromDB with relations
} from "../types/database.js";

@injectable()
class UserRepository implements IUserRepository {
  async create(user: User): Promise<UserWithoutPasswordFromDB> {
    const { email, name, password } = user.getDTO();

    const created = await prisma.users.create({
      data: {
        email,
        name,
        hashedPassword: password,
      },
    });

    return mapPrismaUserToUserFromDB(created);
  }

  async delete(userId: string): Promise<void> {
    await prisma.users.delete({
      where: { id: userId },
    });
  }

  async findByEmail(email: string): Promise<UserFromDBWithRelations | null> {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        ratings: true,
      },
    });

    if (!user) return null;

    return mapPrismaUserToUserFromDB(user);
  }

  async findById(id: string): Promise<UserWithoutPasswordFromDB | null> {
    const user = await prisma.users.findUnique({
      where: { id },
      include: {
        ratings: true,
      },
    });

    if (!user) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hashedPassword, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findAll(): Promise<UserWithoutPasswordFromDB[]> {
    const users = await prisma.users.findMany({
      include: {
        ratings: true,
      },
    });
    return users.map(mapPrismaUserToUserFromDB);
  }

  async update(
    userId: string,
    data: UpdateUserDTO
  ): Promise<UserFromDBWithRelations> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...prismaData } = data;

    const user = await prisma.users.update({
      where: { id: userId },
      data: prismaData,
      include: { ratings: true },
    });

    return mapPrismaUserToUserFromDB(user);
  }
}

export { UserRepository };
