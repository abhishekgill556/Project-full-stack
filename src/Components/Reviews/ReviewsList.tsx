import React from "react";
import "./Reviews.css";
import type { Review } from "../../types/Reviews";

type Props = {
  reviews: Review[];
  onDelete: (id: string) => void;
};

export default function ReviewsList({ reviews, onDelete }: Props) {
  return (
    <ul className="reviews-list">
      {reviews.map((rev) => (
        <li key={rev.id} className="review-card">
          <div className="review-header">
            <span className="review-name">{rev.name}</span>
            <span className="review-status">{rev.status}</span>
          </div>
          <p className="review-text">{rev.text}</p>

          <div style={{ marginTop: 10, textAlign: "right" }}>
            <button
              onClick={() => onDelete(rev.id)}
              style={{ padding: "6px 10px", border: "1px solid #ddd", background: "#fff", borderRadius: 6, cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
