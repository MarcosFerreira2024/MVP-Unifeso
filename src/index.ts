import "reflect-metadata";
import "./shared/container";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { routes } from "./presentation/routes/routes";
dotenv.config();

const app = express();

const appPort = process.env.PORT || 3333;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(routes);

app.listen(appPort, () =>
  console.log(`Servidor rodando na porta http://localhost:${appPort}`)
);
