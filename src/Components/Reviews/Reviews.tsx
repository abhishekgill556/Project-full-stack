import "./Reviews.css";
import type { Review } from "../../types/Reviews";
import reviews from "../../data/Reviews.json";

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews-title">Client Reviews</h2>
      <ul className="reviews-list">
        {reviews.map((rev: Review) => (
          <li key={rev.id} className="review-card">
            <div className="review-header">
              <span className="review-name">{rev.name}</span>
              <span className="review-status">{rev.status}</span>
            </div>
            <p className="review-text">{rev.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
