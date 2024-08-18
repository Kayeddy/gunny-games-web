"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const enableLenis = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

export const disableLenis = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

const CustomLandingNavigationEventHandler = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to the top of the page (first section) on load
    const scrollToTop = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        lenisInstance?.scrollTo(homeSection, {
          offset: 0,
          immediate: true, // Ensure immediate scrolling without delay
        });
      }
    };

    // Scroll to the first section when the page loads
    scrollToTop();

    const handleScrollToSection = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        lenisInstance?.scrollTo(targetElement, {
          offset: 0,
          immediate: false,
        });
      }
    };

    window.addEventListener(
      "scrollToSection",
      handleScrollToSection as EventListener
    );

    return () => {
      window.removeEventListener(
        "scrollToSection",
        handleScrollToSection as EventListener
      );
      lenisInstance?.destroy();
    };
  }, []);

  return null;
};

export default CustomLandingNavigationEventHandler;
