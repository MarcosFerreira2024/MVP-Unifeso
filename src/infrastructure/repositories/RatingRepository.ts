import { IRatingRepository } from "../../domain/interfaces/IRatingRepository";
import { prisma } from "../libs/prisma/prisma";
import { RatingFromDB, RatingFromDBWithRelations } from "../types/database";

class RatingRepository implements IRatingRepository {
  async create(
    rating: number,
    userId: string,
    outingId: string,
    content?: string
  ): Promise<RatingFromDB> {
    return await prisma.ratings.create({
      data: {
        rating,
        comment: content,
        userId,
        outingId,
      },
    });
  }

  async findById(id: string): Promise<RatingFromDB | null> {
    return await prisma.ratings.findUnique({
      where: { id },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.ratings.delete({
      where: { id },
    });
  }

  async findAllByOutingId(
    outingId: string
  ): Promise<RatingFromDBWithRelations[] | null> {
    const ratings = await prisma.ratings.findMany({
      where: {
        outingId,
      },
      include: {
        user: {
          select: {
            avatarUrl: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return ratings;
  }

  async findAllByUserId(
    userId: string
  ): Promise<RatingFromDBWithRelations[] | null> {
    const ratings = await prisma.ratings.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            avatarUrl: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return ratings;
  }
}

export { RatingRepository };
