"use client";

import React, { useState } from "react";
import headerStyles from "@/lib/styles/shared/header.module.scss";
import { AnimatePresence } from "framer-motion";
import LeftNavigationBar from "./LeftNavigationBar";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={headerStyles.button}
      >
        <div
          className={`${headerStyles.burger} ${
            isActive ? headerStyles.burgerActive : ""
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <LeftNavigationBar
            currentSection={window.location.hash.replace("#", "")}
            onClose={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
