import { getAnimeResponse } from "@/libs/api-anime";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-3xl text-color-primary">
          {anime.data.title} {anime.data.year ? "-" : ""} {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>PERINGKAT</h3>
          <h3>{anime.data.rank}</h3>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>SKOR</h3>
          <h3>{anime.data.score}</h3>
        </div>
      </div>
      <div className="pt-4 -x-4 flex ga-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={300}
          height={350}
          className="w-full max-h-64 object-cover"
        />
        <p className="p-4 ">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-color-primary">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
            // rating={}
          />
        )}
      </div>
      <div className="">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
