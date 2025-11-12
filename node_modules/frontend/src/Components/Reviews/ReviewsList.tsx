import type { Review } from "../../types/Reviews";
 
type Props = {
  reviews: Review[];
  onDelete: (id: string) => void;
};
 
export function ReviewsList({ reviews, onDelete }: Props) {
  return (
<ul className="reviews-list">
      {reviews.map((rev) => (
<li key={rev.id} className="review-card">
<div className="review-header">
<span className="review-name">{rev.name}</span>
<span className="review-status">{rev.status}</span>
</div>
<p className="review-text">{rev.text}</p>
 
          <button onClick={() => onDelete(rev.id)}>Delete</button>
</li>
      ))}
</ul>
  );
}