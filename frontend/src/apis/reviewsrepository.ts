import type { Review } from "../types/Reviews";

const API_URL = "http://localhost:3000/api/reviews";

export const reviewRepository = {
  async getAll(): Promise<Review[]> {
    const res = await fetch(API_URL);
    return res.json();
  },

  async create(data: { name: string; rating: number; comment: string }): Promise<Review> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res.json();
  },

  async remove(id: number): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },
};
