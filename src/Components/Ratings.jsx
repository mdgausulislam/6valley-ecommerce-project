import React from "react";
import StarRatings from "react-star-ratings";

function Ratings({ rating, starDimension, starSpacing }) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="red"
      starHoverColor="red"
      numberOfStars={5}
      starDimension={starDimension}
      starSpacing={starSpacing}
      name="rating"
    />
  );
}

export default Ratings;
