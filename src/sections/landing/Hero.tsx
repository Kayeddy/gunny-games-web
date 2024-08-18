"use client";

import CustomLandingMediaBox from "@/components/custom/CustomLandingMediaBox";
import { useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const LeftInformationBar = () => {
  return (
    <div className="relative flex-col items-start justify-around h-full gap-[300px] bg-transparent hidden lg:flex">
      <span className="w-[300px] h-[100px] relative flex items-center justify-start">
        <Image
          fill
          src="/assets/icons/logo1024_100.webp"
          alt="Gunny Rush logo rotated 90 degrees"
          className="object-fill -rotate-90 -translate-x-[40px] w-full h-full mt-32"
        />
      </span>
      <span className="max-w-[250px] overflow-hidden flex flex-col gap-2">
        <h1 className="text-[50px] bg-fuzzy-title bg-clip-text">Follow us</h1>
        <span className="flex flex-row gap-4 text-[20px]">
          <Link
            href="https://discord.com/invite/SX6bkkHcAD"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord />
          </Link>
          <Link href="https://x.com/Gunny_es" rel="noreferrer" target="_blank">
            <FaTwitter />
          </Link>
        </span>
        <p>
          Join the Gunny Rush community and be part of an epic experience where
          fun and rewards go hand in hand. The world of Gunny Rush is waiting
          for you to become the best and push your skills to the limit!
        </p>
      </span>
    </div>
  );
};

export default function Hero({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      className="w-full h-screen lg:p-4 overflow-x-hidden bg-[#1D1B26] dark"
      // style={{ scale, rotate }}
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
