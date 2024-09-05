"use client";

import React, { useState, useEffect } from "react";
import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "@/lib/scripts/shared/LeftNavigationBarAnimations";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    sectionId: "home",
  },
  {
    title: "Showcase",
    sectionId: "showcase",
  },
  {
    title: "Characters",
    sectionId: "characters",
  },
  {
    title: "Roadmap",
    sectionId: "roadmap",
  },
  {
    title: "Ranking",
    sectionId: "ranking",
  },
  {
    title: "Milestones",
    sectionId: "milestones",
  },
];

export default function LeftNavigationBar({
  currentSection,
  onClose,
}: {
  currentSection?: string;
  onClose: () => void;
}) {
  const [selectedIndicator, setSelectedIndicator] = useState(currentSection);

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
          className={`${leftNavigationBarStyles.nav} gap-6 lg:gap-[40px] mt-[30px] lg:mt-[80px]`}
        >
          <Image
            src="/assets/icons/logo1024_100.webp"
            alt="Gunny logo"
            width={200}
            height={100}
            className="object-contain max-w-lg lg:hidden"
          />
          <div className={leftNavigationBarStyles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-2 text-xl hover:cursor-pointer ${
                selectedIndicator === data.sectionId
                  ? leftNavigationBarStyles.active
                  : ""
              }`}
              custom={index}
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {/* Use ScrollLink for smooth scrolling */}
              <ScrollLink
                to={data.sectionId}
                smooth={true}
                duration={500}
                onClick={() => onClose()} // Close the menu when a link is clicked
              >
                {data.title}
              </ScrollLink>
            </motion.div>
          ))}
        </div>
        <div className={`${leftNavigationBarStyles.footer} mt-[20px] lg:mt-0`}>
          <a
            href="https://discord.com/invite/SX6bkkHcAD"
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
          >
            <FaDiscord aria-label="Discord icon" />
            <p>Join our Discord</p>
          </a>
          <a
            href="https://x.com/Gunny_es"
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
          >
            <FaTwitter aria-label="Twitter icon" />
            <p>Follow us on Twitter</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
