"use client";
import { XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={{
            height: "350",
            width: "250",
          }}
        />
      </div>
    );
  };
  const ButtonOpenTrailer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
