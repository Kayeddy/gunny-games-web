"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/shared/PageLoader";

const ClientLoaderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    // Handle image loading
    const loadImages = () => {
      return new Promise<void>((resolve) => {
        const images = Array.from(document.images);
        let loadedImages = 0;

        images.forEach((img) => {
          if (img.complete) {
            loadedImages++;
          } else {
            img.onload = () => {
              loadedImages++;
              if (loadedImages === images.length) {
                resolve();
              }
            };
            img.onerror = () => {
              loadedImages++;
              if (loadedImages === images.length) {
                resolve();
              }
            };
          }
        });

        if (images.length === 0) {
          resolve();
        }
      });
    };

    // Handle first video loading
    const loadFirstVideo = () => {
      return new Promise<void>((resolve) => {
        const firstVideo = document.querySelector("video");

        if (firstVideo) {
          if (firstVideo.readyState >= 4) {
            // First video is already ready
            resolve();
          } else {
            firstVideo.oncanplaythrough = () => {
              resolve();
            };
            firstVideo.onerror = () => {
              resolve(); // Resolve on error to avoid getting stuck
            };
          }
        } else {
          resolve(); // Resolve if no video is found
        }
      });
    };

    Promise.all([loadImages(), loadFirstVideo()]).then(() => {
      setIsLoading(false);
    });

    // Fallback: ensure loader doesn't get stuck indefinitely
    const timeout = setTimeout(() => setIsLoading(false), 8000); // 8 seconds fallback

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const showLoader = isLoading || !videoFinished;

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <PageLoader onVideoEnd={handleVideoEnd} isParentLoaded={!isLoading} />
        )}
      </AnimatePresence>
      {!showLoader && children}
    </>
  );
};

export default ClientLoaderWrapper;
