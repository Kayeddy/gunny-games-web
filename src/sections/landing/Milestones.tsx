import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Cover } from "@/components/custom/CustomTextAnimatedCover";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import CustomMilestoneSectionSeparator from "@/components/custom/CustomMilestoneSectionSeparator";
import { Separator } from "@radix-ui/react-separator";
import algosdk from "algosdk";
import CustomMilestoneCard from "@/components/custom/CustomMilestoneCard";
import Image from "next/image";
import { PiGameControllerBold } from "react-icons/pi";

// Type definition for element resize function
const fitElementToParent = (el: HTMLElement | null, padding: number = 0) => {
  if (!el) return;

  let timeout: NodeJS.Timeout | null = null;

  const resize = () => {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });

    const parentEl = el.parentElement;
    const elOffsetWidth = el.offsetWidth - padding;
    const parentOffsetWidth = parentEl?.offsetWidth || 0;
    const ratio = parentOffsetWidth / elOffsetWidth;

    timeout = setTimeout(() => {
      anime.set(el, { scale: ratio });
    }, 10);
  };

  resize();
  window.addEventListener("resize", resize);

  return () => window.removeEventListener("resize", resize);
};

const sphereAnimation = (
  sphereEl: HTMLElement | null,
  textBlockEl: HTMLElement | null
) => {
  if (!sphereEl || !textBlockEl) return;

  const spherePathEls = sphereEl.querySelectorAll("path");
  const pathLength = spherePathEls.length;
  let animations: anime.AnimeInstance[] = [];

  fitElementToParent(sphereEl);

  const breathAnimation = anime({
    begin: () => {
      animations = Array.from(spherePathEls).map((path, i) =>
        anime({
          targets: path,
          stroke: {
            value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"],
            duration: 500,
          },
          translateX: [2, -4],
          translateY: [2, -4],
          easing: "easeOutQuad",
          autoplay: false,
        })
      );
    },
    update: (ins) => {
      animations.forEach((animation, i) => {
        const percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false,
  });

  const introAnimation = anime.timeline({ autoplay: false }).add(
    {
      targets: spherePathEls,
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 3900,
        easing: "easeInOutCirc",
        delay: anime.stagger(190, { direction: "reverse" }),
      },
      duration: 2000,
      delay: anime.stagger(60, { direction: "reverse" }),
      easing: "linear",
    },
    0
  );

  const shadowAnimation = anime({
    targets: "#sphereGradient",
    x1: "25%",
    x2: "25%",
    y1: "0%",
    y2: "75%",
    duration: 30000,
    easing: "easeOutQuint",
    autoplay: false,
  });

  // Text animation for the specific block
  anime({
    targets: textBlockEl.querySelectorAll("p"),
    translateX: [
      { value: -5, duration: 1000 },
      { value: 5, duration: 1000 },
    ],
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });

  // Start the sphere animations
  introAnimation.play();
  breathAnimation.play();
  shadowAnimation.play();
};

const milestoneData = [
  {
    players: 150,
    reward: "$200 USD",
    cardBorderBackground: "/assets/svg/card-1.svg",
    fulfilled: false,
  },
  {
    players: 300,
    reward: "$400 USD",
    cardBorderBackground: "/assets/svg/card-2.svg",
    fulfilled: false,
  },
  {
    players: 1000,
    reward: "$1,200 USD",
    cardBorderBackground: "/assets/svg/card-3.svg",
    fulfilled: false,
  },
  {
    players: 2000,
    reward: "?",
    cardBorderBackground: "/assets/svg/card-4.svg",
    fulfilled: false,
  },
  {
    players: 5000,
    reward: "?",
    cardBorderBackground: "/assets/svg/card-5.svg",
    fulfilled: false,
  },
  {
    players: 10000,
    reward: "?",
    cardBorderBackground: "/assets/svg/card-6.svg",
    fulfilled: false,
  },
];

export default function Milestones() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(0);
  const [milestones, setMilestones] = useState(milestoneData);

  useEffect(() => {
    // Set up the Algorand Indexer client
    const server = "https://mainnet-idx.algonode.cloud";
    const indexerClient = new algosdk.Indexer("", server, 443);
    const assetId = 2247034585;

    // Fetch number of players and update state
    const fetchNumberOfPlayers = async () => {
      const numPlayers = await getNumberOfPlayers(indexerClient, assetId);
      setNumberOfPlayers(numPlayers);
    };

    fetchNumberOfPlayers();
    sphereAnimation(sphereRef.current, textBlockRef.current);
  }, []);
  useEffect(() => {
    sphereAnimation(sphereRef.current, textBlockRef.current);
  }, []);

  // Dynamic logic to update milestones when players reach objectives
  useEffect(() => {
    const updatedMilestones = milestoneData.map((milestone) => {
      if (numberOfPlayers >= milestone.players && !milestone.fulfilled) {
        return { ...milestone, fulfilled: true }; // Set fulfilled to true if reached
      }
      return milestone;
    });
    setMilestones(updatedMilestones);
  }, [numberOfPlayers]);

  return (
    <div
      className="relative flex h-screen min-h-fit w-screen flex-col items-center justify-between gap-8 overflow-hidden p-4 lg:h-screen lg:p-8"
      id="milestones"
    >
      <ShootingStars />
      <StarsBackground />
      <div className="relative flex flex-col items-center justify-center lg:flex-row">
        <section className="relative flex h-full w-[45%] flex-col items-center justify-start lg:mt-[200px]">
          <Cover>
            <h1 className="relative z-20 mt-6 w-full bg-blaze-title bg-clip-text py-6 text-center font-valorant text-xl font-semibold md:text-2xl lg:text-4xl">
              The More, The Merrier: Unlock Weekly Rewards!
            </h1>
          </Cover>

          <div className="animation-wrapper relative hidden items-center justify-center lg:flex">
            <div
              ref={textBlockRef}
              className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/3 transform animate-pulse flex-col items-center justify-center gap-4 leading-tight"
            >
              <p className="bg-fuzzy-title bg-clip-text text-center font-insomnia text-[50px]">
                Active players
              </p>
              <p className="bg-rocky-title bg-clip-text text-center text-[40px]">
                {numberOfPlayers}
              </p>
            </div>
            <div ref={sphereRef} className="sphere-animation w-full">
              <CustomMilestoneSectionSeparator />
            </div>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <div className="relative flex h-44 w-44 flex-col items-center justify-around rounded-2xl bg-neutral-900 text-gray-50 shadow-inner shadow-gray-50 before:absolute before:top-16 before:h-12 before:w-12 before:rounded-full before:bg-orange-800 before:blur-xl">
              <span className="">Active players</span>
              <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
                {numberOfPlayers}
              </span>
              <div className="flex w-48 flex-row justify-evenly text-gray-50">
                <div className="flex flex-row items-center">
                  <svg
                    className="h-5 w-5 animate-bounce fill-red-500"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className=""
                      d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <PiGameControllerBold />
                  <svg
                    className="h-5 w-5 fill-current"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[100px] flex h-full flex-col items-center justify-center gap-8 lg:w-[50%]">
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            {milestones.map((milestone, index) => (
              <CustomMilestoneCard
                key={index}
                milestoneReached={milestone.fulfilled}
                title={`Objective: ${milestone.players} players`}
                description={`Reward: ${milestone.reward}`}
                cardBorderBackground={milestone.cardBorderBackground}
                index={index}
              />
            ))}
          </div>
          <Separator className="z-50 mt-10 h-[0.5px] w-full bg-transparent bg-blaze-title" />

          <div className="mt-10 flex h-fit w-full flex-row items-center justify-start gap-4">
            <p className="text-center text-lg text-slate-300 lg:text-left">
              Join the race to the top and see your name in lights! Compete with
              the best, snag exclusive rewards, and remember—the more, the
              merrier! Bigger crowds mean even better prizes, so rally your
              friends and let the games begin!
            </p>
            <Image
              src="/assets/chibis/Taily Winner_100.webp"
              alt="Taily-image"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// Function to get the number of players
const getNumberOfPlayers = async (
  indexerClient: algosdk.Indexer,
  assetId: number
) => {
  try {
    const assetBalances = await indexerClient
      .lookupAssetBalances(assetId)
      .currencyLessThan(2000000) //To-Do: create an exclusion list
      .currencyGreaterThan(0)
      .do();
    return assetBalances.balances.length;
  } catch (error) {
    console.error("Error fetching data from Algorand:", error);
    return 0; // Return 0 if there is an error
  }
};
