import Joi from "joi";

export const requiredString = (field: string) =>
  Joi.string()
    .trim()
    .min(1)
    .required()
    .messages({
      "string.empty": `${field} is required`,
      "string.min": `${field} must contain at least 1 character`,
      "any.required": `${field} is required`,
    });
