import { useEffect, useState } from "react";
import { reviewRepository } from "../../apis/reviewsrepository";
import type { Review } from "../../types/Reviews";

export default function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);

  async function loadReviews() {
    const data = await reviewRepository.getAll();
    setReviews(data);
  }

  async function handleDelete(id: number) {
    await reviewRepository.remove(id);
    loadReviews(); 
  }

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((r) => (
        <div key={r.id} className="review-card">
          <p><strong>{r.name}</strong> ⭐ {r.rating}</p>
          <p>{r.comment}</p>
          <button onClick={() => handleDelete(r.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
