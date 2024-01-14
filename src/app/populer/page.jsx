"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-anime";
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const segment = useSelectedLayoutSegment("");
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [topAnime, setTopAnime] = useState([]);
  // console.log(segment);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse(
      "top/anime",
      `page=${currentPage}`
    );
    setTopAnime(populerAnime);
  };

  const handleChangePage = (newPage) => {
    router.push(`/populer?page=${newPage}`, { scroll: true });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  return (
    <>
      <HeaderMenu title={`Anime terpopuler page ${currentPage}`} />
      <AnimeList api={topAnime} />
      <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
        {currentPage > 1 && (
          <button
            className="transition-all hover:text-color-accent"
            onClick={() => {
              handleChangePage(currentPage - 1);
            }}
          >
            Prev
          </button>
        )}
        {topAnime.pagination && (
          <p>
            {currentPage} of {topAnime.pagination.last_visible_page}
          </p>
        )}

        <button
          className="transition-all hover:text-color-accent"
          onClick={() => {
            handleChangePage(currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Page;
