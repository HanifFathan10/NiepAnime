import prisma from "@/libs/prisma";
import React from "react";
import CommentRating from "./CommentRating";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment, i) => {
        return (
          <div className="text-color-dark bg-color-primary p-4" key={i}>
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
            <CommentRating rating={comment.rating} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
