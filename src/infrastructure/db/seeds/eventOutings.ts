import { PrismaClient } from "@prisma/client";
import { pickRandomPhotos } from "./photos.js";

interface EventSeed {
  title: string;
  slug: string;
  content: string;
  price: number;
  latitude: number;
  longitude: number;
  startDate: Date;
  endDate: Date;
  maximumCapacity: number;
  openHours: { dayOfWeek: number; openTime: string; closeTime: string }[];
}

const eventsByCity: Record<string, EventSeed[]> = {
  Teresópolis: [
    {
      title: "Festival Sesc de Inverno em Teresópolis",
      slug: "festival-sesc-inverno-teresopolis",
      content:
        "Um dos maiores festivais multilinguagem do país, com mais de 700 horas de programação espalhadas por 25 cidades do RJ. Em Teresópolis, acontece anualmente em julho com shows gratuitos de grandes nomes da música brasileira (Jorge Aragão, Barão Vermelho, Marina Sena, Diogo Nogueira, Jota Quest), além de teatro, circo, cinema, literatura e artes visuais. Os palcos incluem a Feirinha do Alto, Parque Regadas, Castelo Montebello, Sesc Alpina e o PARNASO.",
      price: 0,
      latitude: -22.443,
      longitude: -42.978,
      startDate: new Date("2025-07-11T10:00:00Z"),
      endDate: new Date("2025-07-27T22:00:00Z"),
      maximumCapacity: 5000,
      openHours: [
        { dayOfWeek: 5, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "22:00" },
      ],
    },
    {
      title: "ChocoSerra",
      slug: "chocoserra-teresopolis",
      content:
        "Festival tradicional do chocolate em Teresópolis, chegando à 28ª edição em 2025. Realizado no Espaço Cultural Higino (bairro do Alto), com entrada gratuita. Programação inclui degustações de chocolate, confeitaria, gastronomia, oficinas infantis, teatro, espaço kids, artesanato local e shows musicais. O evento também conta com áreas de harmonização de vinho, cerveja, café e chocolate, além de lareiras ecológicas. Pet friendly e acessível.",
      price: 0,
      latitude: -22.4435,
      longitude: -42.979,
      startDate: new Date("2025-08-08T12:00:00Z"),
      endDate: new Date("2025-08-10T22:00:00Z"),
      maximumCapacity: 30000,
      openHours: [
        { dayOfWeek: 5, openTime: "12:00", closeTime: "00:00" },
        { dayOfWeek: 6, openTime: "12:00", closeTime: "00:00" },
        { dayOfWeek: 7, openTime: "12:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Festival Di Teresa",
      slug: "festival-di-teresa-teresopolis",
      content:
        "Festival que celebra a cultura italiana em homenagem à Imperatriz Teresa Cristina, que dá nome à cidade. Realizado no Espaço Cultural Higino com entrada gratuita. Em 2025, atingiu mais de 100 mil visitantes e movimentou cerca de R$ 9 milhões na economia local. Programação com música, gastronomia típica italiana, danças folclóricas, exposições de moda e artesanato. Gera aproximadamente 300 empregos diretos e indiretos.",
      price: 0,
      latitude: -22.444,
      longitude: -42.9795,
      startDate: new Date("2025-05-01T12:00:00Z"),
      endDate: new Date("2025-05-04T22:00:00Z"),
      maximumCapacity: 100000,
      openHours: [
        { dayOfWeek: 4, openTime: "12:00", closeTime: "00:00" },
        { dayOfWeek: 5, openTime: "12:00", closeTime: "00:00" },
        { dayOfWeek: 6, openTime: "12:00", closeTime: "00:00" },
        { dayOfWeek: 7, openTime: "12:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Abertura da Temporada de Montanhismo (ATM)",
      slug: "abertura-temporada-montanhismo-teresopolis",
      content:
        "Evento tradicional que marca o início da época mais favorável para a prática de montanhismo em Teresópolis, a Capital Nacional do Montanhismo. Realizado no PARNASO com entrada franca. Programação inclui o Desafio Corrida 360, ocupação simultânea dos cumes, highline, trilhas guiadas, palestras, exposição de equipamentos, feira agroecológica, artesanato temático e apresentações musicais. Recebe cerca de 5 mil pessoas.",
      price: 0,
      latitude: -22.448,
      longitude: -42.983,
      startDate: new Date("2025-05-17T07:00:00Z"),
      endDate: new Date("2025-05-18T18:00:00Z"),
      maximumCapacity: 5000,
      openHours: [
        { dayOfWeek: 6, openTime: "07:00", closeTime: "18:00" },
        { dayOfWeek: 7, openTime: "07:00", closeTime: "18:00" },
      ],
    },
    {
      title: "FEPORT - Feira do Produtor Rural de Teresópolis",
      slug: "feport-teresopolis",
      content:
        "A Feira do Produtor Rural de Teresópolis acontece no Parque Municipal de Exposições, em Albuquerque. Reúne 20 espaços de exposição com produtores rurais da cidade, shows de grandes nomes da música nacional, mega fazendinha com mais de 10 espécies de animais, parque infantil gratuito, gastronomia, espaço instagramável e competições de cavalos Mangalarga Marchador (10ª Expo). Entrada gratuita.",
      price: 0,
      latitude: -22.4,
      longitude: -42.965,
      startDate: new Date("2025-09-19T10:00:00Z"),
      endDate: new Date("2025-09-21T23:00:00Z"),
      maximumCapacity: 10000,
      openHours: [
        { dayOfWeek: 5, openTime: "10:00", closeTime: "23:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "23:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "23:00" },
      ],
    },
    {
      title: "YVY - Festival de Cinema Ambiental e de Montanhas",
      slug: "yvy-festival-cinema-ambiental-teresopolis",
      content:
        "Primeiro festival de cinema ambiental e de montanhas de Teresópolis, realizado no PARNASO. Reúne filmes, documentários e debates sobre montanhas, meio ambiente e a relação do homem com a natureza. Mostra competitiva, oficinas de roteiro, salas de vídeo e desafios na produção de filmes ecológicos. Entrada gratuita.",
      price: 0,
      latitude: -22.448,
      longitude: -42.983,
      startDate: new Date("2025-05-15T14:00:00Z"),
      endDate: new Date("2025-05-18T22:00:00Z"),
      maximumCapacity: 2000,
      openHours: [
        { dayOfWeek: 4, openTime: "14:00", closeTime: "22:00" },
        { dayOfWeek: 5, openTime: "14:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Oktober FEPRO",
      slug: "oktober-fepro-teresopolis",
      content:
        "A tradicional Feira de Promoção de Teresópolis (FEPRO) retorna após 10 anos em formato inédito inspirado na Oktoberfest alemã. Realizada no Teresópolis Golf Club, conta com 100 estandes em 2 mil m², cervejas artesanais (parceria com a Mad Brew), gastronomia típica, palestras, teatro infantil, stand up comedy, feira da agricultura familiar, shows, food trucks, espaço kids e desfiles. Entrada gratuita (estacionamento R$10 reembolsável em compras acima de R$300).",
      price: 0,
      latitude: -22.435,
      longitude: -42.97,
      startDate: new Date("2025-11-19T10:00:00Z"),
      endDate: new Date("2025-11-23T22:00:00Z"),
      maximumCapacity: 5000,
      openHours: [
        { dayOfWeek: 3, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 4, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 5, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Sesc Verão em Teresópolis",
      slug: "sesc-verao-teresopolis",
      content:
        "Festival Sesc Verão que atraiu mais de 27 mil pessoas na Praça Olímpica de Teresópolis. Programação gratuita para toda a família com shows de renomados artistas (Grupo Revelação, Maneva), além de bandas locais. Oferece também atividades de lazer, esportes, cultura, saúde, preservação ambiental e assistência social.",
      price: 0,
      latitude: -22.434,
      longitude: -42.975,
      startDate: new Date("2025-01-17T10:00:00Z"),
      endDate: new Date("2025-02-16T22:00:00Z"),
      maximumCapacity: 27000,
      openHours: [
        { dayOfWeek: 5, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Festival Comida de Boteco",
      slug: "festival-comida-boteco-teresopolis",
      content:
        "Festival gastronômico que reúne diversos restaurantes e bares participantes de Teresópolis, promovido pelo Polo Gastronômico Teresópolis. Acontece anualmente entre maio e junho, com pratos especiais e preços promocionais. Uma celebração da culinária local e da cultura do boteco carioca e serrano.",
      price: 50,
      latitude: -22.44,
      longitude: -42.977,
      startDate: new Date("2025-05-12T18:00:00Z"),
      endDate: new Date("2025-06-11T23:00:00Z"),
      maximumCapacity: 3000,
      openHours: [
        { dayOfWeek: 1, openTime: "18:00", closeTime: "23:00" },
        { dayOfWeek: 2, openTime: "18:00", closeTime: "23:00" },
        { dayOfWeek: 3, openTime: "18:00", closeTime: "23:00" },
        { dayOfWeek: 4, openTime: "18:00", closeTime: "23:00" },
        { dayOfWeek: 5, openTime: "18:00", closeTime: "23:00" },
        { dayOfWeek: 6, openTime: "12:00", closeTime: "23:00" },
        { dayOfWeek: 7, openTime: "12:00", closeTime: "23:00" },
      ],
    },
    {
      title: "Feirinha do Alto",
      slug: "feirinha-do-alto-teresopolis",
      content:
        "Tradicional feira de artesanato e gastronomia do bairro do Alto, com mais de 600 expositores. Funciona semanalmente aos sábados e domingos, oferecendo artesanato local, roupas de frio, malhas, gastronomia típica serrana, antiguidades e produtos regionais. É um dos pontos turísticos mais visitados de Teresópolis, com clima de interior europeu.",
      price: 0,
      latitude: -22.438,
      longitude: -42.974,
      startDate: new Date("2025-01-04T09:00:00Z"),
      endDate: new Date("2025-12-28T18:00:00Z"),
      maximumCapacity: 5000,
      openHours: [
        { dayOfWeek: 6, openTime: "09:00", closeTime: "18:00" },
        { dayOfWeek: 7, openTime: "09:00", closeTime: "18:00" },
      ],
    },
    {
      title: "Aniversário de Teresópolis",
      slug: "aniversario-teresopolis",
      content:
        "Teresópolis foi fundada em 6 de julho de 1891, recebendo o nome em homenagem à Imperatriz Teresa Cristina, esposa de Dom Pedro II. A data é celebrada anualmente com programação especial espalhada por diversos pontos da cidade, incluindo shows, apresentações culturais, atividades ao ar livre e eventos cívicos. Entrada gratuita.",
      price: 0,
      latitude: -22.445,
      longitude: -42.978,
      startDate: new Date("2025-07-04T09:00:00Z"),
      endDate: new Date("2025-07-07T22:00:00Z"),
      maximumCapacity: 10000,
      openHours: [
        { dayOfWeek: 5, openTime: "09:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "09:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "09:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Domingo no Parque",
      slug: "domingo-no-parque-teresopolis",
      content:
        "Evento mensal realizado pela Prefeitura de Teresópolis no Parque Regadas e Praça Olímpica, com animação, entretenimento e lazer para toda a família. Programação inclui atividades culturais, esportivas, brinquedos infláveis, apresentações musicais e feiras de artesanato. Entrada gratuita.",
      price: 0,
      latitude: -22.43,
      longitude: -42.976,
      startDate: new Date("2025-01-12T09:00:00Z"),
      endDate: new Date("2025-12-14T17:00:00Z"),
      maximumCapacity: 2000,
      openHours: [{ dayOfWeek: 7, openTime: "09:00", closeTime: "17:00" }],
    },
    {
      title: "Exposição de Orquídeas de Teresópolis",
      slug: "exposicao-orquideas-teresopolis",
      content:
        "Tradicional exposição anual de orquídeas realizada no Espaço Cultural Higino, reunindo centenas de espécies de orquidófilos de toda a região serrana. Conta com estandes de produtores, oficinas de cultivo, palestras com especialistas, concurso de beleza das orquídeas e venda de mudas. Evento gratuito que atrai visitantes de todo o estado do Rio de Janeiro.",
      price: 0,
      latitude: -22.441,
      longitude: -42.976,
      startDate: new Date("2025-10-03T09:00:00Z"),
      endDate: new Date("2025-10-05T18:00:00Z"),
      maximumCapacity: 5000,
      openHours: [
        { dayOfWeek: 5, openTime: "09:00", closeTime: "18:00" },
        { dayOfWeek: 6, openTime: "09:00", closeTime: "18:00" },
        { dayOfWeek: 7, openTime: "09:00", closeTime: "18:00" },
      ],
    },
    {
      title: "Teresópolis Mountain Bike Festival",
      slug: "teresopolis-mountain-bike-festival",
      content:
        "Festival de mountain bike que percorre as melhores trilhas da região serrana de Teresópolis, com percursos para diferentes níveis de experiência (iniciante, intermediário e avançado). Inclui competições, passeios guiados, exposição de equipamentos, oficinhas de manutenção, palestras sobre segurança e preservação ambiental, além de praça de alimentação e música ao vivo.",
      price: 30,
      latitude: -22.436,
      longitude: -42.973,
      startDate: new Date("2025-03-22T07:00:00Z"),
      endDate: new Date("2025-03-23T18:00:00Z"),
      maximumCapacity: 2000,
      openHours: [
        { dayOfWeek: 6, openTime: "07:00", closeTime: "18:00" },
        { dayOfWeek: 7, openTime: "07:00", closeTime: "18:00" },
      ],
    },
    {
      title: "Festival de Gastronomia Serrana",
      slug: "festival-gastronomia-serrana-teresopolis",
      content:
        "Festival que celebra a rica gastronomia da região serrana do Rio de Janeiro, com a participação de restaurantes, bares, pousadas e produtores locais de Teresópolis. O evento oferece pratos típicos da culinária de montanha, como fondue, truta, pinhão, queijos artesanais, vinhos finos e cervejas especiais. Programação inclui shows musicais, aulas-show com chefs renomados e feira de produtos orgânicos.",
      price: 0,
      latitude: -22.44,
      longitude: -42.978,
      startDate: new Date("2025-06-06T11:00:00Z"),
      endDate: new Date("2025-06-08T22:00:00Z"),
      maximumCapacity: 8000,
      openHours: [
        { dayOfWeek: 5, openTime: "11:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "20:00" },
      ],
    },
    {
      title: "Copa Teresópolis de Montanhismo",
      slug: "copa-teresopolis-montanhismo",
      content:
        "Competição anual de montanhismo realizada no PARNASO que reúne atletas de todo o Brasil. Inclui provas de velocidade em escalada, corrida de montanha (trail running), highline e slackline. O evento também oferece oficinas de técnicas de escalada, nós e ancoragens, palestras de segurança em montanha e mutirão de limpeza das trilhas. Entrada gratuita para espectadores.",
      price: 0,
      latitude: -22.447,
      longitude: -42.984,
      startDate: new Date("2025-08-23T07:00:00Z"),
      endDate: new Date("2025-08-24T17:00:00Z"),
      maximumCapacity: 3000,
      openHours: [
        { dayOfWeek: 6, openTime: "07:00", closeTime: "17:00" },
        { dayOfWeek: 7, openTime: "07:00", closeTime: "17:00" },
      ],
    },
  ],
  Petrópolis: [
    {
      title: "Bauernfest",
      slug: "bauernfest-petropolis",
      content:
        "Maior festival da cultura alemã do Brasil, realizado anualmente em Petrópolis no mês de julho. Acontece na Rua do Imperador e no Palácio de Cristal, com mais de 20 dias de programação. Oferece gastronomia típica alemã (chope, salsichão, chucrute, strudel), danças folclóricas, bandas típicas, concurso de chope a metro, desfiles, feira de artesanato e apresentações culturais. Atrai mais de 400 mil visitantes por edição.",
      price: 0,
      latitude: -22.504,
      longitude: -43.178,
      startDate: new Date("2025-07-02T10:00:00Z"),
      endDate: new Date("2025-07-20T23:00:00Z"),
      maximumCapacity: 400000,
      openHours: [
        { dayOfWeek: 1, openTime: "12:00", closeTime: "22:00" },
        { dayOfWeek: 2, openTime: "12:00", closeTime: "22:00" },
        { dayOfWeek: 3, openTime: "12:00", closeTime: "22:00" },
        { dayOfWeek: 4, openTime: "12:00", closeTime: "22:00" },
        { dayOfWeek: 5, openTime: "12:00", closeTime: "23:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "23:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "23:00" },
      ],
    },
    {
      title: "Serenata Imperial",
      slug: "serenata-imperial-petropolis",
      content:
        "Tradicional festival de música clássica e erudita realizado nos teatros, igrejas e palácios históricos de Petrópolis. Reúne orquestras sinfônicas, corais, solistas e conjuntos de câmara do Brasil e do exterior. Programação inclui concertos ao ar livre no Palácio de Cristal, apresentações na Catedral de Petrópolis e no Museu Imperial, além de óperas ao ar livre. Evento gratuito que celebra o patrimônio musical imperial.",
      price: 0,
      latitude: -22.505,
      longitude: -43.179,
      startDate: new Date("2025-05-30T18:00:00Z"),
      endDate: new Date("2025-06-15T22:00:00Z"),
      maximumCapacity: 15000,
      openHours: [
        { dayOfWeek: 4, openTime: "18:00", closeTime: "22:00" },
        { dayOfWeek: 5, openTime: "18:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "16:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "16:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Festival de Inverno de Petrópolis",
      slug: "festival-inverno-petropolis",
      content:
        "Festival multicultural que aquece o inverno petropolitano com programação diversa incluindo shows de música popular brasileira, teatro, dança, cinema, exposições de arte e gastronomia. Os eventos acontecem em diversos pontos turísticos da cidade imperial, como Palácio de Cristal, Praça da Liberdade, Centro de Cultura Raul de Leoni e Parque Cremerie. Entrada gratuita na maioria das atrações.",
      price: 0,
      latitude: -22.506,
      longitude: -43.177,
      startDate: new Date("2025-07-18T09:00:00Z"),
      endDate: new Date("2025-08-10T22:00:00Z"),
      maximumCapacity: 50000,
      openHours: [
        { dayOfWeek: 4, openTime: "09:00", closeTime: "22:00" },
        { dayOfWeek: 5, openTime: "09:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "09:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "09:00", closeTime: "22:00" },
      ],
    },
  ],
  "Nova Friburgo": [
    {
      title: "Festival de Inverno de Nova Friburgo",
      slug: "festival-inverno-nova-friburgo",
      content:
        "Festival cultural que movimenta a cidade serrana durante o inverno, com programação variada de shows musicais, teatro, dança, exposições de arte, gastronomia típica suíça e alemã, e feiras de artesanato. Os eventos acontecem na Praça Getúlio Vargas, no Teatro Municipal e no Country Clube. Destaque para as apresentações de corais, música instrumental e a tradicional fondue ao ar livre.",
      price: 0,
      latitude: -22.28,
      longitude: -42.53,
      startDate: new Date("2025-07-12T10:00:00Z"),
      endDate: new Date("2025-08-03T22:00:00Z"),
      maximumCapacity: 20000,
      openHours: [
        { dayOfWeek: 5, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 6, openTime: "10:00", closeTime: "22:00" },
        { dayOfWeek: 7, openTime: "10:00", closeTime: "22:00" },
      ],
    },
    {
      title: "Feira do Livro de Nova Friburgo",
      slug: "feira-do-livro-nova-friburgo",
      content:
        "Maior evento literário da região serrana do Rio de Janeiro, realizado anualmente na Praça Getúlio Vargas. Conta com estandes de editoras, livreiros e sebos, sessões de autógrafos com escritores renomados, contação de histórias para crianças, oficinas literárias, debates e apresentações culturais. Entrada gratuita, com programação diversificada para todas as idades.",
      price: 0,
      latitude: -22.282,
      longitude: -42.531,
      startDate: new Date("2025-09-17T09:00:00Z"),
      endDate: new Date("2025-09-21T21:00:00Z"),
      maximumCapacity: 10000,
      openHours: [
        { dayOfWeek: 3, openTime: "09:00", closeTime: "21:00" },
        { dayOfWeek: 4, openTime: "09:00", closeTime: "21:00" },
        { dayOfWeek: 5, openTime: "09:00", closeTime: "21:00" },
        { dayOfWeek: 6, openTime: "09:00", closeTime: "21:00" },
        { dayOfWeek: 7, openTime: "09:00", closeTime: "19:00" },
      ],
    },
  ],
};

export async function seedEventOutings(prismaClient: PrismaClient) {
  try {
    const eventCategory = await prismaClient.category.findUnique({
      where: { name: "Event" },
    });

    if (!eventCategory) {
      console.error(
        "Category 'Event' not found. Please run category seeder first.",
      );
      return;
    }

    for (const [cityName, events] of Object.entries(eventsByCity)) {
      const city = await prismaClient.city.findUnique({
        where: { name: cityName },
      });

      if (!city) {
        console.error(
          `City '${cityName}' not found. Please run city seeder first.`,
        );
        continue;
      }

      for (const event of events) {
        let location = await prismaClient.location.findFirst({
          where: { latitude: event.latitude, longitude: event.longitude },
        });

        if (!location) {
          location = await prismaClient.location.create({
            data: {
              latitude: event.latitude,
              longitude: event.longitude,
              cityId: city.id,
            },
          });
        }

        const eventOuting = await prismaClient.outings.upsert({
          where: { slug: event.slug },
          update: {
            title: event.title,
            content: event.content,
            price: event.price,
            public: "ALL",
            categoryId: eventCategory.id,
            locationId: location.id,
            photos: {
              deleteMany: {},
              create: pickRandomPhotos(8).map((p) => ({
                alt: `${event.title} - ${p.alt}`,
                url: p.url,
              })),
            },
            openHours: {
              deleteMany: {},
              create: event.openHours,
            },
            event: {
              upsert: {
                create: {
                  maximumCapacity: event.maximumCapacity,
                  startDate: event.startDate,
                  endDate: event.endDate,
                },
                update: {
                  maximumCapacity: event.maximumCapacity,
                  startDate: event.startDate,
                  endDate: event.endDate,
                },
              },
            },
          },
          create: {
            title: event.title,
            content: event.content,
            price: event.price,
            slug: event.slug,
            public: "ALL",
            categoryId: eventCategory.id,
            locationId: location.id,
            photos: {
              create: pickRandomPhotos(8).map((p) => ({
                alt: `${event.title} - ${p.alt}`,
                url: p.url,
              })),
            },
            openHours: {
              create: event.openHours,
            },
            event: {
              create: {
                maximumCapacity: event.maximumCapacity,
                startDate: event.startDate,
                endDate: event.endDate,
              },
            },
          },
        });

        console.log(`Seeded Event Outing: ${eventOuting.title}`);
      }
    }
  } catch (error) {
    console.error("Error seeding event outing:", error);
  }
}
