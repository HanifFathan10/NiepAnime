"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Star } from "@phosphor-icons/react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const router = useRouter();

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();

    if (comment.length < 3 || comment.trim() === "") {
      return;
    }

    const ratingString = rating.toString();

    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
      rating: ratingString,
    };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
      }, 5000);
      setComment("");
      setRating(0);
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex cursor-pointer">
        {[1, 2, 3, 4, 5].map((star, i) => (
          <Star
            key={i}
            size={32}
            onClick={() => handleStarClick(star)}
            className={
              star <= rating ? "text-color-accent" : "text-color-light"
            }
            weight={star <= rating ? "fill" : "regular"}
          />
        ))}
      </div>
      {isCreated && <p className="text-color-light">Postingan terkirim....</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        cols="30"
        rows="10"
        className="w-full h-32 text-md p-4 rounded-lg"
      />
      <button
        onClick={handlePosting}
        className="w-52 p-4 bg-color-accent rounded-lg font-bold hover:bg-color-dark hover:text-color-light transition-all duration-300"
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentInput;
