"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/shared/PageLoader";

const ClientLoaderWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle when the video ends
  const handleVideoEnd = () => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 1000); // 1-second delay after the video ends
  };

  useEffect(() => {
    // Disable scrolling initially
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <PageLoader onVideoEnd={handleVideoEnd} isParentLoaded={!isLoading} />
      )}
    </AnimatePresence>
  );
};

export default ClientLoaderWrapper;
