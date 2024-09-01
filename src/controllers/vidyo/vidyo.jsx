"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [onHidin, setOnHidin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setOnHidin(false);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); 
  };

  const handlePause = () => {
    videoRef.current.pause();
    setOnHidin(true);
    setIsVisible(true); 
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (!onHidin) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500); 
    }
  };

  return (
    <div className="rounded-2xl">
      <div className="w-full max-w-3xl">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-lg relative"
            controls
            controlsList="nodownload"
            loop
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/mp4"
            />
            Sizning brauzeringiz video tegini qo'llab-quvvatlamaydi.
          </video>
          <div
            className={`absolute bg-red-700 top-[40%] right-[45%] cursor-pointer rounded-xl p-2 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaPlay
              onClick={handlePlay}
              className={onHidin ? "block" : "hidden"}
              size={40}
              color="#fff"
            />
            <FaPause
              onClick={handlePause}
              className={onHidin ? "hidden" : "block"}
              size={40}
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
