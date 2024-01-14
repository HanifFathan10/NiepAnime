import React from "react";

const AllDataAnime = ({ anime }) => {
  return (
    <div className="w-full flex overflow-x-auto px-4 py-3 rounded-lg gap-2">
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">Peringkat</h1>
        <h1>{anime.data.rank}</h1>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">Skor</h1>
        <h1>{anime.data.score}</h1>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">EPISODE</h1>
        <h3>{anime.data.episodes}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">DURASI</h1>
        <h3>{anime.data.duration}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">FAVORIT</h1>
        <h3>{anime.data.favorites}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">RATING</h1>
        <h3>{anime.data.rating}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">TYPE</h1>
        <h3>{anime.data.type}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">STATUS</h1>
        <h3>{anime.data.status}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">POPULARITAS</h1>
        <h3>{anime.data.popularity}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">FAVORIT</h1>
        <h3>{anime.data.favorites}</h3>
      </div>
      <div className="min-w-fit flex flex-col bg-color-primary px-3 py-2 rounded-lg">
        <h1 className="text-[#828282]">SEASON</h1>
        <h3>{anime.data.season}</h3>
      </div>
    </div>
  );
};

export default AllDataAnime;
