import { seedAdmin } from "./admin.js";
import { seedCategory } from "./category.js";
import { seedCity } from "./city.js";
import { seedEventOutings } from "./eventOutings.js";
import { seedParkOutings } from "./parkOutings.js";
import { seedTrailOutings } from "./trailOutings.js";
import { seedUser } from "./user.js";
import { prisma } from "../../libs/prisma/prisma.js";

async function main() {
  console.log("Start seeding...");

  await Promise.all([
    seedCity(prisma),
    seedCategory(prisma),
    seedAdmin(prisma),
    seedUser(prisma),
  ]);

  await Promise.all([
    seedTrailOutings(prisma),
    seedParkOutings(prisma),
    seedEventOutings(prisma),
  ]);

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
