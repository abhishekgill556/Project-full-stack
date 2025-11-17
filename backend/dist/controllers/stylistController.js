"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stylistService_1 = __importDefault(require("../services/stylistService"));
exports.default = {
    async getAll(req, res) {
        const data = await stylistService_1.default.getAll();
        res.json(data);
    },
    async update(req, res) {
        const { service, levels } = req.body;
        await stylistService_1.default.update(service, levels);
        res.json({ message: "Updated" });
    },
    async remove(req, res) {
        const { service } = req.params;
        await stylistService_1.default.remove(service);
        res.json({ message: "Deleted" });
    }
};
