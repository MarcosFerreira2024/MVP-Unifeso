import { PrismaClient } from "@prisma/client";

export async function seedCategory(prismaClient: PrismaClient) {
  const categories = [
    { id: 1, name: "Event" },
    { id: 2, name: "Trail" },
    { id: 3, name: "Park" },
  ];

  const alreadyExist = await prismaClient.category.findFirst({
    where: {
      id: 1,
      name: "Event",
    },
  });

  if (alreadyExist) return;
  for (const category of categories) {
    await prismaClient.category.upsert({
      where: {
        id: category.id,
      },
      update: {},
      create: { name: category.name, id: category.id },
    });
  }

  console.log("Categories seeded successfully.");
}
