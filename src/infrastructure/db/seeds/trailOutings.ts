import { PrismaClient } from "@prisma/client";
import { pickRandomPhotos } from "./photos.js";

interface TrailSeed {
  title: string;
  slug: string;
  content: string;
  price: number;
  latitude: number;
  longitude: number;
  difficulty: string;
  duration: number;
  distance: number;
  roundTrip: boolean;
}

const trailsByCity: Record<string, TrailSeed[]> = {
  "Teresópolis": [
    {
      title: "Trilha Suspensa",
      slug: "trilha-suspensa-parnaso-teresopolis",
      content: "Uma das grandes atrações do PARNASO, a trilha suspensa começa na Praça da Barragem. Possui piso de madeira e corrimão, permitindo acesso até a cadeirantes. Construída sobre um aqueduto do início do século XX, corta um trecho de Mata Atlântica em nível elevado em relação ao terreno. A trilha é circular e, no trecho final, atinge grandes alturas em relação ao solo (até 8 metros), permitindo belas visões da floresta e dos paredões do PARNASO.",
      price: 0,
      latitude: -22.4485,
      longitude: -42.9835,
      difficulty: "EASY",
      duration: 60,
      distance: 1.3,
      roundTrip: true,
    },
    {
      title: "Trilha Primavera",
      slug: "trilha-primavera-parnaso-teresopolis",
      content: "Caminhada leve de aproximadamente 15 minutos, ideal para todas as idades. A trilha permite experimentar a sensação de estar em uma mata preservada, sendo possível observar inúmeras espécies de plantas, com destaque para o palmito-juçara (Euterpe edulis), espécie ameaçada de extinção.",
      price: 0,
      latitude: -22.449,
      longitude: -42.984,
      difficulty: "EASY",
      duration: 15,
      distance: 0.5,
      roundTrip: false,
    },
    {
      title: "Trilha Mozart Catão",
      slug: "trilha-mozart-catao-parnaso-teresopolis",
      content: "A trilha cruza pequenos cursos d'água e floresta de encosta até chegar ao Mirante Alexandre Oliveira, com vista para a cidade de Teresópolis e o Parque Estadual dos Três Picos ao fundo. Os nomes da trilha e do mirante homenageiam dois alpinistas da cidade mortos ao tentar escalar a face sul do Aconcágua em 1998. A trilha permite acesso à Trilha Cartão Postal via Trilha 360.",
      price: 0,
      latitude: -22.4495,
      longitude: -42.9845,
      difficulty: "MEDIUM",
      duration: 90,
      distance: 0.8,
      roundTrip: true,
    },
    {
      title: "Trilha Cartão Postal",
      slug: "trilha-cartao-postal-parnaso-teresopolis",
      content: "Bela trilha com acesso pela Estrada da Barragem, cruzando área de floresta com belas vistas da montanha. Dá acesso a um mirante voltado para a cadeia de montanhas da Serra dos Órgãos, proporcionando um novo ângulo de observação do Dedo de Deus do meio da floresta. No caminho é possível observar grandes árvores como o jequitibá.",
      price: 0,
      latitude: -22.45,
      longitude: -42.985,
      difficulty: "MEDIUM",
      duration: 120,
      distance: 1.2,
      roundTrip: true,
    },
    {
      title: "Trilha 360°",
      slug: "trilha-360-parnaso-teresopolis",
      content: "Inaugurada em 2016, esta trilha faz a junção da Cartão Postal com a Mozart Catão pela crista da montanha. Possui 2,6 km, mas caso queira incluir os três mirantes possíveis, se estende a 4 km. O Mirante Borandá oferece vista para a Serra dos Órgãos e para a cidade do Rio de Janeiro em dias claros. Um belíssimo circuito que vale a pena conhecer.",
      price: 0,
      latitude: -22.4505,
      longitude: -42.9855,
      difficulty: "MEDIUM",
      duration: 150,
      distance: 2.6,
      roundTrip: true,
    },
    {
      title: "Trilha da Pedra do Sino",
      slug: "trilha-pedra-do-sino-parnaso-teresopolis",
      content: "A Pedra do Sino é o ponto culminante da Serra dos Órgãos com 2.275 metros de altitude. O acesso é feito por trilha clássica do montanhismo brasileiro. São cerca de 11 km de caminhada desde a sede do Parque (1.100m de altitude). O primeiro trecho é mais leve, por dentro da mata, com calçamento da época do Império. Duas cachoeiras no caminho são boas opções de parada. Acesso limitado a 100 pessoas por dia. Do topo, avista-se toda a Baía de Guanabara, a cidade do Rio de Janeiro e parte do Vale do Paraíba.",
      price: 0,
      latitude: -22.451,
      longitude: -42.986,
      difficulty: "HARD",
      duration: 360,
      distance: 11,
      roundTrip: false,
    },
    {
      title: "Trilha da Tartaruga",
      slug: "trilha-tartaruga-pnmmt-teresopolis",
      content: "Trilha moderada de 1,25 km na Sede Pedra da Tartaruga do Parque Natural Municipal Montanhas de Teresópolis. Oferece belas paisagens ao longo do percurso, com vista privilegiada da Pedra da Tartaruga, famosa pelo seu formato singular. A sede também oferece camping, escalada e rapel.",
      price: 0,
      latitude: -22.441,
      longitude: -42.975,
      difficulty: "MEDIUM",
      duration: 40,
      distance: 1.25,
      roundTrip: true,
    },
    {
      title: "Trilha do Camelo",
      slug: "trilha-camelo-pnmmt-teresopolis",
      content: "Trilha de 840 metros na Sede Pedra da Tartaruga do PNMMT, com trechos íngremes e vistas incríveis no topo. Parte do conjunto de trilhas do Parque Montanhas de Teresópolis, que também inclui a Vidocq Casas (650m). Ideal para quem busca um desafio moderado com recompensa panorâmica.",
      price: 0,
      latitude: -22.4415,
      longitude: -42.9755,
      difficulty: "MEDIUM",
      duration: 60,
      distance: 0.84,
      roundTrip: true,
    },
    {
      title: "Trilha Pedra Alpina",
      slug: "trilha-pedra-alpina-pnmmt-teresopolis",
      content: "Percurso desafiador de 2 km no PNMMT com vistas panorâmicas da Serra dos Órgãos e do Parque Estadual dos Três Picos. Recomendada para visitantes com bom preparo físico. A recompensa no topo é uma vista de tirar o fôlego de toda a região serrana.",
      price: 0,
      latitude: -22.442,
      longitude: -42.976,
      difficulty: "HARD",
      duration: 120,
      distance: 2,
      roundTrip: true,
    },
    {
      title: "Trilha do Jacu",
      slug: "trilha-jacu-pnmmt-teresopolis",
      content: "Caminhada leve de 890 metros na Sede Santa Rita do PNMMT, ideal para todas as idades. Excelente para observação de aves, especialmente o jacu (Penelope obscura) que dá nome à trilha. Percurso rápido de 30 a 40 minutos em meio à Mata Atlântica preservada.",
      price: 0,
      latitude: -22.4425,
      longitude: -42.9765,
      difficulty: "EASY",
      duration: 30,
      distance: 0.89,
      roundTrip: true,
    },
    {
      title: "Trilha do Tangará",
      slug: "trilha-tangara-pnmmt-teresopolis",
      content: "Percurso moderado de 1,1 km no PNMMT com contato direto com a flora e fauna da Mata Atlântica. Nomeada em homenagem ao tangará (Chiroxiphia caudata), ave símbolo da região. Caminhada de aproximadamente 40 minutos por dentro da floresta.",
      price: 0,
      latitude: -22.443,
      longitude: -42.977,
      difficulty: "MEDIUM",
      duration: 40,
      distance: 1.1,
      roundTrip: true,
    },
    {
      title: "Travessia Petrópolis-Teresópolis",
      slug: "travessia-petropolis-teresopolis-parnaso",
      content: "A clássica travessia de montanha mais famosa do Brasil, com 30 km de extensão pela parte alta da Serra dos Órgãos. Atravessa o interior do PARNASO ligando as cidades de Petrópolis e Teresópolis, passando por picos como Pedra do Sino e Pedra do Açu. Realizada em 2 a 3 dias, com pernoite no Abrigo 4 (capacidade para 70 pessoas acampadas, 30 no abrigo). Exige bom preparo físico, equipamento adequado e registro prévio no parque.",
      price: 0,
      latitude: -22.447,
      longitude: -42.982,
      difficulty: "HARD",
      duration: 4320,
      distance: 30,
      roundTrip: false,
    },
    {
      title: "Trilha do Mirante do Soberbo",
      slug: "trilha-mirante-soberbo-teresopolis",
      content: "Trilha curta e de fácil acesso que leva ao Mirante do Soberbo, um dos pontos mais fotografados de Teresópolis. Do mirante é possível ter uma vista panorâmica do Dedo de Deus e da entrada da Serra dos Órgãos. Ideal para fotografia, especialmente no fim da tarde quando o sol doura as montanhas. Acesso pela BR-116 (Rio-Teresópolis), com estacionamento no local.",
      price: 0,
      latitude: -22.429,
      longitude: -42.989,
      difficulty: "EASY",
      duration: 15,
      distance: 0.3,
      roundTrip: true,
    },
    {
      title: "Trilha da Cachoeira dos Frades",
      slug: "trilha-cachoeira-frades-teresopolis",
      content: "Trilha em meio à Mata Atlântica que leva à bela Cachoeira dos Frades, uma das mais famosas de Teresópolis. Localizada na região do bairro dos Frades, a trilha tem trechos moderados e recompensa com uma queda d'água de aproximadamente 30 metros com piscina natural para banho. Muito procurada nos meses de verão para refrescar do calor.",
      price: 0,
      latitude: -22.387,
      longitude: -42.95,
      difficulty: "MEDIUM",
      duration: 60,
      distance: 1.5,
      roundTrip: true,
    },
    {
      title: "Trilha do Poção",
      slug: "trilha-pocao-teresopolis",
      content: "Encantadora trilha que acompanha o curso do rio até um poção natural de águas cristalinas, perfeito para banho. Localizada na região do 2º distrito de Teresópolis, a trilha é curta e de baixa dificuldade, ideal para famílias com crianças. O poção é cercado por vegetação nativa e rochas, criando um cenário bucólico e revigorante.",
      price: 0,
      latitude: -22.38,
      longitude: -42.93,
      difficulty: "EASY",
      duration: 30,
      distance: 0.7,
      roundTrip: true,
    },
  ],
  "Petrópolis": [
    {
      title: "Trilha do Caxambu",
      slug: "trilha-caxambu-petropolis",
      content: "Uma das trilhas mais tradicionais de Petrópolis, localizada no bairro do Caxambu. Percurso de média dificuldade que serpenteia por dentro de Mata Atlântica preservada, com trechos íngremes e belas vistas da cidade imperial. A trilha leva a um mirante natural com vista panorâmica do centro histórico de Petrópolis e da Serra dos Órgãos. Ideal para quem busca contato com a natureza sem se afastar muito da área urbana.",
      price: 0,
      latitude: -22.48,
      longitude: -43.14,
      difficulty: "MEDIUM",
      duration: 90,
      distance: 1.8,
      roundTrip: true,
    },
    {
      title: "Trilha do Bonfim",
      slug: "trilha-bonfim-petropolis",
      content: "Trilha localizada no bairro do Bonfim, conhecida por suas paisagens bucólicas e pelo acesso à Cachoeira do Bonfim. O percurso é moderado, com extensão total de 2 km, passando por áreas de Mata Atlântica secundária e cruzando pequenos cursos d'água. No caminho é possível observar diversas espécies de aves e, com sorte, pequenos mamíferos como ouriços-cacheiros e saguis.",
      price: 0,
      latitude: -22.528,
      longitude: -43.156,
      difficulty: "MEDIUM",
      duration: 120,
      distance: 2,
      roundTrip: true,
    },
    {
      title: "Trilha do Castelo",
      slug: "trilha-castelo-petropolis",
      content: "Trilha que leva às ruínas do Castelo de Itaipava, uma construção histórica do século XIX localizada em meio à Mata Atlântica. O percurso é de dificuldade moderada, com aproximadamente 1,5 km de extensão, passando por vegetação densa e oferecendo vistas parciais da região de Itaipava. As ruínas do castelo são um cenário fascinante e rendem belas fotos. Acesso pela Estrada do Castelo.",
      price: 0,
      latitude: -22.498,
      longitude: -43.11,
      difficulty: "MEDIUM",
      duration: 60,
      distance: 1.5,
      roundTrip: true,
    },
  ],
  "Nova Friburgo": [
    {
      title: "Trilha do Pico da Caledônia",
      slug: "trilha-pico-caledonia-nova-friburgo",
      content: "Uma das trilhas mais emblemáticas de Nova Friburgo, levando ao ponto mais alto do município com 2.257 metros de altitude. O percurso é desafiador, com aproximadamente 8 km de extensão (ida) por dentro de Mata Atlântica e campos de altitude. Do topo, a vista panorâmica é espetacular, alcançando todo o município de Nova Friburgo, a Serra dos Órgãos e, em dias claros, o Oceano Atlântico. Recomendado para montanhistas com bom preparo físico.",
      price: 0,
      latitude: -22.318,
      longitude: -42.557,
      difficulty: "HARD",
      duration: 360,
      distance: 8,
      roundTrip: false,
    },
    {
      title: "Trilha da Pedra de São Pedro",
      slug: "trilha-pedra-sao-pedro-nova-friburgo",
      content: "Trilha moderada que leva ao topo da Pedra de São Pedro, um dos pontos turísticos mais visitados de Nova Friburgo. Com 2,3 km de extensão, o percurso passa por áreas de Mata Atlântica bem preservada e oferece vistas parciais da cidade. Do topo, a 1.900 metros de altitude, é possível apreciar uma vista de 360 graus da região serrana. A subida exige cerca de 1h30 e a descida 1h.",
      price: 0,
      latitude: -22.303,
      longitude: -42.539,
      difficulty: "MEDIUM",
      duration: 150,
      distance: 2.3,
      roundTrip: true,
    },
    {
      title: "Trilha do Cão Sentado",
      slug: "trilha-cao-sentado-nova-friburgo",
      content: "Trilha de dificuldade moderada que leva ao mirante do Cão Sentado, uma formação rochosa que lembra um cão sentado, cartão-postal de Nova Friburgo. O percurso de 1,8 km atravessa Mata Atlântica e campos de altitude, com trechos íngremes. Do mirante, a vista do centro de Nova Friburgo e das montanhas ao redor é deslumbrante. Ideal para fotografia do pôr do sol.",
      price: 0,
      latitude: -22.288,
      longitude: -42.535,
      difficulty: "MEDIUM",
      duration: 120,
      distance: 1.8,
      roundTrip: true,
    },
  ],
};

export async function seedTrailOutings(prismaClient: PrismaClient) {
  try {
    const trailCategory = await prismaClient.category.findUnique({
      where: { name: "Trail" },
    });

    if (!trailCategory) {
      console.error("Category 'Trail' not found. Please run category seeder first.");
      return;
    }

    for (const [cityName, trails] of Object.entries(trailsByCity)) {
      const city = await prismaClient.city.findUnique({
        where: { name: cityName },
      });

      if (!city) {
        console.error(`City '${cityName}' not found. Please run city seeder first.`);
        continue;
      }

      for (const trail of trails) {
        let location = await prismaClient.location.findFirst({
          where: { latitude: trail.latitude, longitude: trail.longitude },
        });

        if (!location) {
          location = await prismaClient.location.create({
            data: { latitude: trail.latitude, longitude: trail.longitude, cityId: city.id },
          });
        }

        const trailOuting = await prismaClient.outings.upsert({
          where: { slug: trail.slug },
          update: {
            title: trail.title,
            content: trail.content,
            price: trail.price,
            public: "ALL",
            categoryId: trailCategory.id,
            locationId: location.id,
            photos: {
              deleteMany: {},
              create: pickRandomPhotos(8).map((p) => ({ alt: `${trail.title} - ${p.alt}`, url: p.url })),
            },
            openHours: {
              deleteMany: {},
              create: [{ dayOfWeek: 6, openTime: "06:00", closeTime: "18:00" }],
            },
            trail: {
              upsert: {
                create: { difficulty: trail.difficulty, duration: trail.duration, distance: trail.distance, roundTrip: trail.roundTrip },
                update: { difficulty: trail.difficulty, duration: trail.duration, distance: trail.distance, roundTrip: trail.roundTrip },
              },
            },
          },
          create: {
            title: trail.title,
            content: trail.content,
            price: trail.price,
            slug: trail.slug,
            public: "ALL",
            categoryId: trailCategory.id,
            locationId: location.id,
            photos: {
              create: pickRandomPhotos(8).map((p) => ({ alt: `${trail.title} - ${p.alt}`, url: p.url })),
            },
            openHours: {
              create: [{ dayOfWeek: 6, openTime: "06:00", closeTime: "18:00" }],
            },
            trail: {
              create: { difficulty: trail.difficulty, duration: trail.duration, distance: trail.distance, roundTrip: trail.roundTrip },
            },
          },
        });

        console.log(`Seeded Trail Outing: ${trailOuting.title}`);
      }
    }
  } catch (error) {
    console.error("Error seeding trail outing:", error);
  }
}
