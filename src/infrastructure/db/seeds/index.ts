import { seedAdmin } from "./admin";
import { seedCategory } from "./category";
import { seedCity } from "./city";
import { seedEventOutings } from "./eventOutings";
import { seedParkOutings } from "./parkOutings";
import { seedTrailOutings } from "./trailOutings";
import { seedUser } from "./user";
import { prisma } from "../../libs/prisma/prisma";

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
