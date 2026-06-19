import {
  CreateOutingInput,
  IOutingRepository,
  UpdateOutingInput,
} from "../../domain/interfaces/IOutingRepository";
import { prisma } from "../libs/prisma/prisma";
import { OutingFromDBWithRelations } from "../types/database";

class OutingRepository implements IOutingRepository {
  async findById(id: string): Promise<OutingFromDBWithRelations | null> {
    const outing = await prisma.outings.findUnique({
      where: {
        id: id,
      },
      omit: {
        categoryId: true,
        locationId: true,
      },
      include: {
        trail: {
          select: {
            id: true,
            difficulty: true,
            duration: true,
            distance: true,
            roundTrip: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        park: {
          select: {
            id: true,
            biodiversity: true,
            maximumCapacity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        event: {
          select: {
            id: true,
            maximumCapacity: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        photos: {
          select: {
            id: true,
            alt: true,
            url: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        openHours: {
          select: {
            id: true,
            dayOfWeek: true,
            openTime: true,
            closeTime: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        ratings: {
          select: {
            id: true,
            comment: true,
            rating: true,
            userId: true,
            outingId: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                avatarUrl: true,
                name: true,
              },
            },
          },
        },
        location: {
          select: {
            latitude: true,
            longitude: true,
            city: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return outing;
  }

  async findBySlug(slug: string): Promise<OutingFromDBWithRelations | null> {
    const outing = await prisma.outings.findUnique({
      where: {
        slug: slug,
      },
      omit: {
        categoryId: true,
        locationId: true,
      },

      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        trail: {
          select: {
            id: true,
            difficulty: true,
            duration: true,
            distance: true,
            roundTrip: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        park: {
          select: {
            id: true,
            biodiversity: true,
            maximumCapacity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        event: {
          select: {
            id: true,
            maximumCapacity: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        photos: {
          select: {
            id: true,
            alt: true,
            url: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        openHours: {
          select: {
            id: true,
            dayOfWeek: true,
            openTime: true,
            closeTime: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        ratings: {
          select: {
            id: true,
            comment: true,
            rating: true,
            userId: true,
            outingId: true,
            user: {
              select: {
                avatarUrl: true,
                name: true,
              },
            },
            createdAt: true,
            updatedAt: true,
          },
        },
        location: {
          select: {
            latitude: true,
            longitude: true,
            city: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
      },
    });
    return outing;
  }

  async findAll(
    take?: number,
    skip?: number,
    title?: string,
    category?: string | string[],
    sortBy?: "title" | "city",
    orderBy?: "asc" | "desc"
  ): Promise<OutingFromDBWithRelations[]> {
    const defaultTake = 10;
    const defaultSkip = 0;

    const queryTake = take !== undefined ? Number(take) : defaultTake;
    const querySkip = skip !== undefined ? Number(skip) : defaultSkip;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};
    if (title) {
      where.OR = [
        { title: { contains: title } },
        { content: { contains: title } },
      ];
    }

    if (category) {
      const categoriesToFilter = Array.isArray(category)
        ? category.filter((cat) => cat !== "all")
        : category !== "all"
        ? [category]
        : [];

      if (categoriesToFilter.length > 0) {
        where.category = {
          name: { in: categoriesToFilter },
        };
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orderByClause: any = {};
    if (sortBy) {
      if (sortBy === "city") {
        orderByClause.location = {
          city: {
            name: orderBy || "asc",
          },
        };
      } else if (sortBy === "title") {
        orderByClause.title = orderBy || "asc";
      }
    }

    const outings = await prisma.outings.findMany({
      take: queryTake,
      skip: querySkip,
      where,
      orderBy: orderByClause,
      omit: {
        categoryId: true,
        locationId: true,
      },
      include: {
        trail: {
          select: {
            id: true,
            difficulty: true,
            duration: true,
            distance: true,
            roundTrip: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        park: {
          select: {
            id: true,
            biodiversity: true,
            maximumCapacity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        event: {
          select: {
            id: true,
            maximumCapacity: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        photos: {
          select: {
            id: true,
            alt: true,
            url: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        openHours: {
          select: {
            id: true,
            dayOfWeek: true,
            openTime: true,
            closeTime: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        ratings: {
          select: {
            id: true,
            comment: true,
            rating: true,
            userId: true,
            outingId: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                avatarUrl: true,
                name: true,
              },
            },
          },
        },
        location: {
          select: {
            latitude: true,
            longitude: true,
            city: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return outings;
  }

  async findAllWithCount(
    take?: number,
    skip?: number,
    title?: string,
    category?: string | string[],
    sortBy?: "title" | "city",
    orderBy?: "asc" | "desc"
  ): Promise<{ items: OutingFromDBWithRelations[]; totalItems: number }> {
    const defaultTake = 10;
    const defaultSkip = 0;

    const queryTake = take !== undefined ? Number(take) : defaultTake;
    const querySkip = skip !== undefined ? Number(skip) : defaultSkip;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};
    if (title) {
      where.OR = [
        { title: { contains: title } },
        { content: { contains: title } },
      ];
    }

    if (category) {
      const categoriesToFilter = Array.isArray(category)
        ? category.filter((cat) => cat !== "all")
        : category !== "all"
        ? [category]
        : [];

      if (categoriesToFilter.length > 0) {
        where.category = {
          name: { in: categoriesToFilter },
        };
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orderByClause: any = {};
    if (sortBy) {
      if (sortBy === "city") {
        orderByClause.location = {
          city: {
            name: orderBy || "asc",
          },
        };
      } else if (sortBy === "title") {
        orderByClause.title = orderBy || "asc";
      }
    }

    const [totalItems, items] = await prisma.$transaction([
      prisma.outings.count({ where }),
      prisma.outings.findMany({
        take: queryTake,
        skip: querySkip,
        where,
        orderBy: orderByClause,
        omit: {
          categoryId: true,
          locationId: true,
        },
        include: {
          trail: {
            select: {
              id: true,
              difficulty: true,
              duration: true,
              distance: true,
              roundTrip: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          park: {
            select: {
              id: true,
              biodiversity: true,
              maximumCapacity: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          event: {
            select: {
              id: true,
              maximumCapacity: true,
              startDate: true,
              endDate: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          photos: {
            select: {
              id: true,
              alt: true,
              url: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          openHours: {
            select: {
              id: true,
              dayOfWeek: true,
              openTime: true,
              closeTime: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          ratings: {
            select: {
              id: true,
              comment: true,
              rating: true,
              userId: true,
              outingId: true,
              createdAt: true,
              updatedAt: true,
              user: {
                select: {
                  avatarUrl: true,
                  email: true,
                  name: true,
                },
              },
            },
          },
          location: {
            select: {
              latitude: true,
              longitude: true,
              city: {
                select: {
                  id: true,
                  name: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
    ]);

    return { items, totalItems };
  }

  async create(data: CreateOutingInput): Promise<OutingFromDBWithRelations> {
    const {
      photos = [],
      openHours = [],
      publicAudience,
      locationId,
      ...rest
    } = data;

    return prisma.outings.create({
      data: {
        ...rest,
        public: publicAudience,
        locationId,
        photos: photos.length > 0 ? { create: photos } : undefined,
        openHours: openHours.length > 0 ? { create: openHours } : undefined,
      },
      omit: {
        categoryId: true,
        locationId: true,
      },
      include: {
        trail: {
          select: {
            id: true,
            difficulty: true,
            duration: true,
            distance: true,
            roundTrip: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        park: {
          select: {
            id: true,
            biodiversity: true,
            maximumCapacity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        event: {
          select: {
            id: true,
            maximumCapacity: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        photos: {
          select: {
            id: true,
            alt: true,
            url: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        openHours: {
          select: {
            id: true,
            dayOfWeek: true,
            openTime: true,
            closeTime: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        ratings: {
          select: {
            id: true,
            comment: true,
            rating: true,
            userId: true,
            outingId: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                avatarUrl: true,
                name: true,
              },
            },
          },
        },
        location: {
          select: {
            latitude: true,
            longitude: true,
            city: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    data: UpdateOutingInput
  ): Promise<OutingFromDBWithRelations> {
    const {
      photos,
      openHours,
      trail,
      park,
      event,
      publicAudience,
      locationId,
      ...outingData
    } = data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {
      ...outingData,
    };

    if (publicAudience) {
      updateData.public = publicAudience;
    }

    if (locationId !== undefined) {
      updateData.locationId = locationId;
    }

    if (photos) {
      updateData.photos = {
        deleteMany: {},
        create: photos,
      };
    }

    if (openHours) {
      updateData.openHours = {
        deleteMany: {},
        create: openHours,
      };
    }

    if (trail) {
      const existingTrail = await prisma.trail.findUnique({
        where: { outingId: id },
      });

      if (existingTrail) {
        updateData.trail = { update: trail };
      } else {
        updateData.trail = { create: trail };
      }
    }

    if (park) {
      const existingPark = await prisma.park.findUnique({
        where: { outingId: id },
      });

      if (existingPark) {
        updateData.park = { update: park };
      } else {
        updateData.park = { create: park };
      }
    }

    if (event) {
      const existingEvent = await prisma.event.findUnique({
        where: { outingId: id },
      });

      if (existingEvent) {
        updateData.event = { update: event };
      } else {
        updateData.event = { create: event };
      }
    }

    return prisma.outings.update({
      where: { id },
      data: updateData,
      omit: {
        categoryId: true,
        locationId: true,
      },
      include: {
        trail: {
          select: {
            id: true,
            difficulty: true,
            duration: true,
            distance: true,
            roundTrip: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        park: {
          select: {
            id: true,
            biodiversity: true,
            maximumCapacity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        event: {
          select: {
            id: true,
            maximumCapacity: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        photos: {
          select: {
            id: true,
            alt: true,
            url: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        openHours: {
          select: {
            id: true,
            dayOfWeek: true,
            openTime: true,
            closeTime: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        ratings: {
          select: {
            id: true,
            comment: true,
            rating: true,
            userId: true,
            outingId: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                avatarUrl: true,
                name: true,
              },
            },
          },
        },
        location: {
          select: {
            latitude: true,
            longitude: true,
            city: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.outings.delete({
      where: { id },
    });
  }
}

export { OutingRepository };
