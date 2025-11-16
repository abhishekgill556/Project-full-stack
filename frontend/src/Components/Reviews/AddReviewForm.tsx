import { useState } from "react";
import { reviewRepository } from "../../apis/reviewsrepository";

export default function AddReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await reviewRepository.create({ name, rating, comment });

    setName("");
    setRating(5);
    setComment("");

    alert("Review added!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <input value={rating} type="number" min="1" max="5" onChange={(e) => setRating(Number(e.target.value))} />
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your comment" />
      <button type="submit">Add Review</button>
    </form>
  );
}
