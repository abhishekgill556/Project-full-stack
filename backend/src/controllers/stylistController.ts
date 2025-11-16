import { Request, Response } from "express";
import stylistService from "../services/stylistService";

export default {
  async getAll(req: Request, res: Response) {
    const data = await stylistService.getAll();
    res.json(data);
  },

  async update(req: Request, res: Response) {
    const { category, levels } = req.body;
    await stylistService.update(category, levels);
    res.json({ message: "Updated" });
  },

  async remove(req: Request, res: Response) {
    const { category } = req.params;
    await stylistService.remove(category);
    res.json({ message: "Deleted" });
  }
};
