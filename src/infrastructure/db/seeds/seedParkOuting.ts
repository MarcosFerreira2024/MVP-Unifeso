import { PrismaClient } from "@prisma/client";
import { Audience } from "../../../shared/enums";

export async function seedParkOuting(prismaClient: PrismaClient) {
  try {
    const teresopolis = await prismaClient.city.findUnique({
      where: { name: "Teresópolis" },
    });

    if (!teresopolis) {
      console.error(
        "City 'Teresópolis' not found. Please run city seeder first."
      );
      return;
    }

    const parkCategory = await prismaClient.category.findUnique({
      where: { name: "Park" },
    });

    if (!parkCategory) {
      console.error(
        "Category 'Park' not found. Please run category seeder first."
      );
      return;
    }

    for (let i = 1; i <= 8; i++) {
      const baseSlug = "parnaso-teresopolis";
      const slug = `${baseSlug}-${i}`;
      const title = `Parque Nacional da Serra dos Órgãos (PARNASO) ${i}`;
      const content = `Um parque com rica biodiversidade e diversas opções de lazer ao ar livre. Variação ${i}.`;
      const latitude = -22.4188 + i * 0.001;
      const longitude = -42.98 + i * 0.001;

      let location = await prismaClient.location.findFirst({
        where: {
          latitude,
          longitude,
        },
      });

      if (!location) {
        location = await prismaClient.location.create({
          data: {
            latitude,
            longitude,
            cityId: teresopolis.id,
          },
        });
      }

      // Create or update a park outing
      const parkOuting = await prismaClient.outings.upsert({
        where: {
          slug: slug,
        },
        update: {
          title: title,
          content: content,
          price: 25 + i * 2, // Vary price
          public: "ALL",
          categoryId: parkCategory.id,
          locationId: location.id,
          photos: {
            deleteMany: {},
            create: [
              {
                alt: `${title} - Vista 1`,
                url: `https://picsum.photos/seed/park${i}v1/800/600`,
              },
              {
                alt: `${title} - Vista 2`,
                url: `https://picsum.photos/seed/park${i}v2/800/600`,
              },
              {
                alt: `${title} - Entrada`,
                url: `https://picsum.photos/seed/park${i}v3/800/600`,
              },
              {
                alt: `${title} - Flora`,
                url: `https://picsum.photos/seed/park${i}v4/800/600`,
              },
              {
                alt: `${title} - Fauna`,
                url: `https://picsum.photos/seed/park${i}v5/800/600`,
              },
              {
                alt: `${title} - Trilhas`,
                url: `https://picsum.photos/seed/park${i}v6/800/600`,
              },
              {
                alt: `${title} - Cachoeira`,
                url: `https://picsum.photos/seed/park${i}v7/800/600`,
              },
              {
                alt: `${title} - Pôr do Sol`,
                url: `https://picsum.photos/seed/park${i}v8/800/600`,
              },
            ],
          },
          openHours: {
            deleteMany: {},
            create: [
              { dayOfWeek: 2, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 3, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 4, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 5, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 6, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 7, openTime: "08:00", closeTime: "17:00" },
            ],
          },
          park: {
            upsert: {
              create: {
                biodiversity: `Alta (Mata Atlântica) ${i}`,
                maximumCapacity: 500 + i * 10,
              },
              update: {
                biodiversity: `Alta (Mata Atlântica) ${i}`,
                maximumCapacity: 500 + i * 10,
              },
            },
          },
        },
        create: {
          title: title,
          content: content,
          price: 25 + i * 2,
          slug: slug,
          public: "ALL",
          categoryId: parkCategory.id,
          locationId: location.id,
          photos: {
            create: [
              {
                alt: `${title} - Vista 1`,
                url: `https://picsum.photos/seed/park${i}v1/800/600`,
              },
              {
                alt: `${title} - Vista 2`,
                url: `https://picsum.photos/seed/park${i}v2/800/600`,
              },
              {
                alt: `${title} - Entrada`,
                url: `https://picsum.photos/seed/park${i}v3/800/600`,
              },
              {
                alt: `${title} - Flora`,
                url: `https://picsum.photos/seed/park${i}v4/800/600`,
              },
              {
                alt: `${title} - Fauna`,
                url: `https://picsum.photos/seed/park${i}v5/800/600`,
              },
              {
                alt: `${title} - Trilhas`,
                url: `https://picsum.photos/seed/park${i}v6/800/600`,
              },
              {
                alt: `${title} - Cachoeira`,
                url: `https://picsum.photos/seed/park${i}v7/800/600`,
              },
              {
                alt: `${title} - Pôr do Sol`,
                url: `https://picsum.photos/seed/park${i}v8/800/600`,
              },
            ],
          },
          openHours: {
            create: [
              { dayOfWeek: 2, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 3, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 4, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 5, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 6, openTime: "08:00", closeTime: "17:00" },
              { dayOfWeek: 7, openTime: "08:00", closeTime: "17:00" },
            ],
          },
          park: {
            create: {
              biodiversity: `Alta (Mata Atlântica) ${i}`,
              maximumCapacity: 500 + i * 10,
            },
          },
        },
      });

      console.log(`Seeded Park Outing: ${parkOuting.title}`);
    }
  } catch (error) {
    console.error("Error seeding park outing:", error);
  }
}
