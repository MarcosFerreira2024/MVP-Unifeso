import { IParkRepository } from "../../domain/interfaces/IParkRepository";
import { ParkFromDB } from "../types/database";
import { prisma } from "../libs/prisma/prisma";

class ParkRepository implements IParkRepository {
  async create(data: {
    outingId: string;
    biodiversity: string;
    maximumCapacity: number;
  }): Promise<ParkFromDB> {
    return prisma.park.create({
      data: {
        outingId: data.outingId,
        biodiversity: data.biodiversity,
        maximumCapacity: data.maximumCapacity,
      },
    });
  }

  async findById(id: string): Promise<ParkFromDB | null> {
    return prisma.park.findUnique({ where: { id } });
  }

  async findByOutingId(outingId: string): Promise<ParkFromDB | null> {
    return prisma.park.findUnique({ where: { outingId } });
  }

  async update(
    id: string,
    data: { biodiversity?: string; maximumCapacity?: number }
  ): Promise<ParkFromDB> {
    return prisma.park.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.park.delete({ where: { id } });
  }

  async deleteByOutingId(outingId: string): Promise<void> {
    await prisma.park.delete({ where: { outingId } });
  }
}

export { ParkRepository };
