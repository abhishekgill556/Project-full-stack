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
    setName(""); setStatus("Satisfied"); setText("");
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 800, margin: "0 auto 16px", display: "grid", gap: 8 }}>
      <h3 style={{ margin: 0 }}>Add a Review</h3>

      <label style={{ display: "grid", gap: 4 }}>
        <span>Name</span>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
      </label>

      <label style={{ display: "grid", gap: 4 }}>
        <span>Status</span>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Satisfied</option>
          <option>Very satisfied</option>
          <option>Extremely satisfied</option>
        </select>
      </label>

      <label style={{ display: "grid", gap: 4 }}>
        <span>Review</span>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write a few words…" />
        <small style={{ color: "#666" }}>characters: {text.length}</small>
      </label>

      {error && <div style={{ color: "#b00020", fontSize: 13 }}>{error}</div>}

      <button type="submit" style={{ padding: "8px 12px", border: "1px solid #ddd", background: "#f8f8f8", borderRadius: 6, cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}
