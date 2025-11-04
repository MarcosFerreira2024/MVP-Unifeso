import { Router } from "express";
import { ParkController } from "../controllers/ParkController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";

const parkRoutes = Router();

parkRoutes.post("/", ensureAuthenticated, requireAdmin, ParkController.create);

parkRoutes.get("/:id", ensureAuthenticated, ParkController.findById);

parkRoutes.put(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  ParkController.update
);

parkRoutes.delete(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  ParkController.delete
);

export { parkRoutes };
