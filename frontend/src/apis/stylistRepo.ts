import type { StylistData } from "../types/stylist";

const API_URL = "http://localhost:5000/api/stylists";

export const stylistRepository = {
  async getAll(): Promise<StylistData> {
    const res = await fetch(API_URL);
    return res.json();
  },

  async update(category: string, levels: Record<string, number>): Promise<void> {
    await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, levels }),
    });
  },

  async remove(category: string): Promise<void> {
    await fetch(`${API_URL}/${category}`, {
      method: "DELETE",
    });
  }
};
