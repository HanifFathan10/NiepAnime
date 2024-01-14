import { getAnimeResponse } from "@/libs/api-anime";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
import AllDataAnime from "@/components/AnimeList/AllDataAnime";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div
        className="w-full h-[380px] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${anime.data.images.webp.large_image_url})`,
        }}
      ></div>
      <div className="container grid grid-flow-row md:grid-flow-col px-4 gap-3">
        <div className="md:col-span-4 flex md:flex-col justify-center gap-x-2 space-y-2">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={300}
            height={350}
            fetchPriority="high"
            className="w-fit h-56 md:h-96 rounded-md object-cover -mt-44 bg-center bg-cover aspect-auto"
          />
          {!collection && user && (
            <CollectionButton
              anime_mal_id={id}
              user_email={user?.email}
              anime_image={anime.data.images.webp.image_url}
              anime_title={anime.data.title}
            />
          )}
        </div>
        <div className="md:col-span-6 flex flex-col text-color-light py-4 gap-y-2">
          <h1 className="text-base sm:text-xl md:text-3xl font-bold">
            {anime.data.title}
          </h1>
          <p className=" w-full text-xs md:text-[14px]">
            {anime.data.synopsis}
          </p>
          <h1 className="">(Source: {anime.data.source})</h1>
        </div>
      </div>
      <AllDataAnime anime={anime} key={anime.mal_id} />
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      <div className="p-4">
        <h3 className="text-lg font-bold text-color-primary">
          Komentar Penonton
        </h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
    </>
  );
};

export default Page;
