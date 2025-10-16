import { Router } from "express";
import { user } from "./user";
import { authentication } from "./auth";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../infrastructure/libs/swagger/swagger-output.json";

const routes = Router();
routes.use("/user", user);
routes.use("/authentication", authentication);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { routes };
