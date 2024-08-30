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
    const handlePageLoad = () => {
      // All images are fully loaded
      setIsLoading(false);
    };

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

    loadImages().then(handlePageLoad);

    // Fallback: ensure loader doesn't get stuck indefinitely
    const timeout = setTimeout(handlePageLoad, 5000); // 5 seconds fallback

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
