"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prismaService = {
    getAll() {
        return prisma.service.findMany();
    },
    getById(id) {
        return prisma.service.findUnique({ where: { id } });
    },
    create(data) {
        return prisma.service.create({ data });
    },
    update(id, data) {
        return prisma.service.update({
            where: { id },
            data
        });
    },
    remove(id) {
        return prisma.service.delete({
            where: { id }
        });
    }
};
