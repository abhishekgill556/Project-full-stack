"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
exports.default = {
    async getAll() {
        const rows = await prisma_1.default.stylist.findMany();
        const grouped = {};
        rows.forEach((r) => {
            if (!grouped[r.category])
                grouped[r.category] = {};
            grouped[r.category][r.level] = r.price;
        });
        return grouped;
    },
    async update(category, levels) {
        await prisma_1.default.stylist.deleteMany({ where: { category } });
        const entries = Object.entries(levels).map(([level, price]) => ({
            category,
            service: category,
            level,
            price,
        }));
        await prisma_1.default.stylist.createMany({ data: entries });
    },
    async remove(category) {
        await prisma_1.default.stylist.deleteMany({ where: { category } });
    }
};
