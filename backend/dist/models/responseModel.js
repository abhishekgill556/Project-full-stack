"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
// helper functions to easily manufacture different response options
const successResponse = (data, message) => ({
    status: "success",
    data,
    message,
});
exports.successResponse = successResponse;
const errorResponse = (message, code) => ({
    status: "error",
    message,
    code,
});
exports.errorResponse = errorResponse;
