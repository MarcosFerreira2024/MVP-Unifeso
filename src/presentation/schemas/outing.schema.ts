import { z } from "zod";

const photoSchema = z.object({
  alt: z.string(),
  url: z.string().url(),
});

const openHourSchema = z.object({
  dayOfWeek: z.number().int().min(1).max(7),
  openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
});

const trailSchema = z.object({
  difficulty: z.string(),
  duration: z.number().int().positive(),
  distance: z.number().positive(),
  roundTrip: z.boolean(),
});

const parkSchema = z.object({
  biodiversity: z.string(),
  maximumCapacity: z.number().int().positive(),
});

const eventSchema = z.object({
  maximumCapacity: z.number().int().positive(),
  startDate: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional()
  ),
  endDate: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional()
  ),
});

export const createOutingSchema = z.object({
  title: z.string(),
  content: z.string(),
  price: z.number(),
  slug: z.string(),
  publicAudience: z.enum(["ALL", "PLUS12", "PLUS16", "PLUS18"]),
  categoryId: z.preprocess(
    (a) => {
      if (a === undefined || a === null) return undefined;
      return parseInt(z.string().parse(a), 10);
    },
    z.number().positive()
  ),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    cityId: z.number(),
  }),
  photos: z.array(photoSchema).optional(),
  openHours: z.array(openHourSchema).optional(),
  trail: trailSchema.optional(),
  park: parkSchema.optional(),
  event: eventSchema.optional(),
});

export const updateOutingSchema = createOutingSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    { message: "Nenhum campo enviado para atualização" }
  );

export const addTrailSchema = z.object({
  difficulty: z.string(),
  duration: z.number(),
  distance: z.number(),
  roundTrip: z.boolean(),
});

export const addParkSchema = z.object({
  biodiversity: z.string(),
  maximumCapacity: z.number(),
});

export const outingParamsSchema = z.object({
  id: z.string(),
});

export const addEventSchema = eventSchema;

const baseOutingSchema = z.object({
  title: z.string(),
  content: z.string(),
  price: z.number(),
  slug: z.string(),
  publicAudience: z.enum(["ALL", "PLUS12", "PLUS16", "PLUS18"]),
  categoryId: z.preprocess(
    (a) => {
      if (a === undefined || a === null) return undefined;
      return parseInt(z.string().parse(a), 10);
    },
    z.number().positive()
  ),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    cityId: z.number(),
  }),
  photos: z.array(photoSchema),
  openHours: z.array(openHourSchema).optional(),
});

export const createTrailSchema = baseOutingSchema.extend({
  trail: trailSchema,
});

export const createParkSchema = baseOutingSchema.extend({
  park: parkSchema,
});

export const createEventSchema = baseOutingSchema.extend({
  event: eventSchema,
});
