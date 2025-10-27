import type { Review } from "../types/Reviews";
import initialReviews from "../data/Reviews.json";
 
let reviews: Review[] = [...(initialReviews as Review[])];
 
export const reviewRepository = {
  async getAll(): Promise<Review[]> {
    await new Promise((res) => setTimeout(res, 100)); 
    return [...reviews];
  },
 

  async create(review: Review): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    reviews = [review, ...reviews];
  },
 
  async delete(id: string): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    reviews = reviews.filter((r) => r.id !== id);
  },
};