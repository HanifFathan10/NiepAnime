import prisma from "@/libs/prisma";
import React from "react";
import CommentRating from "./CommentRating";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {comments.map((comment, i) => {
        return (
          <div
            className="text-color-dark bg-color-primary px-3 py-4 rounded-md"
            key={i}
          >
            <h1 className="font-semibold md:text-xs lg:text-base">
              {comment.username}
            </h1>
            <h4 className="text-xs mb-1">{comment.comment}</h4>
            <CommentRating rating={comment.rating} />
          </div>
        );
      })}
      {!comments.length && (
        <div className="flex flex-col justify-center items-center text-color-dark bg-color-primary px-3 py-4 rounded-md">
          <h1 className="font-medium italic">Belum ada komentar!!</h1>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
