import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { RatingController } from "../controllers/RatingController";
import { ratingLimiter } from "../middlewares/rateLimiter";

const rating = Router();

rating.post("/", ensureAuthenticated, ratingLimiter, (req, res) => {
  return RatingController.create(req, res);
});

rating.get("/user/:userId", (req, res) => {
  return RatingController.findAllByUserId(req, res);
});

rating.get("/outing/:outingId", (req, res) => {
  return RatingController.findAllByOutingId(req, res);
});

rating.delete("/:ratingId/:outingId", ensureAuthenticated, ratingLimiter, (req, res) => {
  return RatingController.delete(req, res);
});

rating.put("/:ratingId", ensureAuthenticated, ratingLimiter, (req, res) => {
  return RatingController.update(req, res);
});

export { rating };
