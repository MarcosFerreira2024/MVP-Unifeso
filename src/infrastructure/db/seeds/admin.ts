import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export async function seedAdmin(prismaClient: PrismaClient) {
  const adminEmail = process.env.ADMIN_SEED_EMAIL;

  const existing = await prismaClient.users.findUnique({
    where: { email: adminEmail },
  });

  if (existing) {
    console.log("Admin já existe. Pulando seed...");
    return;
  }

  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_SEED_PASSWORD as string,
    10
  );

  await prismaClient.users.create({
    data: {
      name: "Administrador",
      email: adminEmail as string,
      hashedPassword,
      verified: true,
      role: "ADMIN",
    },
  });

  console.log("Admin criado com sucesso!");
}
