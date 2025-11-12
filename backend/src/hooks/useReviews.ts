import { useState, useEffect } from "react";
import type { Review } from "../types/Reviews";
import { reviewService } from "../services/reviewService"
 
export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function loadReviews() {

    try {
      setLoading(true);
      const data = await reviewService.getAllReviews();
      setReviews(data);
    } catch (err) {

      setError((err as Error).message);
    } finally {
      setLoading(false);
    }

  }
 
  async function addReview(review: Review) {
    try {
      await reviewService.addReview(review);
      await loadReviews();
    } catch (err) {
      setError((err as Error).message);
    }
  }
 
  async function removeReview(id: string) {
    try {
      await reviewService.deleteReview(id);
      await loadReviews();
    } catch (err) {
      setError((err as Error).message);
    }
  }
 
  useEffect(() => {
    loadReviews();
  }, []);
   return { reviews, loading, error, addReview, removeReview };
}

 