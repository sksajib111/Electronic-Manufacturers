import React from "react";
import useReviews from "../hooks/useReview";
import "./Reviews.css";

import Review from "./Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section id="reviews" className="px-20">
      <h2 className="text-4xl text-center my-5 text-orange-600"> User Reviews </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
