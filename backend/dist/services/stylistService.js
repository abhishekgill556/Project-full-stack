"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
exports.default = {
    async getAll() {
        return prisma_1.default.stylist.findMany();
    },
    async update(service, levels) {
        await prisma_1.default.stylist.deleteMany({ where: { service } });
        const entries = Object.entries(levels).map(([level, price]) => ({
            service,
            level,
            price
        }));
        await prisma_1.default.stylist.createMany({ data: entries });
    },
    async remove(service) {
        await prisma_1.default.stylist.deleteMany({ where: { service } });
    }
};
