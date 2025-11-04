import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";

import { EventController } from "../controllers/EventController";

const eventRoutes = Router();

eventRoutes.post(
  "/",
  ensureAuthenticated,
  requireAdmin,

  EventController.create
);

eventRoutes.get("/:id", ensureAuthenticated, EventController.findById);

eventRoutes.put(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  EventController.update
);

eventRoutes.delete(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  EventController.delete
);

export { eventRoutes };
