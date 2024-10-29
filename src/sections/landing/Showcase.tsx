"use client";

import CustomAnimatedBlockCard from "@/components/custom/CustomAnimatedBlocksCard";
import { CustomInfiniteMovingCards } from "@/components/custom/CustomInfiniteMovingCards";
import { CustomWobbleCard, Noise } from "@/components/custom/CustomWobbleCard";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsCollisions";

// TypeScript interfaces for the data
interface ShowcaseItem {
  image: JSX.Element;
  link?: string;
}

interface CharacterItem {
  title: string;
  image: JSX.Element;
}

interface ShowcaseProps {
  scrollYProgress: MotionValue<number>;
}

// Sample data
const poweredBy: ShowcaseItem[] = [
  {
    image: (
      <Image
        src="/assets/other/Unity-Logo-White.webp"
        alt="Unity logo"
        fill
        className="object-contain"
      />
    ),
    link: "https://unity.com/",
  },
  {
    image: (
      <Image
        src="/assets/other/awsLogo.webp"
        alt="AWS logo"
        fill
        className="max-h-[60px] max-w-[60px] object-contain lg:max-h-[100px] lg:max-w-[100px]"
      />
    ),
    link: "https://aws.amazon.com/",
  },
  {
    image: (
      <Image
        src="/assets/other/algorand-logo-teal-RGB.svg"
        alt="Algorand logo"
        fill
        className="object-contain"
      />
    ),
    link: "https://www.algorand.co/",
  },
  {
    image: (
      <Image
        src="/assets/other/nodely.webp"
        alt="Nodely logo"
        fill
        className="max-h-[60px] max-w-[60px] object-contain lg:max-h-[100px] lg:max-w-[100px]"
      />
    ),
    link: "https://nodely.io/",
  },
  {
    image: (
      <Image
        src="/assets/other/nfd.avif"
        alt="NFD logo"
        fill
        className="max-h-[60px] max-w-[60px] object-contain lg:max-h-[100px] lg:max-w-[100px]"
      />
    ),
    link: "https://app.nf.domains/",
  },
  {
    image: (
      <Image
        src="/assets/other/orangeicon.svg"
        alt="Oranges ($ORA) logo"
        fill
        className="max-h-[60px] max-w-[60px] object-contain lg:max-h-[100px] lg:max-w-[100px]"
      />
    ),
    link: "https://oranges.meme/",
  },
];

const sponsors: ShowcaseItem[] = [
  {
    image: (
      <Image
        src="/assets/other/algorand-foundation-logo.webp"
        alt="Algorand foundation logo"
        fill
        className="object-contain"
      />
    ),
    link: "https://algorand.co/",
  },
  {
    image: (
      <Image
        src="/assets/other/Borderless-Cube-Logo.webp"
        alt="Borderless Capital logo"
        fill
        className="object-contain"
      />
    ),
    link: "https://www.borderlesscapital.io/",
  },
  {
    image: (
      <Image
        src="/assets/other/refi_logo.png"
        alt="Borderless Capital logo"
        fill
        className="object-contain"
      />
    ),
    link: "https://www.refimedellin.org/en",
  },
];

const characters: CharacterItem[] = [
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

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Showcase() {
  return (
    <motion.div
      className="flex h-fit min-h-screen flex-col items-center justify-center gap-8 bg-[#1D1B26] p-4 py-8 lg:py-4"
      id="showcase"
    >
      {/* Powered By & Sponsors Section */}
      <motion.section
        className="flex w-full flex-col items-center justify-center gap-14 lg:flex-row lg:gap-8"
        variants={itemVariants}
      >
        {/* Powered By Content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[30px] text-slate-200 lg:text-[20px]">
            Made with 💖 and...
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            {poweredBy.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex h-[80px] w-[80px] items-center justify-center object-contain lg:h-[100px] lg:w-[200px]"
              >
                <Link href={item.link!} target="_blank" rel="noreferrer">
                  {item.image}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Sponsors Content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[30px] text-slate-200 lg:text-[20px]">
            Trusted by:
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            {sponsors.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex h-[80px] w-[80px] items-center justify-center object-contain lg:h-[100px] lg:w-[200px]"
              >
                <Link href={item.link!} target="_blank" rel="noreferrer">
                  {item.image}
                </Link>
              </motion.div>
            ))}

            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-[0.5px] border-white p-8 lg:p-12">
              <Noise />
              <p className="font-insomnia text-base text-white">xGov</p>
              {/* //To-Do: add link to xGov */}
            </span>
          </div>
        </div>
      </motion.section>

      {/* Showcase Cards Section */}
      <motion.section
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3"
        variants={itemVariants}
      >
        <CustomWobbleCard containerClassName="col-span-1 h-full min-h-[500px] bg-pink-800 lg:col-span-2 lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-balance text-left font-insomnia text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Unleash the Elements
            </h2>
            {/* To-Do: link to gacha */}
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Collect unique elemental pets and unleash their extraordinary
              abilities!
            </p>
          </div>
          <div className="absolute -bottom-10 -right-7 rounded-2xl object-contain filter lg:-right-4">
            <CustomAnimatedBlockCard />
          </div>
        </CustomWobbleCard>
        <CustomWobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-balance text-left font-insomnia text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Battle Buddies
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
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
          <div className="flex flex-row items-center justify-center gap-4">
            <h2 className="max-w-80 text-balance text-left font-insomnia text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Check it out
            </h2>
            {/* To-Do: add link to the video on youtube */}
            <Image
              src="https://em-content.zobj.net/source/microsoft-teams/363/smiling-face-with-sunglasses_1f60e.png"
              alt="glasses-emoji"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          {/* <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Customize your pets with unique skins!
          </p>
          <div className="relative flex h-[10rem] flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased">
            <CustomInfiniteMovingCards
              items={characters}
              direction="right"
              speed="slow"
            />
          </div> */}
          <video
            src="/assets/other/gunny_rush_gameplay.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="mt-4 w-full"
          />
        </CustomWobbleCard>
        <CustomWobbleCard containerClassName="col-span-1 h-full min-h-[500px] bg-blue-900 lg:col-span-2 lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left font-insomnia text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              Champion’s Ascent
            </h2>
            {/* To-Do: add our leaderboar img and explain how to get NFD and why with the link to mint subdomain */}
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Ascend to greatness atop our leaderboard and claim legendary
              prizes as the ultimate champion!
            </p>
            <Image
              src="/assets/icons/icongunny_100.webp"
              alt="Gunny icon"
              width={100}
              height={100}
              className="mx-auto mt-4 object-cover"
            />
          </div>
          <Image
            src="/assets/other/valorantScoreboard.png"
            width={550}
            height={500}
            alt="Valorant scoreboard"
            className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%] lg:object-cover"
          />
        </CustomWobbleCard>
      </motion.section>
    </motion.div>
  );
}
