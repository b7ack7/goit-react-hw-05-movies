import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReviewDetails } from "components/ReviewDetails";
import { fetchMovieReviews } from "services/api";

export const Reviews = () => {
  const {movieId} = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReviews() {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
    }
    fetchReviews().catch(error => {
        setError("Something went wrong, please try again later");
        console.error(error);
    });
  }, [movieId])

  if (error) {
    return <h1>{error}</h1>
  } 

    return (
        <div>
           <ul>
            {reviews?.map((review) => {
                return (
                    <ReviewDetails key={review.id}
                    author_details={review.author_details}
                    content={review.content}/>
                )
            })}
           </ul>
           {!reviews.length && <p>We don't have any reviews for this movie.</p>}
        </div>
    )
}

