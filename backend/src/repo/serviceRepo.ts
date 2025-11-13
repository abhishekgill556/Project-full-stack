import type { Service } from "../types/service";
import servicesData from "../data/services.json";

let db: Service[] = [...(servicesData as Service[])];
const wait = (ms = 100) => new Promise(res => setTimeout(res, ms));

export const serviceRepo = {
  async getAll(): Promise<Service[]> {
    await wait();
    return [...db]; 
  },

  async getById(id: string): Promise<Service | null> {
    await wait();
    return db.find(s => s.id === id) ?? null;
  },

  async create(item: Service): Promise<Service> {
    await wait();
    db.push(item);
    return item;
  },

  async update(id: string, patch: Partial<Service>): Promise<Service | null> {
    await wait();
    const index = db.findIndex(s => s.id === id);
    if (index === -1) return null;
    db[index] = { ...db[index], ...patch };
    return db[index];
  },

  async remove(id: string): Promise<boolean> {
    await wait();
    const before = db.length;
    db = db.filter(s => s.id !== id);
    return db.length < before;
  },
};
