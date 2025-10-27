import "./Reviews.css";
import { useReviews } from "../../hooks/useReviews";
import { ReviewsList } from "./ReviewsList";
 
export default function Reviews() {

  const { reviews, loading, error, removeReview } = useReviews();
 
  return (
<section className="reviews">
<h2 className="reviews-title">Client Reviews</h2>
 
      {loading && <p>Loading reviews...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && reviews.length === 0 && <p>No reviews yet.</p>}
 
  
<ReviewsList reviews={reviews} onDelete={removeReview} />
</section>
  );
}