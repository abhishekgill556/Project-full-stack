import React from "react";
import "./Reviews.css";
import type { Review } from "../../types/Reviews";
import initialReviews from "../../data/Reviews.json";
import AddReviewForm from "./AddReviewForm";
import ReviewsList from "./ReviewsList";

export default function ReviewsPage() {
  const [reviews, setReviews] = React.useState<Review[]>(
    initialReviews as Review[]
  );

  function handleDelete(id: string) {
    setReviews(prev => prev.filter(r => r.id !== id));
  }

  return (
    <section className="reviews">
      <h2 className="reviews-title">Client Reviews</h2>
      <AddReviewForm reviews={reviews} setReviews={setReviews} />
      <ReviewsList reviews={reviews} onDelete={handleDelete} />
    </section>
  );
}
