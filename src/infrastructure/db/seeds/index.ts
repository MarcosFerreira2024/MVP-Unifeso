import { PrismaClient } from "@prisma/client";
import { seedAdmin } from "./admin";
import { seedCategory } from "./category";
import { seedCity } from "./city";
import { seedTrailOuting } from "./seedTrailOuting";
import { seedParkOuting } from "./seedParkOuting";
import { seedEventOuting } from "./seedEventOuting";
import { prisma } from "../../libs/prisma/prisma";

async function main() {
  console.log("Start seeding...");

  await seedCity(prisma);
  await seedCategory(prisma);
  await seedAdmin(prisma);

  await seedTrailOuting(prisma);
  await seedParkOuting(prisma);
  await seedEventOuting(prisma);

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
