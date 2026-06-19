import { PrismaClient } from "@prisma/client";
import { pickRandomPhotos } from "./photos.js";

interface ParkSeed {
  title: string;
  slug: string;
  content: string;
  price: number;
  latitude: number;
  longitude: number;
  biodiversity: string;
  maximumCapacity: number;
}

const parksByCity: Record<string, ParkSeed[]> = {
  Teresópolis: [
    {
      title: "Parque Nacional da Serra dos Órgãos (PARNASO)",
      slug: "parque-nacional-serra-dos-orgaos",
      content:
        "Criado em 30 de novembro de 1939, o PARNASO é o terceiro parque nacional mais antigo do Brasil, com 20.024 hectares protegidos. Sua sede em Teresópolis abriga a maior rede de trilhas do país, com mais de 200 km de percursos. O parque protege a excepcional paisagem da Serra dos Órgãos e uma biodiversidade riquíssima da Mata Atlântica, com mais de 2.800 espécies de plantas, 462 aves e 105 mamíferos. Aberto de terça a domingo, das 7h às 16h (trilhas da parte baixa). Entrada gratuita. Localizado na Av. Rotariana, bairro do Alto.",
      price: 0,
      latitude: -22.448,
      longitude: -42.983,
      biodiversity:
        "Altíssima - Mais de 2.800 espécies de plantas, 462 aves e 105 mamíferos registrados na Mata Atlântica",
      maximumCapacity: 100,
    },
    {
      title: "Parque Natural Municipal Montanhas de Teresópolis",
      slug: "parque-montanhas-teresopolis",
      content:
        "Criado em 6 de julho de 2009, o PNMMT é uma das maiores unidades de conservação de proteção integral criadas por um município no estado do Rio de Janeiro, com 5.335 hectares. Possui duas sedes: Pedra da Tartaruga (zona urbana, bairro Granja Florestal) e Santa Rita (zona rural, 2º distrito). Oferece trilhas para todos os níveis, camping, rapel, escalada, mirantes e observação de aves. Aberto de terça a domingo, das 8h às 17h. Entrada gratuita, com limite de 800 visitantes por vez.",
      price: 0,
      latitude: -22.438,
      longitude: -42.976,
      biodiversity:
        "Alta - 5.335 hectares de Mata Atlântica protegendo nascentes e espécies da fauna e flora regional",
      maximumCapacity: 800,
    },
    {
      title: "Parque Municipal do Ingá (Parque Regadas)",
      slug: "parque-inga-teresopolis",
      content:
        "Parque urbano localizado no centro de Teresópolis, na Várzea. Conta com lago, quadras esportivas, parquinho infantil, pistas de caminhada e áreas verdes para lazer. É palco de eventos culturais como o Domingo no Parque, feiras de artesanato e apresentações musicais. Aberto diariamente com entrada gratuita.",
      price: 0,
      latitude: -22.43,
      longitude: -42.976,
      biodiversity:
        "Média - Parque urbano com jardins, árvores nativas e lago artificial",
      maximumCapacity: 2000,
    },
    {
      title: "Parque Municipal de Exposições de Teresópolis",
      slug: "parque-exposicoes-teresopolis",
      content:
        "Localizado no bairro de Albuquerque, o Parque Municipal de Exposições é a sede da FEPORT (Feira do Produtor Rural de Teresópolis) e de grandes eventos agropecuários. Conta com arena de shows, espaço raça para competições equestres (Mangalarga Marchador), fazendinha, parque infantil, praça de alimentação e área para expositores. Entrada gratuita durante eventos.",
      price: 0,
      latitude: -22.4,
      longitude: -42.965,
      biodiversity:
        "Baixa - Área de eventos com espaços gramados e árvores esparsas",
      maximumCapacity: 5000,
    },
    {
      title: "Horto Municipal de Teresópolis",
      slug: "horto-municipal-teresopolis",
      content:
        "Espaço verde dedicado à produção de mudas nativas e ornamentais, localizado no bairro de São Pedro. O Horto Municipal funciona como um viveiro de plantas e também como área de lazer e educação ambiental. Aberto à visitação pública, oferece trilhas curtas, áreas para piquenique e contato direto com a natureza. Ideal para famílias com crianças e para quem busca um passeio tranquilo em meio à vegetação.",
      price: 0,
      latitude: -22.42,
      longitude: -42.968,
      biodiversity:
        "Média - Viveiro com dezenas de espécies nativas da Mata Atlântica e plantas ornamentais",
      maximumCapacity: 200,
    },
    {
      title: "Sítio Edmundo - Refúgio de Vida Silvestre",
      slug: "sitio-edmundo-refugio-vida-silvestre-teresopolis",
      content:
        "Reserva particular do patrimônio natural localizada no 2º distrito de Teresópolis (Venda Nova). Com área de Mata Atlântica preservada, o Sítio Edmundo é um refúgio para diversas espécies da fauna e flora silvestres. Oferece trilhas ecológicas guiadas, observação de aves, cachoeiras e piscinas naturais. Visitação mediante agendamento, com capacidade limitada para garantir a preservação ambiental.",
      price: 20,
      latitude: -22.385,
      longitude: -42.91,
      biodiversity:
        "Alta - Remanescente de Mata Atlântica com nascentes, cachoeiras e rica biodiversidade",
      maximumCapacity: 50,
    },
  ],
  Petrópolis: [
    {
      title: "Parque Natural Municipal de Petrópolis",
      slug: "parque-natural-municipal-petropolis",
      content:
        "Unidade de conservação municipal localizada na área urbana de Petrópolis, com mais de 300 hectares de Mata Atlântica preservada. Oferece trilhas ecológicas, cachoeiras, mirantes com vista para a cidade imperial e para a Serra dos Órgãos. Abriga nascentes que abastecem mananciais locais. Aberto aos finais de semana e feriados, com entrada gratuita e monitoria ambiental.",
      price: 0,
      latitude: -22.47,
      longitude: -43.16,
      biodiversity:
        "Alta - 300 hectares de Mata Atlântica com nascentes, cachoeiras e fauna silvestre diversificada",
      maximumCapacity: 300,
    },
    {
      title: "Parque Cremerie",
      slug: "parque-cremerie-petropolis",
      content:
        "Parque histórico localizado ao lado da Casa de Santos Dumont, no centro de Petrópolis. O nome vem da antiga fábrica de laticínios (Cremerie) que funcionava no local. O parque preserva a arquitetura original da fábrica e oferece áreas verdes, lagos artificiais, quiosques, playground e espaço para eventos culturais. É um dos cartões-postais da cidade, com entrada gratuita.",
      price: 0,
      latitude: -22.51,
      longitude: -43.18,
      biodiversity:
        "Baixa - Parque urbano histórico com jardins ornamentais e lagos artificiais",
      maximumCapacity: 1000,
    },
  ],
  "Nova Friburgo": [
    {
      title: "Parque Estadual dos Três Picos",
      slug: "parque-estadual-dos-tres-picos",
      content:
        "Criado em 2002, o Parque Estadual dos Três Picos é a maior unidade de conservação do estado do Rio de Janeiro, com mais de 46 mil hectares abrangendo os municípios de Cachoeiras de Macacu, Silva Jardim, Guapimirim e Nova Friburgo. Protege um dos maiores remanescentes contínuos de Mata Atlântica do estado, com picos que chegam a 2.316 metros de altitude. Oferece trilhas desafiadoras, cachoeiras e biodiversidade exuberante.",
      price: 0,
      latitude: -22.35,
      longitude: -42.55,
      biodiversity:
        "Altíssima - Maior parque estadual do RJ, com 46 mil hectares de Mata Atlântica, espécies ameaçadas e nascentes",
      maximumCapacity: 200,
    },
    {
      title: "Reserva Ecológica de Macaé de Cima",
      slug: "reserva-ecologica-macae-cima-nova-friburgo",
      content:
        "Reserva particular localizada no distrito de Macaé de Cima, em Nova Friburgo. Área de preservação ambiental com exuberante Mata Atlântica, cachoeiras, piscinas naturais e rica biodiversidade. Conhecida por abrigar nascentes do rio Macaé, é um destino popular para ecoturismo, banhos de cachoeira e trilhas ecológicas. Visitação controlada para preservação ambiental.",
      price: 15,
      latitude: -22.33,
      longitude: -42.5,
      biodiversity:
        "Alta - Área de preservação com Mata Atlântica preservada, cachoeiras e diversas espécies endêmicas",
      maximumCapacity: 150,
    },
  ],
};

export async function seedParkOutings(prismaClient: PrismaClient) {
  try {
    const parkCategory = await prismaClient.category.findUnique({
      where: { name: "Park" },
    });

    if (!parkCategory) {
      console.error(
        "Category 'Park' not found. Please run category seeder first.",
      );
      return;
    }

    for (const [cityName, parks] of Object.entries(parksByCity)) {
      const city = await prismaClient.city.findUnique({
        where: { name: cityName },
      });

      if (!city) {
        console.error(
          `City '${cityName}' not found. Please run city seeder first.`,
        );
        continue;
      }

      for (const park of parks) {
        let location = await prismaClient.location.findFirst({
          where: { latitude: park.latitude, longitude: park.longitude },
        });

        if (!location) {
          location = await prismaClient.location.create({
            data: {
              latitude: park.latitude,
              longitude: park.longitude,
              cityId: city.id,
            },
          });
        }

        const parkOuting = await prismaClient.outings.upsert({
          where: { slug: park.slug },
          update: {
            title: park.title,
            content: park.content,
            price: park.price,
            public: "ALL",
            categoryId: parkCategory.id,
            locationId: location.id,
            photos: {
              deleteMany: {},
              create: pickRandomPhotos(8).map((p) => ({
                alt: `${park.title} - ${p.alt}`,
                url: p.url,
              })),
            },
            openHours: {
              deleteMany: {},
              create: [
                { dayOfWeek: 2, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 3, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 4, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 5, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 6, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 7, openTime: "08:00", closeTime: "17:00" },
              ],
            },
            park: {
              upsert: {
                create: {
                  biodiversity: park.biodiversity,
                  maximumCapacity: park.maximumCapacity,
                },
                update: {
                  biodiversity: park.biodiversity,
                  maximumCapacity: park.maximumCapacity,
                },
              },
            },
          },
          create: {
            title: park.title,
            content: park.content,
            price: park.price,
            slug: park.slug,
            public: "ALL",
            categoryId: parkCategory.id,
            locationId: location.id,
            photos: {
              create: pickRandomPhotos(8).map((p) => ({
                alt: `${park.title} - ${p.alt}`,
                url: p.url,
              })),
            },
            openHours: {
              create: [
                { dayOfWeek: 2, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 3, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 4, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 5, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 6, openTime: "08:00", closeTime: "17:00" },
                { dayOfWeek: 7, openTime: "08:00", closeTime: "17:00" },
              ],
            },
            park: {
              create: {
                biodiversity: park.biodiversity,
                maximumCapacity: park.maximumCapacity,
              },
            },
          },
        });

        console.log(`Seeded Park Outing: ${parkOuting.title}`);
      }
    }
  } catch (error) {
    console.error("Error seeding park outing:", error);
  }
}
