// src/api/v1/middleware/validate.ts
import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "joi";
import type { ValidationErrorItem } from "joi";

// validate method provided by Joi package
export const validate = <T>(schema: ObjectSchema<T>, data: T): void => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
  const messages = error.details.map((detail: ValidationErrorItem) => detail.message);
  throw new Error(`Validation error: ${messages.join(", ")}`);
  }
};

// run validate method against received data
// provided as middleware function
export const validateRequest = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Record<string, unknown> = {
        ...req.body,
        ...req.params,
        ...req.query,
      };

      validate(schema, data);
      // invoke next middleware if no error is caught
      next();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };
};
