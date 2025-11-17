"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const client_1 = require("@prisma/client");
const reviewService_1 = require("../services/reviewService");
function sanitizeBody(body) {
    return {
        name: typeof body?.name === "string" ? body.name.trim() : "",
        status: typeof body?.status === "string" ? body.status.trim() : "",
        text: typeof body?.text === "string" ? body.text.trim() : "",
    };
}
function validate(body) {
    if (!body.name || !body.status || !body.text) {
        return "Name, status, and review text are required";
    }
    if (body.text.length < 5) {
        return "Review must be at least 5 characters";
    }
    return null;
}
exports.reviewController = {
    async getAll(_req, res) {
        const reviews = await reviewService_1.reviewService.list();
        res.json(reviews);
    },
    async create(req, res) {
        const payload = sanitizeBody(req.body);
        const error = validate(payload);
        if (error)
            return res.status(400).json({ error });
        const created = await reviewService_1.reviewService.create(payload);
        return res.status(201).json(created);
    },
    async remove(req, res) {
        const { id } = req.params;
        try {
            await reviewService_1.reviewService.delete(id);
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
                return res.status(404).json({ error: "Review not found" });
            }
            throw err;
        }
    },
};
