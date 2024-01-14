"use client";
import { Plus } from "@phosphor-icons/react";
import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-green">Berhasil ditambahkan ke collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="flex gap-x-1 justify-center items-center text-xs font-semibold py-2 px-3 bg-color-accent text-color-dark rounded-md hover:text-color-primary hover:bg-color-dark transition-all"
        >
          Add To Collection
          <Plus size={18} weight="bold" />
        </button>
      )}
    </>
  );
};

export default CollectionButton;
