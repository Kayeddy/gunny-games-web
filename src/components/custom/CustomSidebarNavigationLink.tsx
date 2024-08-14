import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "@/lib/scripts/shared/LeftNavigationBarAnimations";
import { MouseEvent } from "react";

interface ComponentProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  currentSection: string;
  setSelectedIndicator: (link: string) => void;
}

export default function CustomSidebarNavigationLink({
  data,
  currentSection,
  setSelectedIndicator,
}: ComponentProps) {
  const { title, href, index } = data;

  const isActive = currentSection === href.replace("#", "");

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Scroll to the section
    window.history.pushState(null, "", href);
    setSelectedIndicator(href.replace("#", ""));

    // Manually trigger a scroll to the section after URL update
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={leftNavigationBarStyles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={leftNavigationBarStyles.indicator}
      ></motion.div>
      <a href={href} onClick={handleScroll}>
        {title}
      </a>
    </motion.div>
  );
}
