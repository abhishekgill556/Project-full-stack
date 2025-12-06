import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "joi";
import type { ValidationErrorItem } from "joi";


export const validate = <T>(schema: ObjectSchema<T>, data: T): void => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
  const messages = error.details.map((detail: ValidationErrorItem) => detail.message);
  throw new Error(`Validation error: ${messages.join(", ")}`);
  }
};


export const validateRequest = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Record<string, unknown> = {
        ...req.body,
        ...req.params,
        ...req.query,
      };

      validate(schema, data);
      next();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };
};
