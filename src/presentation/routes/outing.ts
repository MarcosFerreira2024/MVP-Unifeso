import { Router } from "express";
import { OutingController } from "../controllers/OutingController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";

const outingRoutes = Router();
const outingController = new OutingController();

outingRoutes.post(
  "/",
  ensureAuthenticated,
  requireAdmin,
  outingController.create
);

outingRoutes.put(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  outingController.update
);
outingRoutes.delete(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  outingController.delete
);

export { outingRoutes };
