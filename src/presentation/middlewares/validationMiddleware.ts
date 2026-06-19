import { Request, Response, NextFunction } from "express";
import type { ZodObject } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validationMiddleware(schema: ZodObject<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const toParse: any = {};
      if (schema.shape.body) toParse.body = req.body;
      if (schema.shape.params) toParse.params = req.params;
      if (schema.shape.query) toParse.query = req.query;

      const parsed = schema.parse(toParse);

      if (parsed.body) req.body = parsed.body;
      if (parsed.params) req.params = parsed.params as typeof req.params;
      if (parsed.query) {
        Object.assign(req.query, parsed.query);
      }

      next();
    } catch (error) {
      next(error); // Directly pass any error to the next error handler
    }
  };
}