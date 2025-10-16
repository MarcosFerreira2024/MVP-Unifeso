import { IOutingRepository } from "../../domain/interfaces/IOutingRepository";
import { prisma } from "../libs/prisma/prisma";
import { OutingFromDBWithRelations } from "../types/dataBase";

class OutingRepository implements IOutingRepository {
  async findById(id: string): Promise<OutingFromDBWithRelations | null> {
    const outing = await prisma.outings.findUnique({
      where: {
        id,
      },
      include: {
        ratings: {
          select: {
            id: true,
            comment: true,
            user: {
              select: {
                id: true,
                email: true,
                name: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    return outing;
  }
}
