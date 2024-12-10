"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

interface PageLoaderProps {
  onVideoEnd: () => void;
  isParentLoaded: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({
  onVideoEnd,
  isParentLoaded,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnd = () => {
    onVideoEnd();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-screen text-white bg-black h-screen z-[999] fixed flex flex-col items-center justify-center"
    >
      {!videoLoaded && (
        <div className="flex items-center justify-center translate-y-[80vh]">
          <Spinner size="lg" color="secondary" />
        </div>
      )}
      <video
        ref={videoRef}
        src="/assets/other/intro.mp4"
        autoPlay
        muted
        onLoadedData={handleVideoLoad}
        onEnded={handleVideoEnd}
        className="object-contain w-screen h-screen"
      />
    </motion.div>
  );
};

export default PageLoader;
