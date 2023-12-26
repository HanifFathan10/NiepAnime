import CommentRating from "@/components/AnimeList/CommentRating";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="w-full mt-4 px-4">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 gap-3 px-2 py-4">
        {!comments.length ? (
          <h1 className="text-3xl text-color-primary">Belum ada comment...</h1>
        ) : (
          <>
            {comments.map((comment, i) => {
              return (
                <Link
                  href={`/anime/${comment.anime_mal_id}`}
                  className="bg-color-primary text-color-dark p-4"
                  key={i}
                >
                  <p className="text-sm">{comment.anime_title}</p>
                  <p className="italic">{comment.comment}</p>
                  <CommentRating rating={comment.rating} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
