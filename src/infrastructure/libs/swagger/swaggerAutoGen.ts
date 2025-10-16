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
};

const outputFile = "./swagger-output.json";
const routes = ["../../../presentation/routes/routes.ts"];

swaggerAutogen(outputFile, routes, doc);
