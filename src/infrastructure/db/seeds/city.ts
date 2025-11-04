import { prisma } from "../../libs/prisma/prisma";

async function seedCities() {
  const cities = [
    { name: "Teresópolis" },
    { name: "Petrópolis" },
    { name: "Nova Friburgo" },
    { name: "Guapimirim" },
    { name: "Cachoeiras de Macacu" },
    { name: "São José do Vale do Rio Preto" },
    { name: "Sumidouro" },
    { name: "Sapucaia" },
    { name: "Areal" },
  ];

  for (const city of cities) {
    await prisma.city.create({
      data: city,
    });
  }

  console.log("Cidades inseridas com sucesso!");
}

seedCities()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
