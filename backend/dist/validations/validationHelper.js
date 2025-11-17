"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredString = void 0;
const joi_1 = __importDefault(require("joi"));
const requiredString = (field) => joi_1.default.string()
    .trim()
    .min(1)
    .required()
    .messages({
    "string.empty": `${field} is required`,
    "string.min": `${field} must contain at least 1 character`,
    "any.required": `${field} is required`,
});
exports.requiredString = requiredString;
