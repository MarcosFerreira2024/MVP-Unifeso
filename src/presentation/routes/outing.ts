import { Router } from "express";
import { OutingController } from "../controllers/OutingController.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";
import { requireAdmin } from "../middlewares/requireAdmin.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { adminLimiter } from "../middlewares/rateLimiter.js";
import { z } from "zod";
import {
  updateOutingSchema,
  addTrailSchema,
  addParkSchema,
  addEventSchema,
  createTrailSchema,
  createParkSchema,
  createEventSchema,
  outingParamsSchema,
} from "../schemas/outing.schema.js";

const outingRoutes = Router();
const outingController = new OutingController();

const queryOutingSchema = z.object({
  query: z.object({
    take: z.coerce.number().min(1).default(10),
    page: z.coerce.number().min(1).default(1),
    name: z.string().optional(),
    category: z.preprocess(
      (val) =>
        typeof val === "string" ? val.split(",").map((s) => s.trim()) : val,
      z.array(z.enum(["Trail", "Park", "Event", "all"])).optional()
    ),
    sortBy: z.preprocess((val) => {
      if (typeof val === "string" && ["title", "city"].includes(val)) {
        return val;
      }
      return undefined;
    }, z.enum(["title", "city"]).optional()),
    orderBy: z.enum(["asc", "desc"]).optional(),
  }),
});

outingRoutes.get(
  "/",
  validationMiddleware(queryOutingSchema),
  async (req, res) => {
    return outingController.findAllOutings(req, res);
  }
);

outingRoutes.get("/:slug", async (req, res) => {
  return outingController.findBySlug(req, res);
});

const updateOutingRouteSchema = z.object({
  params: outingParamsSchema,
  body: updateOutingSchema,
});

const deleteOutingRouteSchema = z.object({
  params: outingParamsSchema,
});

const addTrailRouteSchema = z.object({
  params: outingParamsSchema,
  body: addTrailSchema,
});

const addParkRouteSchema = z.object({
  params: outingParamsSchema,
  body: addParkSchema,
});

const addEventRouteSchema = z.object({
  params: outingParamsSchema,
  body: addEventSchema,
});

const createTrailRouteSchema = z.object({
  body: createTrailSchema,
});

const createParkRouteSchema = z.object({
  body: createParkSchema,
});

const createEventRouteSchema = z.object({
  body: createEventSchema,
});

outingRoutes.put(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(updateOutingRouteSchema),
  async (req, res) => {
    return outingController.update(req, res);
  }
);

outingRoutes.delete(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(deleteOutingRouteSchema),
  async (req, res) => {
    return outingController.delete(req, res);
  }
);

// Trail routes
outingRoutes.post(
  "/:id/trail",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(addTrailRouteSchema),
  async (req, res) => {
    return outingController.addTrail(req, res);
  }
);

// Park routes
outingRoutes.post(
  "/:id/park",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(addParkRouteSchema),
  async (req, res) => {
    return outingController.addPark(req, res);
  }
);

// Event routes
outingRoutes.post(
  "/:id/event",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(addEventRouteSchema),
  async (req, res) => {
    return outingController.addEvent(req, res);
  }
);

// Create routes (create outing with trail/park/event)
outingRoutes.post(
  "/trail",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(createTrailRouteSchema),
  async (req, res) => {
    return outingController.createTrail(req, res);
  }
);

outingRoutes.post(
  "/park",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(createParkRouteSchema),
  async (req, res) => {
    return outingController.createPark(req, res);
  }
);

outingRoutes.post(
  "/event",
  ensureAuthenticated,
  requireAdmin,
  adminLimiter,
  validationMiddleware(createEventRouteSchema),
  async (req, res) => {
    return outingController.createEvent(req, res);
  }
);

export { outingRoutes };
