import type { Service } from "../types/service";

const API_URL = "http://localhost:5000/api/services";

export const serviceRepo = {
  async getAll(): Promise<Service[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load services");
    return res.json();
  },

  async getById(id: number): Promise<Service | null> {
    const res = await fetch(`${API_URL}/${id}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to load service");
    return res.json();
  },

  async create(data: Omit<Service, "id">): Promise<Service> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create service");
    return res.json();
  },

  async update(id: number, data: Partial<Service>): Promise<Service | null> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to update service");
    return res.json();
  },

  async remove(id: number): Promise<boolean> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (res.status === 404) return false;
    if (!res.ok) throw new Error("Failed to delete service");
    return true;
  },
};
