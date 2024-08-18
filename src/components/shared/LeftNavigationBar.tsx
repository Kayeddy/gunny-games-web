"use client";

import React, { useState, useEffect } from "react";
import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "@/lib/scripts/shared/LeftNavigationBarAnimations";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Image from "next/image";

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
  onClose,
}: {
  currentSection?: string;
  onClose: () => void;
}) {
  const [selectedIndicator, setSelectedIndicator] = useState(currentSection);

  const handleNavItemClick = (sectionId: string) => {
    const event = new CustomEvent("scrollToSection", {
      detail: { sectionId },
    });
    window.dispatchEvent(event);
    console.log(sectionId);
    onClose(); // Close the menu after clicking
  };

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedIndicator(window.location.hash.replace("#", ""));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
          className={`${leftNavigationBarStyles.nav} mt-[40px] lg:mt-[80px]`}
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
              className={`flex flex-col gap-2 ${
                selectedIndicator === data.sectionId
                  ? leftNavigationBarStyles.active // Apply active class when selected
                  : ""
              }`}
              onMouseEnter={() => setSelectedIndicator(data.sectionId)}
              custom={index}
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => handleNavItemClick(data.sectionId)}
            >
              <a href={data.href} className="text-[25px] lg:text-[40px]">
                {data.title}
              </a>
            </motion.div>
          ))}
        </div>
        <div className={`${leftNavigationBarStyles.footer} mt-[20px] lg:mt-0`}>
          <Link
            href="https://discord.com/invite/SX6bkkHcAD"
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
          >
            <FaDiscord aria-label="Discord icon" />
            <p>Join our Discord</p>
          </Link>
          <Link
            href="https://x.com/Gunny_es"
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
          >
            <FaTwitter aria-label="Twitter icon" />
            <p>Follow us on Twitter</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
