"use client";

import { Star } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

const CommentRating = ({ rating }) => {
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    const roundedRating = Math.round(Math.max(0, Math.min(5, rating)));
    setFilledStars(roundedRating);
  }, [rating]);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={32}
          onClick={() => handleStarClick(star)}
          className={
            star <= rating ? "text-color-accent" : "text-color-primary"
          }
          weight={star <= rating ? "fill" : "regular"}
        />
      ))}
    </div>
  );
};

export default CommentRating;
