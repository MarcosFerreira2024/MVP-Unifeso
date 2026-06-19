import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export async function seedUser(prismaClient: PrismaClient) {
  const email = process.env.USER_TEST_EMAIL;
  const password = process.env.USER_TEST_PASSWORD;

  if (!email || !password) {
    console.log("Usuário de teste sem email ou senha. Pulando seed...");
    return;
  }

  const existing = await prismaClient.users.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("Usuário de teste já existe. Pulando seed...");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prismaClient.users.create({
    data: {
      name: "Usuário Teste",
      email: email,
      hashedPassword,
      verified: true,
      role: "USER",
    },
  });

  console.log("Usuário de teste criado com sucesso!");
}
