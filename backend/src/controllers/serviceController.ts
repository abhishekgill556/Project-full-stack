import { Request, Response } from "express";
import { prismaService } from "../services/prismaService";

export const serviceController = {
  async getAll(req: Request, res: Response) {
    const services = await prismaService.getAll();
    res.json(services);
  },

  async getById(req: Request, res: Response) {
    const service = await prismaService.getById(Number(req.params.id));
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json(service);
  },

  async create(req: Request, res: Response) {
    try {
      const created = await prismaService.create(req.body);
      res.status(201).json(created);
    } catch (err) {
      console.error("Create service error:", err);
      res.status(500).json({ error: "Failed to create service" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const updated = await prismaService.update(Number(req.params.id), req.body);
      res.json(updated);
    } catch (err) {
      console.error("Update service error:", err);
      res.status(500).json({ error: "Failed to update service" });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      await prismaService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      console.error("Delete service error:", err);
      res.status(500).json({ error: "Failed to delete service" });
    }
  },
};
