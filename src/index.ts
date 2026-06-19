import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import "./shared/container/index.js";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./presentation/routes/routes.js";
import { errorHandler } from "./helpers/errorHandler.js";
const app = express();

const appPort = process.env.PORT || 3333;

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    errorHandler(err, response);
  },
);

if (process.env.VERCEL !== "1") {
  app.listen(appPort, () =>
    console.log(`Servidor rodando na porta http://localhost:${appPort}`),
  );
}

export default app;
