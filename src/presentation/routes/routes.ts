import { Router } from "express";
import { userRoutes } from "./user";
import { authentication } from "./auth";
import { rating } from "./rating";
import { outingRoutes } from "./outing";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../infrastructure/libs/swagger/swagger-output.json";

const routes = Router();
routes.use("/authentication", authentication);
routes.use("/rating", rating);
routes.use("/outing", outingRoutes);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get("/", (req, res) => {
  /* #swagger.path = '/'
     #swagger.tags = ['Root']
     #swagger.description = 'Endpoint para verificar o status da API.'
     #swagger.responses[200] = {
       description: 'API está funcionando.',
       schema: { message: 'API is running' }
     }
  */
  res.status(200).json({ message: "API is running" });
});

routes.use("/", userRoutes);

export { routes };
