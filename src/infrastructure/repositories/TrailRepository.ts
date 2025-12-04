import { ITrailRepository } from "../../domain/interfaces/ITrailRepository";
import { TrailFromDB } from "../types/database";
import { prisma } from "../libs/prisma/prisma";

class TrailRepository implements ITrailRepository {
  async create(data: {
    outingId: string;
    difficulty: string;
    duration: number;
    distance: number;
    roundTrip: boolean;
  }): Promise<TrailFromDB> {
    return prisma.trail.create({
      data: {
        outingId: data.outingId,
        difficulty: data.difficulty,
        duration: data.duration,
        distance: data.distance,
        roundTrip: data.roundTrip,
      },
    });
  }

  async findById(id: string): Promise<TrailFromDB | null> {
    return prisma.trail.findUnique({ where: { id } });
  }

  async findByOutingId(outingId: string): Promise<TrailFromDB | null> {
    return prisma.trail.findUnique({ where: { outingId } });
  }

  async update(
    id: string,
    data: {
      difficulty?: string;
      duration?: number;
      distance?: number;
      roundTrip?: boolean;
    }
  ): Promise<TrailFromDB> {
    return prisma.trail.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.trail.delete({ where: { id } });
  }

  async deleteByOutingId(outingId: string): Promise<void> {
    await prisma.trail.delete({ where: { outingId } });
  }
}

export { TrailRepository };
