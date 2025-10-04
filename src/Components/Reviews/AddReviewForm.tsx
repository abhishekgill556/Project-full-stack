import React from "react";
import type { Review } from "../../types/Reviews";

type Props = {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
};

export default function AddReviewForm({ reviews, setReviews }: Props) {
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("Satisfied");
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (text.trim().length < 5) return setError("Review must be at least 5 characters.");
    setError("");

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      text: text.trim(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setStatus("Satisfied");
    setText("");
  }

  return (
    <form className="review-form" onSubmit={onSubmit}>
      <h3 className="review-form__title">Add a Review</h3>

      <div className="review-form__row">
        <label className="review-form__label">Name</label>
        <input
          className="review-form__input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className="review-form__row">
        <label className="review-form__label">Status</label>
        <select
          className="review-form__select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option>Satisfied</option>
          <option>Very satisfied</option>
          <option>Extremely satisfied</option>
        </select>
      </div>

      <div className="review-form__row">
        <label className="review-form__label">Review</label>
        <textarea
          className="review-form__textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a few words…"
        />
        <small className="review-form__hint">characters: {text.length}</small>
      </div>

      {error && <div className="review-form__error">{error}</div>}

      <div className="review-form__actions">
        <button className="btn" type="submit">Submit</button>
      </div>
    </form>
  );
}
