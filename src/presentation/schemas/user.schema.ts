import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  password: z.string(),
});

export const userIdSchema = z.object({
  id: z.string(),
});

export const userEmailSchema = z.object({
  email: z.string().email(),
});
