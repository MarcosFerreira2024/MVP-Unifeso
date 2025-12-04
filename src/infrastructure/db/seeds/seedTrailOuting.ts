import { PrismaClient } from "@prisma/client";
import { Audience } from "../../../shared/enums";

export async function seedTrailOuting(prismaClient: PrismaClient) {
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

    const trailCategory = await prismaClient.category.findUnique({
      where: { name: "Trail" },
    });

    if (!trailCategory) {
      console.error(
        "Category 'Trail' not found. Please run category seeder first."
      );
      return;
    }

    for (let i = 1; i <= 8; i++) {
      const baseSlug = "trilha-pedra-do-sino";
      const slug = `${baseSlug}-${i}`;
      const title = `Trilha da Pedra do Sino ${i}`;
      const content = `Uma das trilhas mais famosas da Serra dos Órgãos, com vistas incríveis. Variação ${i}.`;
      const latitude = -22.4281 + i * 0.001;
      const longitude = -42.9772 + i * 0.001;

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

      const trailOuting = await prismaClient.outings.upsert({
        where: {
          slug: slug,
        },
        update: {
          title: title,
          content: content,
          price: 50 + i * 5,
          public: "ALL",
          categoryId: trailCategory.id,
          locationId: location.id,
          photos: {
            deleteMany: {},
            create: [
              {
                alt: `${title} - Vista 1`,
                url: `https://picsum.photos/seed/trail${i}v1/800/600`,
              },
              {
                alt: `${title} - Vista 2`,
                url: `https://picsum.photos/seed/trail${i}v2/800/600`,
              },
              {
                alt: `${title} - Floresta`,
                url: `https://picsum.photos/seed/trail${i}v3/800/600`,
              },
              {
                alt: `${title} - Rocha`,
                url: `https://picsum.photos/seed/trail${i}v4/800/600`,
              },
              {
                alt: `${title} - Caminho`,
                url: `https://picsum.photos/seed/trail${i}v5/800/600`,
              },
              {
                alt: `${title} - Natureza`,
                url: `https://picsum.photos/seed/trail${i}v6/800/600`,
              },
              {
                alt: `${title} - Paisagem`,
                url: `https://picsum.photos/seed/trail${i}v7/800/600`,
              },
              {
                alt: `${title} - Cume`,
                url: `https://picsum.photos/seed/trail${i}v8/800/600`,
              },
            ],
          },
          openHours: {
            deleteMany: {},
            create: [{ dayOfWeek: 6, openTime: "06:00", closeTime: "18:00" }],
          },
          trail: {
            upsert: {
              create: {
                difficulty: i % 2 === 0 ? "HARD" : "MEDIUM",
                duration: (8 + i) * 60,
                distance: 11.5 + i * 0.5,
                roundTrip: i % 2 === 0,
              },
              update: {
                difficulty: i % 2 === 0 ? "HARD" : "MEDIUM",
                duration: (8 + i) * 60,
                distance: 11.5 + i * 0.5,
                roundTrip: i % 2 === 0,
              },
            },
          },
        },
        create: {
          title: title,
          content: content,
          price: 50 + i * 5,
          slug: slug,
          public: "ALL",
          categoryId: trailCategory.id,
          locationId: location.id,
          photos: {
            create: [
              {
                alt: `${title} - Vista 1`,
                url: `https://picsum.photos/seed/trail${i}v1/800/600`,
              },
              {
                alt: `${title} - Vista 2`,
                url: `https://picsum.photos/seed/trail${i}v2/800/600`,
              },
              {
                alt: `${title} - Floresta`,
                url: `https://picsum.photos/seed/trail${i}v3/800/600`,
              },
              {
                alt: `${title} - Rocha`,
                url: `https://picsum.photos/seed/trail${i}v4/800/600`,
              },
              {
                alt: `${title} - Caminho`,
                url: `https://picsum.photos/seed/trail${i}v5/800/600`,
              },
              {
                alt: `${title} - Natureza`,
                url: `https://picsum.photos/seed/trail${i}v6/800/600`,
              },
              {
                alt: `${title} - Paisagem`,
                url: `https://picsum.photos/seed/trail${i}v7/800/600`,
              },
              {
                alt: `${title} - Cume`,
                url: `https://picsum.photos/seed/trail${i}v8/800/600`,
              },
            ],
          },
          openHours: {
            create: [{ dayOfWeek: 6, openTime: "06:00", closeTime: "18:00" }],
          },
          trail: {
            create: {
              difficulty: i % 2 === 0 ? "HARD" : "MEDIUM",
              duration: (8 + i) * 60,
              distance: 11.5 + i * 0.5,
              roundTrip: i % 2 === 0,
            },
          },
        },
      });

      console.log(`Seeded Trail Outing: ${trailOuting.title}`);
    }
  } catch (error) {
    console.error("Error seeding trail outing:", error);
  }
}
