import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4">
      {api.data?.map((anime, i) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          className="rounded-lg cursor-pointer text-color-primary hover:text-color-accent transition-all"
          key={i}
        >
          <Image
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={300}
            height={350}
            className="w-full max-h-64 object-cover"
          />
          <h3 className="font-bold text-md md:text-xl p-4">{anime.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
