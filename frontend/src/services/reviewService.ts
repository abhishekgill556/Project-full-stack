import type { Review } from "../../../frontend/src/types/Reviews";

import { reviewRepository } from "../repo/reviewsRepository";
 
export class ReviewService {

  private repo;
 
  constructor(repo = reviewRepository) {

    this.repo = repo;

  }
 
  async getAllReviews(): Promise<Review[]> {

    return await this.repo.getAll();

  }
 
  
  async addReview(review: Review): Promise<void> {

    if (!review.name.trim()) {

      throw new Error("Name is required");

    }

    if (review.text.trim().length < 5) {

      throw new Error("Review must be at least 5 characters");

    }

    await this.repo.create(review);

  }
 
  async deleteReview(id: string): Promise<void> {

    await this.repo.delete(id);

  }

}
 
export const reviewService = new ReviewService();

 