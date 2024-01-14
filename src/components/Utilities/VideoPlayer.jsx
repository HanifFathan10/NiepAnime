"use client";
import { PlayCircle, WarningCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="flex flex-col px-4 py-2 space-y-2">
        <button
          onClick={handleVideoPlayer}
          className="flex gap-x-2 bg-color-dark max-w-[160px] rounded-lg px-4 py-2 group justify-start font-medium items-center text-color-light hover:shadow-sm hover:shadow-color-primary"
        >
          <h1 className="text-xs">Watch Trailer</h1>
          <PlayCircle
            size={36}
            color="#1DB954"
            weight="fill"
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition"
          />
        </button>
        {isOpen && (
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={{
              width: "640",
              height: "360",
            }}
            className="rounded-lg"
            iframeClassName="w-full md:max-w-xl rounded-lg"
          />
        )}
      </div>
    );
  };
  return <Player />;
};

export default VideoPlayer;
