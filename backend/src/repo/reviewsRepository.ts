import type { Review } from "../types/Reviews";

const API_URL = "http://localhost:3000/api/reviews";

export const reviewRepository = {
  async getAll(): Promise<Review[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load reviews");
    return res.json();
  },

  async create(review: Omit<Review, "id" | "createdAt">): Promise<Review> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    if (!res.ok) throw new Error("Failed to create review");

    return res.json();
  },

  async delete(id: number): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete review");
  },
};
