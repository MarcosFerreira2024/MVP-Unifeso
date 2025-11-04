import { Router } from "express";
import { user } from "./user";
import { authentication } from "./auth";
import { rating } from "./rating";
import { outingRoutes } from "./outing";
import { parkRoutes } from "./park";
import { trailRoutes } from "./trail";
import { eventRoutes } from "./event";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../infrastructure/libs/swagger/swagger-output.json";

const routes = Router();
routes.use("/user", user);
routes.use("/authentication", authentication);
routes.use("/rating", rating);
routes.use("/outing", outingRoutes);
routes.use("/park", parkRoutes);
routes.use("/trail", trailRoutes);
routes.use("/event", eventRoutes);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { routes };
