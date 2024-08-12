"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CustomHeroNavigationTopBar from "./CustomHeroNavigationTopBar";
import Image from "next/image";

interface CustomLandingMediaBoxProps {
  width?: number;
  height?: number;
  videoSrcs: string[]; // Array of video sources
}

interface CustomInformativeBoxProps {
  width?: number;
  height?: number;
  title: string;
  content: string;
  bottomPosition?: number;
  decorations?: any | React.ReactElement;
}

const CustomInformativeBox: React.FC<CustomInformativeBoxProps> = ({
  title,
  content,
  bottomPosition,
}) => {
  return (
    <div
      className="absolute right-[2rem] px-1 py-1 bg-[#1e1c1c] bg-opacity-70 backdrop-blur-lg border border-n-1/10 rounded-2xl lg:flex z-20"
      style={{ bottom: bottomPosition }}
    >
      <div className="flex flex-row items-center justify-center gap-2 p-3 text-white">
        <span className="flex flex-col items-start justify-center gap-2">
          <h6 className="text-xl font-semibold tracking-wider leading-[10px]">
            {title}
          </h6>
          <p className="max-w-[250px]">{content}</p>
        </span>
        {/* <Image
          src="https://em-content.zobj.net/source/microsoft-teams/363/face-holding-back-tears_1f979.png"
          alt=""
          className="object-cover w-10 h-10"
          width={10}
          height={10}
        /> */}
      </div>
    </div>
  );
};

const CustomLandingMediaBox: React.FC<CustomLandingMediaBoxProps> = ({
  width,
  height,
  videoSrcs,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const handleVideoEnd = () => {
    setIsLoaded(false); // Reset for the next video
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoSrcs.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      setIsLoaded(true); // Loader should disappear when the video can play
      videoElement?.play(); // Play the video once it's ready
    };

    if (videoElement) {
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.load(); // Ensure the video is loaded and ready before playing
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, [currentVideoIndex]);

  return (
    <div
      className="w-[75vw] h-full -translate-x-7 custom-landing-media-box relative"
      style={{ width, height }}
    >
      <CustomHeroNavigationTopBar />

      <CustomInformativeBox
        bottomPosition={200}
        title=""
        content="Download for Android"
      />

      <CustomInformativeBox
        bottomPosition={100}
        title=""
        content="Download for IOS"
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="loader"></div>
        </div>
      )}

      <motion.video
        ref={videoRef}
        src={videoSrcs[currentVideoIndex]}
        loop={false}
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }} // Faster fade-in
        onLoadedData={handleVideoLoad}
        onEnded={handleVideoEnd}
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="top-0 right-0 cutout" />
        <div className="bottom-0 left-0 cutout" />
      </div>
    </div>
  );
};

export default CustomLandingMediaBox;
