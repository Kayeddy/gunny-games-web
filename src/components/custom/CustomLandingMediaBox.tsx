"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  mediaUrl?: string;
  mediaWidth?: number;
  mediaHeight?: number;
  link?: string;
}

const CustomInformativeBox: React.FC<CustomInformativeBoxProps> = ({
  title,
  content,
  mediaUrl,
  bottomPosition,
  mediaWidth,
  mediaHeight,
  link,
}) => {
  return (
    <div
      className="absolute right-[2rem] px-1 py-1 bg-slate-200 bg-opacity-70 backdrop-blur-lg border border-n-1/10 rounded-2xl lg:flex z-20"
      style={{ bottom: bottomPosition }}
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="flex flex-row items-center justify-center gap-2 p-3 text-[#1e1c1c]">
            <span className="flex flex-col items-start justify-center gap-2">
              <h6 className="text-xl font-semibold tracking-wider leading-[10px]">
                {title}
              </h6>
              <p className="max-w-[250px]">{content}</p>
            </span>
            {mediaUrl && (
              <Image
                src={mediaUrl}
                alt=""
                className="object-contain"
                width={mediaWidth}
                height={mediaHeight}
              />
            )}
          </div>
        </Link>
      ) : (
        <div className="flex flex-row items-center justify-center gap-2 p-3 text-[#1e1c1c]">
          <span className="flex flex-col items-start justify-center gap-2">
            <h6 className="text-xl font-semibold tracking-wider leading-[10px]">
              {title}
            </h6>
            <p className="max-w-[250px]">{content}</p>
          </span>
          {mediaUrl && (
            <Image
              src={mediaUrl}
              alt=""
              className="object-contain"
              width={mediaWidth}
              height={mediaHeight}
            />
          )}
        </div>
      )}
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
      <CustomInformativeBox
        bottomPosition={120}
        title=""
        link="https://play.google.com/store/apps/details?id=com.Gunny.googleauth"
        content="Download for Android"
        mediaUrl="/assets/other/playstore_icon.webp"
        mediaWidth={30}
        mediaHeight={30}
      />

      <CustomInformativeBox
        bottomPosition={200}
        title=""
        content="Access Gunny Rush from your mobile device and connect to your Pera Wallet to get started."
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-purple-500 border-solid rounded-full shadow-md animate-spin border-y-4 border-t-transparent"></div>
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
