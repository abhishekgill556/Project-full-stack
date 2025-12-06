import { Request, Response } from "express";
import { prismaService } from "../services/prismaService";

export const serviceController = {
  async getAll(req: Request, res: Response) {
    try {
      const services = await prismaService.getAll();
      res.json(services);
    } catch (err) {
      console.error("GetAll error:", err);
      res.status(500).json({ error: "Failed to load services" });
    }
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const service = await prismaService.getById(id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (err) {
      console.error("GetById error:", err);
      res.status(500).json({ error: "Failed to load service" });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const created = await prismaService.create(req.body);
      res.status(201).json(created);
    } catch (err) {
      console.error("Create error:", err);
      res.status(500).json({ error: "Failed to create service" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const updated = await prismaService.update(
        Number(req.params.id),
        req.body
      );
      res.json(updated);
    } catch (err) {
      console.error("Update error:", err);
      res.status(500).json({ error: "Failed to update service" });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      await prismaService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      console.error("Delete error:", err);
      res.status(500).json({ error: "Failed to delete service" });
    }
  },

  // I.1 User-associated custom data
  async addMyService(req: Request, res: Response) {
    try {
      const userId = req.auth?.userId;
      const { serviceId } = req.body;

      if (!userId) return res.status(401).json({ error: "Not authenticated" });
      if (!serviceId)
        return res.status(400).json({ error: "serviceId is required" });

      const entry = await prismaService.addMyService(
        userId,
        Number(serviceId)
      );

      res.status(201).json(entry);
    } catch (err) {
      console.error("addMyService error:", err);
      res.status(500).json({ error: "Failed to save user's service" });
    }
  },

  async getMyServices(req: Request, res: Response) {
    try {
      const userId = req.auth?.userId;

      if (!userId) return res.status(401).json({ error: "Not authenticated" });

      const items = await prismaService.getMyServices(userId);
      res.json(items);
    } catch (err) {
      console.error("getMyServices error:", err);
      res.status(500).json({ error: "Failed to load user services" });
    }
  },
};
