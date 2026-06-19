import { IRatingRepository } from "../../domain/interfaces/IRatingRepository.js";
import { prisma } from "../libs/prisma/prisma.js";
import { RatingFromDB, RatingFromDBWithRelations } from "../types/database.js";

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

  async update(id: string, rating: number, content?: string): Promise<RatingFromDB> {
    return await prisma.ratings.update({
      where: { id },
      data: { rating, comment: content },
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
                name: true,
              },
        },
      },
    });

    return ratings;
  }
}

export { RatingRepository };
