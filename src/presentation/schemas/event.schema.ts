import { z } from "zod";

export const createEventSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
  maximumCapacity: z.number().int().positive("Maximum capacity must be a positive integer."),
  name: z.string().min(1, "Event name is required."),
  description: z.string().optional().nullable(),
  startDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  endDate: z.preprocess((arg) => (arg ? new Date(arg as string) : null), z.date().nullable()).optional(),
});

export const updateEventSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format.").optional(), // outingId is needed for the use case, but not necessarily updated
  maximumCapacity: z.number().int().positive("Maximum capacity must be a positive integer.").optional(),
  name: z.string().min(1, "Event name cannot be empty.").optional(),
  description: z.string().optional().nullable(),
  startDate: z.preprocess((arg) => new Date(arg as string), z.date()).optional(),
  endDate: z.preprocess((arg) => (arg ? new Date(arg as string) : null), z.date().nullable()).optional(),
});

export const eventIdParamSchema = z.object({
  id: z.string().uuid("Invalid event ID format."),
});

export const outingIdParamSchema = z.object({
  outingId: z.string().uuid("Invalid outing ID format."),
});
