import type { Service } from "../types/service";
import data from "../data/services.json";

let db: Service[] = [...(data as Service[])];

export const serviceRepo = {
  async listAll(): Promise<Service[]> {
    return [...db];
  },

  async search(text?: string): Promise<Service[]> {
    const q = text?.trim().toLowerCase();
    if (!q) return this.listAll();
    return db.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.description?.toLowerCase().includes(q)
    );
  },
};
