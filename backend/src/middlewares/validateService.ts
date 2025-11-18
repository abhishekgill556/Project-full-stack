import { Request, Response, NextFunction } from "express";

export function validateService(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { name, description, price, duration, category, image } = req.body;

  const errors: string[] = [];

  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Name must be at least 3 characters.");
  } else {
    name = name.trim();
  }

 
  const priceNum = Number(price);
  if (
    price === undefined ||
    price === null ||
    Number.isNaN(priceNum) ||
    priceNum < 0
  ) {
    errors.push("Price is required and must be a non-negative number.");
  }

  const durationNum = Number(duration);
  if (
    duration === undefined ||
    duration === null ||
    Number.isNaN(durationNum) ||
    durationNum <= 0
  ) {
    errors.push("Duration is required and must be a positive number.");
  }

  if (typeof category !== "string" || category.trim().length === 0) {
    errors.push("Category is required and must be a non-empty string.");
  } else {
    category = category.trim();
  }


  if (
    description !== undefined &&
    description !== null &&
    typeof description !== "string"
  ) {
    errors.push("Description must be a string if provided.");
  }

  
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  req.body = {
    name,
    description,
    category,
    image,
    price: priceNum,
    duration: durationNum,
  };

  return next();
}
