import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";
import { z } from "zod";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { updateUserSchema } from "../schemas/user.schema";
import { UserController } from "../controllers/UserController";
import { adminLimiter } from "../middlewares/rateLimiter";

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
