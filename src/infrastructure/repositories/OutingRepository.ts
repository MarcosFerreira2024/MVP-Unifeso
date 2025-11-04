import {
  AddParkInput,
  AddTrailInput,
  CreateOutingInput,
  IOutingRepository,
  UpdateOutingInput,
} from "../../domain/interfaces/IOutingRepository";
import { prisma } from "../libs/prisma/prisma";
import { Prisma } from "@prisma/client";
import { OutingFromDbWithRelations } from "../types/database";

class OutingRepository implements IOutingRepository {
  async findById(id: string): Promise<OutingFromDbWithRelations | null> {
    const outing = await prisma.outings.findUnique({
      where: {
        id,
      },
      include: {
        trail: true,
        park: true,
        events: true,
        photos: true,
        openHours: true,
        location: {
          include: {
            city: true,
          },
        },

        category: true,
      },
    });

    return outing;
  }

  async findBySlug(slug: string): Promise<OutingFromDbWithRelations | null> {
    const outing = await prisma.outings.findUnique({
      where: {
        slug,
      },
      include: {
        trail: true,
        park: true,
        events: true,
        photos: true,
        openHours: true,
        location: {
          include: {
            city: true,
          },
        },
        category: true,
      },
    });
    return outing;
  }

  async delete(id: string): Promise<void> {
    await prisma.outings.delete({
      where: { id },
    });
  }
  async create(data: CreateOutingInput): Promise<OutingFromDbWithRelations> {
    return await prisma.outings.create({
      data: {
        content: data.content,
        title: data.title,
        slug: data.slug,
        price: data.price,
        public: data.publicAudience,
      },
      include: {
        trail: true,
        park: true,
        events: true,
        photos: true,
        openHours: true,
        location: {
          include: {
            city: true,
          },
        },
        category: true,
      },
    });
  }
}

export { OutingRepository };
