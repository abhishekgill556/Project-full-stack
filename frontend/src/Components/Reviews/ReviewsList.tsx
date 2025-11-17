import type { Review } from "../../types/Reviews";

interface ReviewsListProps {
  reviews: Review[];
  onDelete: (id: number) => void;
}

export default function ReviewsList({ reviews, onDelete }: ReviewsListProps) {
  return (
    <div>
      <h2>Reviews</h2>

      {reviews.map((r) => (
        <div key={r.id} className="review-card">
          <p>
            <strong>{r.name}</strong> ⭐ {r.rating}
          </p>

          <p>{r.comment}</p>

          <button onClick={() => onDelete(r.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
