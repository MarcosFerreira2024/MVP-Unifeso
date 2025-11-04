import { z } from "zod";

export const createTrailSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
  difficulty: z.string().min(1, "Difficulty is required."),
  duration: z.number().int().positive("Duration must be a positive integer."),
  distance: z.number().positive("Distance must be a positive number."),
  roundTrip: z.boolean(),
});

export const updateTrailSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format.").optional(), // outingId is needed for the use case, but not necessarily updated
  difficulty: z.string().min(1, "Difficulty cannot be empty.").optional(),
  duration: z.number().int().positive("Duration must be a positive integer.").optional(),
  distance: z.number().positive("Distance must be a positive number.").optional(),
  roundTrip: z.boolean().optional(),
});

export const trailIdParamSchema = z.object({
  id: z.string().uuid("Invalid trail ID format."),
});

export const outingIdParamSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
});
