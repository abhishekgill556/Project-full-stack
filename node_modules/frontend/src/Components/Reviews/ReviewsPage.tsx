import "./Reviews.css";
import { useReviews } from "../../hooks/useReviews";
import { AddReviewForm } from "./AddReviewForm";
import { ReviewsList } from "./ReviewsList";
 
export default function ReviewsPage() {

 const { reviews, loading, error, addReview, removeReview } = useReviews();
 
  return (
<section className="reviews">
<h2 className="reviews-title">Client Reviews</h2>
 
      <AddReviewForm onAdd={addReview} />
      {loading && <p>Loading reviews...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && reviews.length === 0 && <p>No reviews yet.</p>}
      <ReviewsList reviews={reviews} onDelete={removeReview} />
</section>

  );

}

 