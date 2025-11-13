import { Request, Response, NextFunction } from "express";

export function validateService(req: Request, res: Response, next: NextFunction) {
  const { name, description, price, image } = req.body;

  const errors: string[] = [];

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push("name is required and must be a non-empty string");
  }

  if (price === undefined || typeof price !== "number" || price < 0) {
    errors.push("price is required and must be a non-negative number");
  }

  if (description !== undefined && typeof description !== "string") {
    errors.push("description must be a string if provided");
  }

  if (image !== undefined && typeof image !== "string") {
    errors.push("image must be a string if provided");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}
