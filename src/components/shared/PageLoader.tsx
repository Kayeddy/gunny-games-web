"use client";

import React, { useState, useRef, useCallback } from "react";
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
  const hasEndedRef = useRef(false);

  const triggerEnd = useCallback(() => {
    if (hasEndedRef.current) return;
    hasEndedRef.current = true;
    onVideoEnd();
  }, [onVideoEnd]);

  const handleCanPlay = () => {
    setVideoLoaded(true);
    const video = videoRef.current;
    if (!video) return;

    // Video is ready - attempt to play
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was truly blocked - skip the video
        triggerEnd();
      });
    }
  };

  const handleVideoEnd = () => {
    triggerEnd();
  };

  const handleVideoError = () => {
    triggerEnd();
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
        playsInline
        onCanPlay={handleCanPlay}
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        className="object-contain w-screen h-screen"
      />
    </motion.div>
  );
};

export default PageLoader;
