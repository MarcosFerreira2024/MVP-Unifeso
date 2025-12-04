import { PrismaClient } from "@prisma/client";

export async function seedCity(prismaClient: PrismaClient) {
  const cities = [
    { id: 1, name: "Teresópolis" },
    { id: 2, name: "Petrópolis" },
    { id: 3, name: "Nova Friburgo" },
    { id: 4, name: "Guapimirim" },
    { id: 5, name: "Cachoeiras de Macacu" },
    { id: 6, name: "São José do Vale do Rio Preto" },
    { id: 7, name: "Sumidouro" },
    { id: 8, name: "Sapucaia" },
    { id: 9, name: "Areal" },
  ];

  const alreadyExist = await prismaClient.city.findFirst({
    where: {
      id: 1,
      name: "Teresópolis",
    },
  });

  if (alreadyExist) return;

  for (const city of cities) {
    await prismaClient.city.upsert({
      where: { id: city.id },
      create: { name: city.name },
      update: {},
    });
  }

  console.log("Cidades seedadas com sucesso!");
}
