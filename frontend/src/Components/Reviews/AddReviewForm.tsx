import { useState } from "react";

export default function AddReviewForm({ onAdd }: { onAdd: (data: { name: string; rating: number; comment: string }) => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAdd({ name, rating, comment });

    setName("");
    setRating(5);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <input
        value={rating}
        type="number"
        min="1"
        max="5"
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
      />

      <button type="submit">Add Review</button>
    </form>
  );
}


