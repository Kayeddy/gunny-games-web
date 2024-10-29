"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import CustomLandingMediaBox from "@/components/custom/CustomLandingMediaBox";

const variants = {
  container: {
    show: {
      transition: {
        staggerChildren: 0.3, // Controls the delay between the animation of each child
      },
    },
  },
  itemFadeInBottom: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  itemFadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  itemFadeInRight: {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  itemFadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  },
};

const LeftInformationBar = () => {
  return (
    <motion.div
      className="relative flex-col items-start justify-around h-max min-h-fit gap-[300px] bg-transparent hidden lg:flex"
      variants={variants.container}
      initial="hidden"
      animate="show"
    >
      <motion.span
        className="w-[300px] h-[100px] relative flex items-center justify-start"
        variants={variants.itemFadeInBottom}
      >
        <Image
          fill
          src="/assets/icons/logo1024_100.webp"
          alt="Gunny Rush logo rotated 90 degrees"
          className="object-fill -rotate-90 -translate-x-[40px] w-full h-full mt-32"
        />
        {/* To-Do: replace Gunny logo for the Gunny Rush Icon */}
      </motion.span>
      <motion.span
        className="max-w-[250px] overflow-hidden flex flex-col gap-2"
        variants={variants.container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-3xl leading-relaxed xl:leading-relaxed xl:text-5xl bg-fuzzy-title bg-clip-text"
          variants={variants.itemFadeInLeft}
        >
          Follow us
        </motion.h1>
        <motion.span
          className="flex flex-row gap-4 text-[20px]"
          variants={variants.container}
        >
          <motion.div>
            <Link
              href="https://discord.com/invite/SX6bkkHcAD"
              rel="noreferrer"
              target="_blank"
            >
              <FaDiscord />
            </Link>
          </motion.div>
          <motion.div>
            <Link
              href="https://x.com/Gunny_es"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </motion.div>
          <motion.div>
            <Link
              href="https://www.instagram.com/gunnygame/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div>
            <Link
              href="https://www.linkedin.com/company/gunny-games-studio-llc/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </motion.div>
        </motion.span>
        <motion.p
          variants={variants.itemFadeIn}
          className="text-base leading-relaxed text-white font-sen"//To-Do: add telegram and brand kit link
        >
          Join the Gunny Rush community and be part of an epic experience where
          fun and rewards go hand in hand. The world of Gunny Rush is waiting
          for you to become the best and push your skills to the limit!
        </motion.p>
      </motion.span>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <motion.section
      className="w-full min-h-max h-fit lg:h-screen lg:p-4 overflow-x-hidden bg-[#1D1B26]"
      id="home"
    >
      <div className="relative flex flex-row items-center justify-around w-screen h-full gap-12">
        <LeftInformationBar />
        <CustomLandingMediaBox
          videoSrcs={[
            "/assets/other/fuzzy-render.mp4",
            "/assets/other/rookie-render.mp4",
            "/assets/other/volty-render.mp4",
          ]}
        />
      </div>
    </motion.section>
  );
}
