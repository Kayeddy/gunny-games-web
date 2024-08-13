import leftNavigationBarStyles from "@/lib/styles/shared/leftNavigationBar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@/lib/scripts/shared/LeftNavigationBarAnimations";

interface ComponentProps {
  data: any;
  isActive: boolean;
  setSelectedIndicator: (link: string) => void;
}

export default function CustomSidebarNavigationLink({
  data,
  isActive,
  setSelectedIndicator,
}: ComponentProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={leftNavigationBarStyles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
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
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
