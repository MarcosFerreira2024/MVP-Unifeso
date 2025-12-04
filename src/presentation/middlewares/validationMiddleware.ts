import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../../helpers/errorHandler";

export function validationMiddleware(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const toParse: any = {};
      if (schema.shape.body) toParse.body = req.body;
      if (schema.shape.params) toParse.params = req.params;
      if (schema.shape.query) toParse.query = req.query;

      const parsed = schema.parse(toParse);

      if (parsed.body) req.body = parsed.body;
      if (parsed.params) req.params = parsed.params;
      if (parsed.query) {
        Object.assign(req.query, parsed.query);
      }

      next();
    } catch (error) {
      next(error); // Directly pass any error to the next error handler
    }
  };
}