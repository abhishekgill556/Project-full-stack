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
    const created = await prismaService.create(req.body);
    res.status(201).json(created);
  },

  async update(req: Request, res: Response) {
    const updated = await prismaService.update(Number(req.params.id), req.body);
    res.json(updated);
  },

  async remove(req: Request, res: Response) {
    await prismaService.remove(Number(req.params.id));
    res.status(204).send();
  }
};
