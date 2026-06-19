import { Router } from "express";
import { userRoutes } from "./user";
import { authentication } from "./auth";
import { rating } from "./rating";
import { outingRoutes } from "./outing";

import { openapi } from "../../docs/index";

const routes = Router();
routes.use("/authentication", authentication);
routes.use("/rating", rating);
routes.use("/outing", outingRoutes);
routes.get("/status", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

routes.use("/api/docs", async (req, res, next) => {
  const { apiReference } = await import("@scalar/express-api-reference");
  (apiReference({
    spec: {
      content: openapi,
    },
  }) as any)(req, res, next);
});

routes.use("/", userRoutes);

export { routes };
