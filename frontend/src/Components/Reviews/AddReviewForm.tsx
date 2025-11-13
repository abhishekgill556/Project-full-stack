import React from "react";
import type { Review } from "../../types/Reviews";
 
type Props = {
  onAdd: (review: Review) => Promise<void>;
};
 
export function AddReviewForm({ onAdd }: Props) {
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("Satisfied");
  const [text, setText] = React.useState("");

  const [error, setError] = React.useState("");
 
  async function onSubmit(e: React.FormEvent) {

    e.preventDefault();

    setError("");
 
    const newReview: Review = {

      id: Date.now().toString(),

      name: name.trim(),

      status,

      text: text.trim(),

    };
 
    try {

      await onAdd(newReview);

      setName("");

      setStatus("Satisfied");

      setText("");

    } catch (err) {

      setError((err as Error).message);

    }

  }
 
  return (
<form className="review-form" onSubmit={onSubmit}>
<h3 className="review-form__title">Add a Review</h3>
 
      <div className="review-form__row">
<label>Name</label>
<input value={name} onChange={(e) => setName(e.target.value)} />
</div>
 
      <div className="review-form__row">
<label>Status</label>
<select value={status} onChange={(e) => setStatus(e.target.value)}>
<option>Satisfied</option>
<option>Very satisfied</option>
<option>Extremely satisfied</option>
</select>
</div>
 
      <div className="review-form__row">
<label>Review</label>
<textarea value={text} onChange={(e) => setText(e.target.value)} />
</div>
 
      {error && <p className="error">{error}</p>}
 
      <button type="submit" className="btn">

        Submit
</button>
</form>

  );

}

 