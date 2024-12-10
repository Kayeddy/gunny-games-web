"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

interface CustomLandingMediaBoxProps {
  width?: number;
  height?: number;
  videoSrcs: string[]; // Array of video sources
}

interface CustomInformativeBoxProps {
  width?: string;
  height?: string;
  title: string;
  content: string;
  bottomPosition?: number;
  mediaUrl?: string;
  mediaWidth?: number;
  mediaHeight?: number;
  link?: string;
}

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between each child's animation
    },
  },
};

const CustomInformativeBox: React.FC<CustomInformativeBoxProps> = ({
  title,
  content,
  mediaUrl,
  bottomPosition,
  mediaWidth,
  mediaHeight,
  link,
  width,
  height,
}) => {
  return (
    <motion.div
      className={`absolute right-[2rem] px-1 py-1 bg-[#1e1c1c] bg-opacity-70 backdrop-blur-lg border border-n-1/10 rounded-2xl flex items-center justify-center z-20 ${
        width && width
      } ${height && height}`}
      style={{ bottom: bottomPosition }}
      variants={boxVariants} // Apply the animation variants
      initial="hidden"
      animate="visible"
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="flex flex-row items-center justify-center gap-2 p-3 text-white">
            <span className="flex flex-col items-start justify-center gap-2">
              <h6 className="text-xl font-semibold tracking-wider leading-[10px]">
                {title}
              </h6>
              <p className="max-w-[250px] text-sm md:text-base font-sen">
                {content}
              </p>
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
        <div className="flex flex-row items-center justify-center gap-2 p-3 text-white">
          <span className="flex flex-col items-start justify-center gap-2">
            <h6 className="text-xl font-semibold tracking-wider leading-[10px]">
              {title}
            </h6>
            <p className="max-w-[250px] text-sm md:text-base font-sen">
              {content}
            </p>
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
    </motion.div>
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
      className="lg:w-[75vw] w-screen lg:h-full h-screen lg:-translate-x-7 custom-landing-media-box relative lg:rounded-[30px]"
      style={{ width, height }}
    >
      <motion.div
        variants={containerVariants} // Apply the container variants
        initial="hidden"
        animate="visible"
      >
        <CustomInformativeBox
          bottomPosition={170}
          title=""
          link="https://play.google.com/store/apps/details?id=com.Gunny.googleauth"
          content="Download for Android"
          mediaUrl="/assets/other/playstore_icon.webp"
          mediaWidth={30}
          mediaHeight={30}
          width="w-[250px]"
          height="h-[80px]"
        />

        <CustomInformativeBox
          bottomPosition={80}
          title=""
          link="https://apps.apple.com/us/app/gunny-rush-game/id6602913959"
          content="Download for IOS"
          mediaUrl="/assets/other/apple_icon.webp"
          mediaWidth={40}
          mediaHeight={40}
          width="w-[250px]"
          height="h-[80px]"
        />

        <CustomInformativeBox
          bottomPosition={260}
          title=""
          content="Access Gunny Rush from your mobile device and connect to your Pera Wallet to get started."
        />
      </motion.div>

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
        className="absolute inset-0 object-cover w-full h-full blur-md lg:blur-none"
      />

      <Image
        src="/assets/icons/logo1024_100.webp"
        alt=""
        width={300}
        height={300}
        className="object-contain max-w-lg mx-auto my-auto lg:hidden -translate-y-[150px]"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="top-0 right-0 hidden cutout lg:block" />
        <div className="bottom-0 left-0 hidden cutout lg:block" />
      </div>
    </div>
  );
};

export default CustomLandingMediaBox;
