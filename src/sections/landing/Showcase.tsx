"use client";

import CustomAnimatedBlockCard from "@/components/custom/CustomAnimatedBlocksCard";
import { CustomInfiniteMovingCards } from "@/components/custom/CustomInfiniteMovingCards";
import { CustomWobbleCard } from "@/components/custom/CustomWobbleCard";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

import Image from "next/image";

const poweredBy = [
  <Image
    src="/assets/other/algorand-logo-white-CMYK.png"
    alt=""
    layout="fill"
    className="object-contain"
  />,
  <Image
    src="/assets/other/Borderless-Cube-Logo.png"
    alt=""
    layout="fill"
    className="object-contain"
  />,
  <Image
    src="/assets/other/awsLogo.webp"
    alt=""
    width={100}
    height={100}
    className="object-scale-down"
  />,
];

const testimonials = [
  {
    title: "Fuzzy - Default",
    image: (
      <Image
        src="/assets/skins/Fuzzy Default_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Fuzzy - Coming soon",
    image: (
      <Image
        src="/assets/skins/Cartas Skins Fondo--Recuperado_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Rockie - Default",
    image: (
      <Image
        src="/assets/skins/Rockie Default_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Rockie - Sage Rune",
    image: (
      <Image
        src="/assets/skins/Sage Rune rockie_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Rockie - Nightstone",
    image: (
      <Image
        src="/assets/skins/Nightstone Rockie_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Rockie - Mystic Grayward",
    image: (
      <Image
        src="/assets/skins/Mystic Grayward Rockie_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Taily - Default",
    image: (
      <Image
        src="/assets/skins/Taily Default_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Taily - Sweet Aurora",
    image: (
      <Image
        src="/assets/skins/Taily Sweet Aurora_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Taily - Abyssal Obsidian",
    image: (
      <Image
        src="/assets/skins/Taily Abyssal Obsidian_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Volty - Default",
    image: (
      <Image
        src="/assets/skins/Cartas Skins Fondo 12-_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Volty - Sapphire Blitz",
    image: (
      <Image
        src="/assets/skins/Cartas Skins Fondo- 8_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Volty - Blizzard Bolt",
    image: (
      <Image
        src="/assets/skins/Cartas Skins Fondo 7-_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Blaze - Default",
    image: (
      <Image
        src="/assets/skins/Blaze Default_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Blaze - Azurflare",
    image: (
      <Image
        src="/assets/skins/Azureflare Blaze_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Blaze - Cherry",
    image: (
      <Image
        src="/assets/skins/Cherry Blaze_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
  {
    title: "Blaze - Coming soon",
    image: (
      <Image
        src="/assets/skins/Cartas Skins Fondo-_100.png"
        width={100}
        height={100}
        alt=""
        className="object-cover"
      />
    ),
  },
];

export default function Showcase({
  scrollYProgress,
}: {
  scrollYProgress: any;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      className="flex flex-col gap-8 items-center justify-center min-h-fit lg:h-screen p-4  bg-[#1D1B26] sticky top-0"
      style={{ scale, rotate }}
    >
      <section className="flex flex-col items-center justify-center gap-4">
        <h2>Powered by</h2>
        <div className="flex flex-row items-center justify-center gap-8">
          {poweredBy.map((item, index) => (
            <span
              className="w-[200px] h-[100px] flex items-center justify-center object-contain relative animate-pulse"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-3 max-w-7xl">
        <CustomWobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-insomnia">
              Unleash the Elements
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Collect unique elemental pets and unleash their extraordinary
              abilities!
            </p>
          </div>
          <div className="absolute object-contain -right-4 grayscale filter -bottom-10 rounded-2xl">
            <CustomAnimatedBlockCard />
          </div>
        </CustomWobbleCard>
        <CustomWobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-insomnia">
            Battle Buddies
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Compete online with your favorite companion!
          </p>
          <div className="flex flex-row items-center justify-around">
            <span className="">
              <Image
                src="/assets/chibis/Bolty Painting_100.png"
                alt=""
                width={100}
                height={100}
                className="object-contain"
              />
            </span>
            <span className="">
              <Image
                src="/assets/chibis/Taily Chibi Jumping_100.png"
                alt=""
                width={100}
                height={100}
                className="object-contain"
              />
            </span>
          </div>
        </CustomWobbleCard>

        <CustomWobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-insomnia">
            Pimp My Pet
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Customize your pets with unique skins!
          </p>
          <div className="h-[10rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
            <CustomInfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </CustomWobbleCard>
        <CustomWobbleCard containerClassName="col-span-1 lg:col-span-2 h-full  bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-insomnia">
              Champion’s Ascent
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Ascend to greatness atop our leaderboard and claim legendary
              prizes as the ultimate champion!
            </p>
            <Image
              src="/assets/icons/icongunny_100.webp"
              alt=""
              width={100}
              height={100}
              className="object-cover mx-auto mt-4"
            />
          </div>
          <Image
            src="/assets/other/valorantScoreboard.png"
            width={550}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-cover rounded-2xl"
          />
        </CustomWobbleCard>
      </section>
    </motion.div>
  );
}
