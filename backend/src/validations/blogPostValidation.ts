import Joi from "joi";
import { requiredString } from "./validationHelper";

export const blogPostSchema = Joi.object({
  id: Joi.number().integer().optional(),
  title: requiredString("title"),
  description: requiredString("description"),
  link: Joi.string().uri().required().messages({
    "string.uri": "link must be a valid URL",
    "any.required": "link is required",
  }),
});
