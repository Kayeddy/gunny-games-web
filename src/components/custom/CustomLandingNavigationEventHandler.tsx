"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const CustomLandingNavigationEventHandler = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const updateURL = (sectionId: string) => {
      const newHash = `#${sectionId}`;
      if (window.location.hash !== newHash) {
        window.history.pushState(null, "", newHash);
      }
    };

    const handleScrollToSection = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          immediate: false,
        });
        updateURL(sectionId);
      }
    };

    const handleManualScroll = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          updateURL(section.id);
          break;
        }
      }
    };

    window.addEventListener(
      "scrollToSection",
      handleScrollToSection as EventListener
    );
    window.addEventListener("scroll", handleManualScroll);

    return () => {
      window.removeEventListener(
        "scrollToSection",
        handleScrollToSection as EventListener
      );
      window.removeEventListener("scroll", handleManualScroll);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default CustomLandingNavigationEventHandler;
