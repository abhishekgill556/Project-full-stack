import "./Reviews.css";
import AddReviewForm from "./AddReviewForm";
import ReviewsList from "./ReviewsList";
import { useEffect, useState } from "react";
import { reviewRepository } from "../../apis/reviewsrepository";
import type { Review } from "../../types/Reviews";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadReviews() {
    try {
      setLoading(true);
      const data = await reviewRepository.getAll();
      setReviews(data);
    } catch {
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  }

  async function addReview(data: { name: string; rating: number; comment: string }) {
    await reviewRepository.create(data);
    loadReviews();
  }

  async function removeReview(id: number) {
    await reviewRepository.remove(id);
    loadReviews();
  }

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <section className="reviews">
      <h2 className="reviews-title">Client Reviews</h2>

      <AddReviewForm onAdd={addReview} />

      {loading && <p>Loading reviews...</p>}
      {error && <p className="error">{error}</p>}

      <ReviewsList reviews={reviews} onDelete={removeReview} />
    </section>
  );
}
