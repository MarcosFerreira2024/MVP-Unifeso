import { z } from "zod";

export const createOutingSchema = z.object({
  title: z.string(),
  content: z.string(),
  price: z.number(),
  slug: z.string(),
  publicAudience: z.enum(["ALL", "PLUS12", "PLUS16", "PLUS18"]),
  categoryName: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    cityId: z.number(),
  }),
});

export const updateOutingSchema = createOutingSchema.partial();

export const addTrailSchema = z.object({
  difficulty: z.string(),
  duration: z.number(),
  distance: z.number(),
  roundTrip: z.boolean(),
});

export const addParkSchema = z.object({
  infrastructure: z.string(),
  biodiversity: z.string(),
  maximumCapacity: z.number(),
});

export const outingParamsSchema = z.object({
  id: z.string(),
});
