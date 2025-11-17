"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
exports.reviewService = {
    list() {
        return prisma_1.default.review.findMany({
            orderBy: { createdAt: "desc" }
        });
    },
    create(payload) {
        return prisma_1.default.review.create({
            data: payload
        });
    },
    delete(id) {
        return prisma_1.default.review.delete({
            where: { id }
        });
    }
};
