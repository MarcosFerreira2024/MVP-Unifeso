import { User } from "../../domain/entities/User";
import {
  IUserRepository,
  UpdateUserDTO,
} from "../../domain/interfaces/IUserRepository";
import { mapPrismaUserToUserFromDB } from "../../helpers/mapPrismaUserToUserFromDb";
import { prisma } from "../libs/prisma/prisma";
import { UserFromDBWithRelations } from "../types/dataBase";

class UserRepository implements IUserRepository {
  async create(user: User): Promise<void> {
    const { email, name, password } = user.getDTO();

    await prisma.users.create({
      data: {
        email,
        name,
        hashedPassword: password,
      },
    });
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
        bookings: true,
        ratings: true,
      },
    });

    if (!user) return null;

    return mapPrismaUserToUserFromDB(user);
  }

  async findById(id: string): Promise<UserFromDBWithRelations | null> {
    const user = await prisma.users.findUnique({
      where: { id },
      include: {
        bookings: true,
        ratings: true,
      },
    });

    if (!user) return null;

    return mapPrismaUserToUserFromDB(user);
  }

  async update(
    userId: string,
    data: UpdateUserDTO
  ): Promise<UserFromDBWithRelations> {
    const user = await prisma.users.update({
      where: { id: userId },
      data,
      include: { bookings: true, ratings: true },
    });

    return mapPrismaUserToUserFromDB(user);
  }
}

export { UserRepository };
