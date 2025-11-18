"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const validationHelper_1 = require("./validationHelper");
exports.blogPostSchema = joi_1.default.object({
    id: joi_1.default.number().integer().optional(),
    title: (0, validationHelper_1.requiredString)("title"),
    description: (0, validationHelper_1.requiredString)("description"),
    link: joi_1.default.string().uri().required().messages({
        "string.uri": "link must be a valid URL",
        "any.required": "link is required",
    }),
});
