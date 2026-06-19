import { Router } from "express";
import { userRoutes } from "./user";
import { authentication } from "./auth";
import { rating } from "./rating";
import { outingRoutes } from "./outing";

import { apiReference } from "@scalar/express-api-reference";
import { openapi } from "../../docs/index";

const routes = Router();
routes.use("/authentication", authentication);
routes.use("/rating", rating);
routes.use("/outing", outingRoutes);
routes.get("/status", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

routes.use(
  "/api/docs",
  apiReference({
    spec: {
      content: openapi,
    },
  })
);

routes.use("/", userRoutes);

export { routes };
