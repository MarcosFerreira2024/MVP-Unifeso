import { z } from "zod";

export const createRatingSchema = z.object({
  content: z.string(),
  rating: z.number(),
  outingId: z.string(),
});

export const deleteRatingSchema = z.object({
  ratingId: z.string(),
  outingId: z.string(),
});

export const findRatingsByUserIdSchema = z.object({
  userId: z.string(),
});

export const findRatingsByOutingIdSchema = z.object({
  outingId: z.string(),
});
