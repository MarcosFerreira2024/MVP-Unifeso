import { Request, Response } from "express";
import { errorHandler } from "../../helpers/errorHandler";
import { container } from "tsyringe";
import { CreateRatingUseCase } from "../../application/useCases/Rating/CreateRatingUseCase";
import { DeleteRatingUseCase } from "../../application/useCases/Rating/DeleteRatingUseCase";
import { FindAllRatingsByUserIdUseCase } from "../../application/useCases/Rating/FindAllRatingsByUserIdUseCase";
import z from "zod";
import { FindAllRatingsByOutingIdUseCase } from "../../application/useCases/Rating/FindAllRatingsByOutingSlugUseCase";

class RatingController {
  static async create(req: Request, res: Response) {
    try {
      const schema = z.object({
        content: z.string(),
        rating: z.number(),
        outingId: z.string(),
      });
      const { success, data, error } = schema.safeParse(req.body);
      if (!success) throw new Error(error.message);
      const { id: userId } = req.user;

      const createdRating = await container
        .resolve(CreateRatingUseCase)
        .execute(data.rating, userId, data.outingId, data.content);
      return res.status(201).json(createdRating);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const schema = z.object({
        ratingId: z.string(),
        outingId: z.string(),
      });
      const { success, data, error } = schema.safeParse(req.body);
      if (!success) throw new Error(error.message);
      const { id: userId, role } = req.user;

      await container
        .resolve(DeleteRatingUseCase)
        .execute(userId, data.outingId, data.ratingId, role);
      return res.status(204).send();
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async findAllByUserId(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const ratings = await container
        .resolve(FindAllRatingsByUserIdUseCase)
        .execute(userId);
      return res.status(200).json(ratings);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  static async findAllByOutingId(req: Request, res: Response) {
    try {
      const { outingId } = req.params;
      const ratings = await container
        .resolve(FindAllRatingsByOutingIdUseCase)
        .execute(outingId);
      return res.status(200).json(ratings);
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export { RatingController };
