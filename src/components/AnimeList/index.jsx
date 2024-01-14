import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4 py-3">
      {api.data?.map((anime, i) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          className="rounded-md cursor-pointer text-color-primary hover:text-color-accent shadow-md shadow-color-primary hover:scale-105 transition-all duration-300"
          key={i}
        >
          <Image
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={200}
            height={200}
            fetchPriority="high"
            className="w-full h-48 md:h-64 object-cover bg-cover rounded-b-sm"
          />
          <h3 className="text-xs md:text-md px-2 py-4 hover:font-bold">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
