"use client";

import React, { useState } from "react";
import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/lib/scripts/shared/LeftNavigationBarAnimations";
import CustomSidebarNavigationLink from "../custom/CustomSidebarNavigationLink";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function LeftNavigationBar() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
            setSelectedIndicator(pathname);
          }}
          className={leftNavigationBarStyles.nav}
        >
          <div className={leftNavigationBarStyles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <CustomSidebarNavigationLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></CustomSidebarNavigationLink>
            );
          })}
        </div>
        <div className={leftNavigationBarStyles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
