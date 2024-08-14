"use client";

import CustomLandingMediaBox from "@/components/custom/CustomLandingMediaBox";
import { useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

const LeftInformationBar = () => {
  return (
    <div className="relative flex flex-col items-start justify-around h-full gap-[300px] bg-transparent">
      <span className="w-[300px] h-[100px] relative flex items-center justify-start">
        <Image
          layout="fill"
          src="/assets/icons/logo1024_100.webp"
          alt=""
          className="object-fill -rotate-90 -translate-x-[40px] w-full h-full mt-32"
        />
      </span>
      <span className="max-w-[250px] overflow-hidden">
        <h1 className="text-[50px]">Follow us</h1>
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
      className="w-full h-screen p-4 overflow-x-hidden bg-[#1D1B26] sticky top-0"
      style={{ scale, rotate }}
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
