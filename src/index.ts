import dotenv from "dotenv";
import "reflect-metadata";
import cors from "cors";
import express from "express";
dotenv.config();

const app = express();

const appPort = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.listen(appPort, () =>
  console.log(`Server is running on http://localhost:${appPort}`)
);
