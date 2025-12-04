import { PrismaClient } from "@prisma/client";
import { Audience } from "../../../shared/enums";

export async function seedEventOuting(prismaClient: PrismaClient) {
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

    const eventCategory = await prismaClient.category.findUnique({
      where: { name: "Event" },
    });

    if (!eventCategory) {
      console.error(
        "Category 'Event' not found. Please run category seeder first."
      );
      return;
    }

    for (let i = 1; i <= 8; i++) {
      const baseSlug = "festival-inverno-teresopolis";
      const slug = `${baseSlug}-${i}`;
      const title = `Festival de Inverno Teresópolis ${i}`;
      const content = `Festival anual com shows, gastronomia e atividades culturais. Edição ${i}.`;
      const latitude = -22.441 + (i * 0.0005); // Slightly vary latitude
      const longitude = -42.9805 + (i * 0.0005); // Slightly vary longitude

      const dayStart = String(i).padStart(2, '0');
      const dayEnd = String(i + 7).padStart(2, '0');

      const startDate = new Date(`2025-07-${dayStart}T18:00:00Z`);
      const endDate = new Date(`2025-07-${dayEnd}T22:00:00Z`);

      // Find or create a location for the outing
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

      // Create or update an event outing
      const eventOuting = await prismaClient.outings.upsert({
        where: {
          slug: slug,
        },
        update: {
          title: title,
          content: content,
          price: 80 + i * 5, // Vary price
          public: "ALL",
          categoryId: eventCategory.id,
          locationId: location.id,
          photos: {
            deleteMany: {},
            create: [
              { alt: `${title} - Palco`, url: `https://picsum.photos/seed/event${i}v1/800/600` },
              { alt: `${title} - Público`, url: `https://picsum.photos/seed/event${i}v2/800/600` },
              { alt: `${title} - Comida`, url: `https://picsum.photos/seed/event${i}v3/800/600` },
              { alt: `${title} - Decoração`, url: `https://picsum.photos/seed/event${i}v4/800/600` },
              { alt: `${title} - Show`, url: `https://picsum.photos/seed/event${i}v5/800/600` },
              { alt: `${title} - Luzes`, url: `https://picsum.photos/seed/event${i}v6/800/600` },
              { alt: `${title} - Barraca`, url: `https://picsum.photos/seed/event${i}v7/800/600` },
              { alt: `${title} - Arte`, url: `https://picsum.photos/seed/event${i}v8/800/600` },
            ],
          },
          openHours: {
            deleteMany: {},
            create: [
              { dayOfWeek: 5, openTime: "18:00", closeTime: "23:00" },
              { dayOfWeek: 6, openTime: "14:00", closeTime: "23:00" },
              { dayOfWeek: 7, openTime: "14:00", closeTime: "22:00" },
            ],
          },
          event: {
            upsert: {
              create: {
                maximumCapacity: 1000 + i * 100,
                startDate: startDate,
                endDate: endDate,
              },
              update: {
                maximumCapacity: 1000 + i * 100,
                startDate: startDate,
                endDate: endDate,
              },
            },
          },
        },
        create: {
          title: title,
          content: content,
          price: 80 + i * 5,
          slug: slug,
          public: "ALL",
          categoryId: eventCategory.id,
          locationId: location.id,
          photos: {
            create: [
              { alt: `${title} - Palco`, url: `https://picsum.photos/seed/event${i}v1/800/600` },
              { alt: `${title} - Público`, url: `https://picsum.photos/seed/event${i}v2/800/600` },
              { alt: `${title} - Comida`, url: `https://picsum.photos/seed/event${i}v3/800/600` },
              { alt: `${title} - Decoração`, url: `https://picsum.photos/seed/event${i}v4/800/600` },
              { alt: `${title} - Show`, url: `https://picsum.photos/seed/event${i}v5/800/600` },
              { alt: `${title} - Luzes`, url: `https://picsum.photos/seed/event${i}v6/800/600` },
              { alt: `${title} - Barraca`, url: `https://picsum.photos/seed/event${i}v7/800/600` },
              { alt: `${title} - Arte`, url: `https://picsum.photos/seed/event${i}v8/800/600` },
            ],
          },
          openHours: {
            create: [
              { dayOfWeek: 5, openTime: "18:00", closeTime: "23:00" },
              { dayOfWeek: 6, openTime: "14:00", closeTime: "23:00" },
              { dayOfWeek: 7, openTime: "14:00", closeTime: "22:00" },
            ],
          },
          event: {
            create: {
              maximumCapacity: 1000 + i * 100,
              startDate: startDate,
              endDate: endDate,
            },
          },
        },
      });

      console.log(`Seeded Event Outing: ${eventOuting.title}`);
    }
  } catch (error) {
    console.error("Error seeding event outing:", error);
  }
}
