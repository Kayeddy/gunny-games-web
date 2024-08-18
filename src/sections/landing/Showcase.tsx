"use client";

import CustomAnimatedBlockCard from "@/components/custom/CustomAnimatedBlocksCard";
import { CustomInfiniteMovingCards } from "@/components/custom/CustomInfiniteMovingCards";
import { CustomWobbleCard } from "@/components/custom/CustomWobbleCard";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const poweredBy = [
  <Image
    src="/assets/other/algorand-logo-white-CMYK.webp"
    alt="Algorand logo"
    fill
    className="object-contain"
  />,
  <Image
    src="/assets/other/Borderless-Cube-Logo.webp"
    alt="Borderless Capital logo"
    fill
    className="object-contain"
  />,
  <Image
    src="/assets/other/awsLogo.webp"
    alt="AWS logo"
    fill
    className="object-contain lg:max-w-[100px] lg:max-h-[100px] max-w-[50px] max-h-[50px] my-auto ml-3"
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
        alt="Fuzzy - Default skin"
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
        alt="Fuzzy - Coming soon skin"
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
        alt="Rockie - Default skin"
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
        alt="Rockie - Sage Rune skin"
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
        alt="Rockie - Nightstone skin"
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
        alt="Rockie - Mystic Grayward skin"
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
        alt="Taily - Default skin"
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
        alt="Taily - Sweet Aurora skin"
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
        alt="Taily - Abyssal Obsidian skin"
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
        alt="Volty - Default skin"
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
        alt="Volty - Sapphire Blitz skin"
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
        alt="Volty - Blizzard Bolt skin"
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
        alt="Blaze - Default skin"
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
        alt="Blaze - Azurflare skin"
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
        alt="Blaze - Cherry skin"
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
        alt="Blaze - Coming soon skin"
        className="object-cover"
      />
    ),
  },
];

export default function Showcase() {
  return (
    <motion.section
      className="flex flex-col gap-8 items-center justify-center min-h-screen h-fit p-4 lg:py-4 py-8 bg-[#1D1B26]"
      // style={{ scale, rotate }}
    >
      <section className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-slate-200 lg:text-[20px] text-[30px]">
          Powered by
        </h2>
        <div className="flex flex-row items-center justify-center gap-8">
          {poweredBy.map((item, index) => (
            <span
              className="lg:w-[200px] lg:h-[100px] w-[80px] h-[80px] flex items-center justify-center object-contain relative animate-pulse"
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
          <div className="absolute object-contain -right-7 lg:-right-4 filter -bottom-10 rounded-2xl">
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
                src="/assets/chibis/Bolty Painting_100.webp"
                alt="Bolty Painting"
                width={100}
                height={100}
                className="object-contain"
              />
            </span>
            <span className="">
              <Image
                src="/assets/chibis/Taily Chibi Jumping_100.webp"
                alt="Taily Chibi Jumping"
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
              alt="Gunny icon"
              width={100}
              height={100}
              className="object-cover mx-auto mt-4"
            />
          </div>
          <Image
            src="/assets/other/valorantScoreboard.png"
            width={550}
            height={500}
            alt="Valorant scoreboard"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain lg:object-cover rounded-2xl"
          />
        </CustomWobbleCard>
      </section>
    </motion.section>
  );
}
