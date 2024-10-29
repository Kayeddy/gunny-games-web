"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/shared/PageLoader";

const ClientLoaderWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    // Disable scrolling and reset scroll position at the start
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "instant" });

    const loadImages = () => {
      return new Promise<void>((resolve) => {
        const images = Array.from(document.querySelectorAll("img"));
        let loadedImages = 0;

        images.forEach((img) => {
          if (img.complete) {
            loadedImages++;
          } else {
            img.onload = () => {
              loadedImages++;
              if (loadedImages === images.length) resolve();
            };
            img.onerror = () => {
              loadedImages++;
              if (loadedImages === images.length) resolve();
            };
          }
        });

        if (images.length === 0) resolve();
      });
    };

    const loadFirstVideo = () => {
      return new Promise<void>((resolve) => {
        const firstVideo = document.querySelector("video");

        if (firstVideo) {
          if (firstVideo.readyState >= 4) {
            resolve(); // First video is ready
          } else {
            firstVideo.oncanplaythrough = () => resolve();
            firstVideo.onerror = () => resolve(); // Avoid getting stuck
          }
        } else {
          resolve(); // No video found
        }
      });
    };

    // Wait for images and video to load
    Promise.all([loadImages(), loadFirstVideo()]).then(() => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = ""; // Re-enable scrolling
      }, 2000); // Delay for smooth transition
    });

    // Fallback to avoid indefinite loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 8000); // 8-second fallback

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = ""; // Re-enable scrolling on cleanup
    };
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const showLoader = isLoading || !videoFinished;

  return (
    <AnimatePresence>
      {showLoader && (
        <PageLoader onVideoEnd={handleVideoEnd} isParentLoaded={!isLoading} />
      )}
    </AnimatePresence>
  );
};

export default ClientLoaderWrapper;
