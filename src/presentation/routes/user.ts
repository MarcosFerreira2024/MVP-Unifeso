import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";
import { requireAdmin } from "../middlewares/requireAdmin.js";
import { z } from "zod";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { updateUserSchema } from "../schemas/user.schema.js";
import { UserController } from "../controllers/UserController.js";
import { adminLimiter } from "../middlewares/rateLimiter.js";

const userRoutes = Router();
const userController = new UserController();

const paramsSchema = z.object({
  params: z.object({
    id: z.string("Invalid user ID format"),
  }),
});

const updateUserRouteSchema = z.object({
  params: z.object({
    id: z.string("Invalid user ID format"),
  }),
  body: updateUserSchema,
});

userRoutes.use(ensureAuthenticated);

userRoutes.get(
  "/users/:id",
  validationMiddleware(paramsSchema),
  async (req, res) => {
    return userController.findById(req, res);
  },
);

userRoutes.get("/user", async (req, res) => {
  return userController.getProfile(req, res);
});

userRoutes.get("/users", requireAdmin, async (req, res) => {
  return userController.list(req, res);
});

userRoutes.put(
  "/users/:id",
  requireAdmin,
  adminLimiter,
  validationMiddleware(updateUserRouteSchema),
  async (req, res) => {
    return userController.update(req, res);
  },
);

userRoutes.delete(
  "/users/:id",
  requireAdmin,
  adminLimiter,
  validationMiddleware(paramsSchema),
  async (req, res) => {
    return userController.delete(req, res);
  },
);

export { userRoutes };
