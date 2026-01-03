"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/shared/PageLoader";

const ClientLoaderWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const hasFinishedRef = useRef(false);

  // Function to finish loading - ensures it only runs once
  const finishLoading = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsLoading(false);
    document.body.style.overflow = "";
  }, []);

  // Function to handle when the video ends
  const handleVideoEnd = useCallback(() => {
    setTimeout(() => {
      finishLoading();
    }, 1000); // 1-second delay after the video ends
  }, [finishLoading]);

  useEffect(() => {
    // Disable scrolling initially
    document.body.style.overflow = "hidden";

    // Fallback timeout in case video fails to load/play (e.g., on some mobile browsers)
    // Reduced to 5 seconds for better mobile UX
    const fallbackTimeout = setTimeout(() => {
      finishLoading();
    }, 5000);

    // Additional safety: ensure loading completes on window load
    const handleWindowLoad = () => {
      // Give video a chance to play, but ensure we don't wait forever
      setTimeout(() => {
        finishLoading();
      }, 3000);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      clearTimeout(fallbackTimeout);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <PageLoader onVideoEnd={handleVideoEnd} isParentLoaded={!isLoading} />
      )}
    </AnimatePresence>
  );
};

export default ClientLoaderWrapper;
