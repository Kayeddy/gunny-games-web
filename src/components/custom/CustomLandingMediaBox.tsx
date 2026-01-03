"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface CustomLandingMediaBoxProps {
  width?: number;
  height?: number;
  videoSrcs: string[];
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
      staggerChildren: 0.3,
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
}) => (
  <motion.div
    className={`absolute right-[2rem] px-1 py-1 bg-[#1e1c1c] bg-opacity-70 backdrop-blur-lg border border-n-1/10 rounded-2xl flex items-center justify-center z-20 ${width} ${height}`}
    style={{ bottom: bottomPosition }}
    variants={boxVariants}
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
            <h6 className="text-xl font-semibold leading-[10px] tracking-wider">
              {title}
            </h6>
            <p className="max-w-[250px] font-sen text-sm md:text-base">
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
          <h6 className="text-xl font-semibold leading-[10px] tracking-wider">
            {title}
          </h6>
          <p className="max-w-[250px] font-sen text-sm md:text-base">
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

const CustomLandingMediaBox: React.FC<CustomLandingMediaBoxProps> = ({
  width,
  height,
  videoSrcs,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check video ready state when video element or source changes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Check if video is already ready (cached)
    const checkReady = () => {
      if (videoElement.readyState >= 3) {
        setIsLoaded(true);
      }
    };

    // Check immediately in case video is already loaded
    checkReady();

    // Also listen for canplay event as a backup
    videoElement.addEventListener("canplay", checkReady);

    return () => {
      videoElement.removeEventListener("canplay", checkReady);
    };
  }, [currentVideoIndex]);

  // Handle play/pause state changes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      if (videoElement.readyState >= 3) {
        videoElement.play().catch(() => {
          // Autoplay blocked - reset state
          setIsPlaying(false);
        });
      }
    } else {
      videoElement.pause();
    }
  }, [isPlaying]);

  // Handle video source changes while playing
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !isPlaying) return;

    if (videoElement.readyState >= 3) {
      videoElement.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentVideoIndex, isPlaying]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoSrcs.length - 1) {
      // Play the next video in the sequence
      setIsLoaded(false);
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      // End of video sequence, reset and pause
      setCurrentVideoIndex(0);
      setIsPlaying(false);
      setHasStarted(false);
    }
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  const togglePlay = () => {
    const videoElement = videoRef.current;

    if (!isPlaying) {
      // Starting to play
      if (!hasStarted) {
        // First time playing - start from beginning
        setCurrentVideoIndex(0);
        setHasStarted(true);
      }
      setIsPlaying(true);

      // Try to play immediately if video is ready
      if (videoElement && videoElement.readyState >= 3) {
        videoElement.play().catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      // Pausing
      setIsPlaying(false);
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  return (
    <div
      className="custom-landing-media-box relative h-screen w-screen lg:h-full lg:w-[75vw] lg:-translate-x-7 lg:rounded-[30px]"
      style={{ width, height }}
    >
      <motion.div
        variants={containerVariants}
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
          content="Download for iOS"
          mediaUrl="/assets/other/apple_icon.webp"
          mediaWidth={40}
          mediaHeight={40}
          width="w-[250px]"
          height="h-[80px]"
        />
        <CustomInformativeBox
          bottomPosition={260}
          title=""
          content="Play Gunny Rush from your mobile device and connect to your Pera Wallet to get started."
        />
      </motion.div>

      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="h-12 w-12 animate-spin rounded-full border-y-4 border-solid border-purple-500 border-t-transparent shadow-md"></div>
        </div>
      )}

      <motion.video
        ref={videoRef}
        src={videoSrcs[currentVideoIndex]}
        loop={false}
        muted
        playsInline
        onCanPlay={handleCanPlay}
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover blur-md lg:blur-none"
        autoPlay={isPlaying}
      />

      {/* Centered Play/Pause Button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 z-30 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white transition-all duration-300 hover:bg-purple-600 hover:opacity-100 ${
          isPlaying ? "opacity-30" : "opacity-100"
        }`}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {isPlaying ? (
          <FaPause className="text-white" size={20} />
        ) : (
          <FaPlay className="ml-1 text-white" size={20} />
        )}
      </button>

      <Image
        src="/assets/icons/logo1024_100.webp"
        alt=""
        width={300}
        height={300}
        className="z-10 mx-auto my-auto max-w-lg -translate-y-[150px] object-contain lg:hidden"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="cutout right-0 top-0 z-30 hidden lg:block" />
        <div className="cutout bottom-0 left-0 z-30 hidden lg:block" />
      </div>
    </div>
  );
};

export default CustomLandingMediaBox;
