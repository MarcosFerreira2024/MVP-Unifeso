import { IRatingRepository } from "../../domain/interfaces/IRatingRepository";
import { mapPrismaRole } from "../../helpers/mapPrismaRole";
import { prisma } from "../libs/prisma/prisma";
import { RatingFromDB, RatingFromDBWithRelations } from "../types/dataBase";

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
  async delete(
    userId: string,
    outingId: string,
    ratingId: string
  ): Promise<void> {
    await prisma.ratings.deleteMany({
      where: { userId, outingId, id: ratingId },
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
          },
        },
      },
    });

    return ratings;
  }
}

export { RatingRepository };
