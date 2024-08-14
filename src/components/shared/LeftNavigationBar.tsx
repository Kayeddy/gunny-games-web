"use client";

import React, { useState } from "react";
import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "@/lib/scripts/shared/LeftNavigationBarAnimations";

const navItems = [
  {
    title: "Home",
    href: "#home",
    sectionId: "home",
  },
  {
    title: "Showcase",
    href: "#showcase",
    sectionId: "showcase",
  },
  {
    title: "Characters",
    href: "#characters",
    sectionId: "characters",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
    sectionId: "roadmap",
  },
  {
    title: "Ranking",
    href: "#ranking",
    sectionId: "ranking",
  },
];

export default function LeftNavigationBar({
  currentSection,
}: {
  currentSection: string;
}) {
  const [selectedIndicator, setSelectedIndicator] = useState(currentSection);

  const handleNavItemClick = (sectionId: string) => {
    const event = new CustomEvent("scrollToSection", {
      detail: { sectionId },
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={leftNavigationBarStyles.menu}
    >
      <div className={leftNavigationBarStyles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(window.location.hash.replace("#", ""));
          }}
          className={leftNavigationBarStyles.nav}
        >
          <div className={leftNavigationBarStyles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <motion.div
              key={index}
              className={leftNavigationBarStyles.link}
              onMouseEnter={() => setSelectedIndicator(data.sectionId)}
              custom={index}
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => handleNavItemClick(data.sectionId)}
            >
              <a>{data.title}</a>
            </motion.div>
          ))}
        </div>
        <div className={leftNavigationBarStyles.footer}>
          <a href="/#">Awwwards</a>
          <a href="/#">Instagram</a>
          <a href="/#">Dribble</a>
          <a href="/#">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
