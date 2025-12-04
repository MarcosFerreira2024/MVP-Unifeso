import { IEventRepository } from "../../domain/interfaces/IEventRepository";
import { EventFromDB } from "../types/database";
import { prisma } from "../libs/prisma/prisma";

class EventRepository implements IEventRepository {
  async create(data: {
    outingId: string;
    maximumCapacity: number;
    startDate?: Date;
    endDate?: Date;
  }): Promise<EventFromDB> {
    return prisma.event.create({
      data: {
        outingId: data.outingId,
        maximumCapacity: data.maximumCapacity,
        startDate: data.startDate ?? null,
        endDate: data.endDate ?? null,
      },
    });
  }

  async findById(id: string): Promise<EventFromDB | null> {
    return prisma.event.findUnique({ where: { id } });
  }

  async findByOutingId(outingId: string): Promise<EventFromDB | null> {
    return prisma.event.findFirst({ where: { outingId } });
  }

  async update(
    eventId: string,
    data: {
      outingId: string;
      maximumCapacity?: number;
      startDate?: Date;
      endDate?: Date | null;
    }
  ): Promise<EventFromDB> {
    return prisma.event.update({
      where: { id: eventId },
      data: {
        outingId: data.outingId,
        maximumCapacity: data.maximumCapacity,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.event.delete({ where: { id } });
  }

  async deleteByOutingId(outingId: string): Promise<void> {
    await prisma.event.deleteMany({ where: { outingId } });
  }
}

export { EventRepository };
