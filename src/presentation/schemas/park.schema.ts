import { z } from "zod";

export const createParkSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
  infrastructure: z.string().min(1, "Infrastructure is required."),
  biodiversity: z.string().min(1, "Biodiversity information is required."),
  maximumCapacity: z
    .number()
    .int()
    .positive("Maximum capacity must be a positive integer."),
});

export const updateParkSchema = z.object({
  outingId: z.string(),
  infrastructure: z
    .string()
    .min(1, "Infrastructure cannot be empty.")
    .optional(),
  biodiversity: z
    .string()
    .min(1, "Biodiversity information cannot be empty.")
    .optional(),
  maximumCapacity: z
    .number()
    .int()
    .positive("Maximum capacity must be a positive integer.")
    .optional(),
});

export const parkIdParamSchema = z.object({
  id: z.string().uuid("Invalid park ID format."),
});

export const outingIdParamSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
});
