import { Router } from "express";
import { RatingController } from "../controllers/RatingController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rating = Router();

rating.post("/", (req, res) => RatingController.create(req, res));
rating.get("/:id", (req, res) => RatingController.findAllByUserId(req, res));
rating.get("/:outingId", (req, res) =>
  RatingController.findAllByOutingId(req, res)
);
rating.delete("/", ensureAuthenticated, (req, res) =>
  RatingController.delete(req, res)
);
export { rating };
