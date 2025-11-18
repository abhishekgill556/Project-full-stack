"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const prismaService_1 = require("../services/prismaService");
exports.serviceController = {
    async getAll(req, res) {
        const services = await prismaService_1.prismaService.getAll();
        res.json(services);
    },
    async getById(req, res) {
        const service = await prismaService_1.prismaService.getById(Number(req.params.id));
        if (!service)
            return res.status(404).json({ error: "Service not found" });
        res.json(service);
    },
    async create(req, res) {
        const created = await prismaService_1.prismaService.create(req.body);
        res.status(201).json(created);
    },
    async update(req, res) {
        const updated = await prismaService_1.prismaService.update(Number(req.params.id), req.body);
        res.json(updated);
    },
    async remove(req, res) {
        await prismaService_1.prismaService.remove(Number(req.params.id));
        res.status(204).send();
    }
};
