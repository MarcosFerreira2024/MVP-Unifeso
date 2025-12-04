import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});
