"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartCollection = ({ collection }) => {
  return (
    <>
      {collection.map((collec, i) => {
        return (
          <Link
            key={i}
            href={`/anime/${collec.anime_mal_id}`}
            className="relative"
          >
            <Image
              src={collec.anime_image}
              alt={collec.anime_image}
              width={200}
              height={200}
              className="w-full"
              fetchPriority="high"
            />
            <div className="absolute flex justify-center items-center bottom-0 bg-color-accent w-full h-16">
              <p className="text-color-primary text-xl">{collec.anime_title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CartCollection;
