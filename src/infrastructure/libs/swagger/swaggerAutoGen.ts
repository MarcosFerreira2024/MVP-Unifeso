import "reflect-metadata";
import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Terê Verde Online",
    description:
      "Api para o Terê Verde Online, sistema de gerenciamento de trilhas, parques e eventos, com avaliação de usuários e informações sobre cada um desses passeios.",
    version: "1.0.0",
  },
  host: "localhost:3333",
  schemes: ["http"],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Insira 'Bearer ' seguido pelo seu token",
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {
    SignUp: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    },
    Login: {
      email: "john.doe@example.com",
      password: "password123",
    },
    User: {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "USER",
      provider: null,
      googleId: null,
      avatarUrl: null,
      verified: true,
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
    },
    UpdateUser: {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "newpassword123",
    },
    Rating: {
      rating: 5,
      content: "Ótimo passeio!",
      outingId: "string",
    },
    Photo: {
      alt: "Descrição da imagem",
      url: "http://example.com/image.jpg",
    },
    OpenHour: {
      dayOfWeek: 1,
      openTime: "09:00",
      closeTime: "18:00",
    },
    Trail: {
      difficulty: "EASY",
      duration: 120,
      distance: 5.5,
      roundTrip: true,
    },
    Park: {
      biodiversity: "High",
      maximumCapacity: 100,
    },
    EventDetails: {
      name: "Bird Watching Tour",
      description: "Um passeio guiado para observar espécies de aves locais.",
      maximumCapacity: 20,
      startDate: "2025-12-25T10:00:00Z",
      endDate: "2025-12-25T12:00:00Z",
    },
    Location: {
      latitude: -22.4333,
      longitude: -42.9667,
      cityId: 1,
    },
    CreateOuting: {
      title: "Bela Trilha na Montanha",
      content: "Uma trilha cênica com vistas deslumbrantes.",
      price: 25.0,
      slug: "beautiful-mountain-trail",
      publicAudience: "ALL",
      categoryId: "uuid-category-id",
      location: { $ref: "#/definitions/Location" },
      photos: [{ $ref: "#/definitions/Photo" }],
      openHours: [{ $ref: "#/definitions/OpenHour" }],
      trail: { $ref: "#/definitions/Trail" },
      park: null,
      events: [],
    },
    UpdateOuting: {
      title: "Trilha na Montanha Atualizada",
      content: "Uma trilha cênica atualizada com vistas deslumbrantes.",
    },
    AddTrail: {
      difficulty: "MEDIUM",
      duration: 180,
      distance: 8.0,
      roundTrip: false,
    },
    AddPark: {
      biodiversity: "Medium",
      maximumCapacity: 150,
    },
    AddEvent: {
      name: "Night Hike",
      description: "Experimente a trilha sob a luz do luar.",
      maximumCapacity: 30,
      startDate: "2025-12-30T19:00:00Z",
      endDate: "2025-12-30T22:00:00Z",
    },
    CreateTrailOuting: {
      title: "Novo Passeio de Trilha",
      content: "Descubra uma nova aventura de trilha.",
      price: 30.0,
      slug: "new-trail-outing",
      publicAudience: "PLUS12",
      categoryId: "uuid-category-id-2",
      location: { $ref: "#/definitions/Location" },
      photos: [{ $ref: "#/definitions/Photo" }],
      openHours: [{ $ref: "#/definitions/OpenHour" }],
      trail: { $ref: "#/definitions/Trail" },
    },
    CreateParkOuting: {
      title: "Novo Passeio de Parque",
      content: "Explore um parque sereno.",
      price: 15.0,
      slug: "new-park-outing",
      publicAudience: "ALL",
      categoryId: "uuid-category-id-3",
      location: { $ref: "#/definitions/Location" },
      photos: [{ $ref: "#/definitions/Photo" }],
      openHours: [{ $ref: "#/definitions/OpenHour" }],
      park: { $ref: "#/definitions/Park" },
    },
    CreateEventOuting: {
      title: "Novo Passeio de Evento",
      content: "Junte-se a nós para um evento especial.",
      price: 50.0,
      slug: "new-event-outing",
      publicAudience: "PLUS18",
      categoryId: "uuid-category-id-4",
      location: { $ref: "#/definitions/Location" },
      photos: [{ $ref: "#/definitions/Photo" }],
      openHours: [{ $ref: "#/definitions/OpenHour" }],
      event: {
        maximumCapacity: 20,
      },
    },
    OutingResponse: {
      id: "string",
      title: "string",
      content: "string",
      price: 99.99,
      slug: "string",
      public: "ALL",
      categoryId: 1,
      location: { $ref: "#/definitions/Location" },
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
      category: {
        id: 1,
        name: "string",
      },
      photos: [{ $ref: "#/definitions/Photo" }],
      openHours: [{ $ref: "#/definitions/OpenHour" }],
      trail: { $ref: "#/definitions/Trail" },
      park: { $ref: "#/definitions/Park" },
      events: [{ $ref: "#/definitions/EventDetails" }], // References EventDetails
      ratings: [{ $ref: "#/definitions/Rating" }],
    },
  },
  paths: {
    "/outing": {
      get: {
        tags: ["Outing"],
        description:
          "Endpoint para listar todos os passeios com filtros, paginação e ordenação.",
        parameters: [
          {
            name: "take",
            in: "query",
            description: "Número de itens a serem retornados por página.",
            required: false,
            type: "integer",
            default: 10,
          },
          {
            name: "page",
            in: "query",
            description: "Número da página a ser retornada.",
            required: false,
            type: "integer",
            default: 1,
          },
          {
            name: "title",
            in: "query",
            description:
              "Filtra passeios pelo título (busca parcial, case-insensitive).",
            required: false,
            type: "string",
          },
          {
            name: "category",
            in: "query",
            description:
              'Filtra passeios pela categoria. Valores aceitos: "Trail", "Park", "Event", "all". Aceita múltiplos valores separados por vírgula (ex: "Trail,Park,Event").',
            required: false,
            type: "string",
            example: "Trail,Park",
          },
          {
            name: "sortBy",
            in: "query",
            description:
              'Campo para ordenar os resultados. Valores: "title" ou "city".',
            required: false,
            type: "string",
          },
          {
            name: "orderBy",
            in: "query",
            description:
              'Ordem da classificação. Valores: "asc" (ascendente) ou "desc" (descendente).',
            required: false,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "Lista de passeios retornada com sucesso.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/OutingResponse",
              },
            },
          },
          "400": {
            description: "Parâmetros de query inválidos.",
          },
          "500": {
            description: "Erro interno do servidor.",
          },
        },
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = [
  "../../../presentation/routes/routes.ts",
  "../../../presentation/routes/user.ts",
  "../../../presentation/routes/auth.ts",
  "../../../presentation/routes/rating.ts",
  "../../../presentation/routes/outing.ts",
];

swaggerAutogen(outputFile, routes, doc);
