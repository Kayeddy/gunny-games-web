"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ReactElement,
  Suspense,
} from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";
const RockyModel = React.lazy(() => import("@/components/3dModels/Rocky"));
const BoltyModel = React.lazy(() => import("@/components/3dModels/Bolty"));
const FuzzyModel = React.lazy(() => import("@/components/3dModels/Fuzzy"));
const TailyModel = React.lazy(() => import("@/components/3dModels/Taily"));
const BlazeModel = React.lazy(() => import("@/components/3dModels/Blaze"));

interface Skin {
  name: string;
  image: string;
}

interface CharacterAttribute {
  name: string;
  image?: string;
  description?: string;
}

interface Faction {
  name: string;
  image: string;
}

interface Character {
  id: number;
  contractLink: string;
  characterImage: string;
  characterName: string;
  faction: Faction;
  element: string;
  description: string;
  attributes: CharacterAttribute[];
  visualModel?: any;
  skins: Skin[];
  styles: {
    titleGradient: string;
    borderColor: string;
    shadowColor: string;
    backgroundColor: string;
    badgeColor: string;
  };
}

interface SkinsProps {
  skins: Skin[];
}

interface CharacterContentProps extends Character {
  parallaxRef: React.RefObject<HTMLDivElement>;
}

const SkinsSection: React.FC<SkinsProps> = ({ skins }) => {
  return (
    <div className="skins-section">
      {skins.map((skin, index) => (
        <div key={index}>
          <p>{skin.name}</p>
          <Image
            src={skin.image}
            alt={`Skin - ${skin.name}`}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

const CharacterContentSection: React.FC<CharacterContentProps> = ({
  contractLink,
  characterImage,
  characterName,
  faction,
  element,
  description,
  attributes,
  skins,
  visualModel,
  styles,
  parallaxRef,
}) => {
  return (
    <div
      ref={parallaxRef}
      className="flex flex-col items-center justify-around h-full gap-12 p-4 lg:p-24 lg:ml-10 lg:flex-row"
    >
      <div className="parallax-image lg:w-[500px] lg:h-[500px] w-full h-[300px] relative">
        <Suspense fallback={<Spinner size="lg" color="secondary" />}>
          {visualModel ? (
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="absolute inset-x-auto inset-y-auto hidden mx-auto my-auto gradient lg:block" />
              {visualModel}
            </div>
          ) : (
            <Image
              src={characterImage}
              alt={`Character Image - ${characterName}`}
              fill
              style={{ objectFit: "contain" }}
              className="object-cover w-full h-full"
            />
          )}
        </Suspense>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p
          className={`${styles.badgeColor} bg-clip-text lg:text-[20px] text-[15px] leading-[30px] tracking-[0.5em]`}
        >
          {element} Elemental
        </p>
        <h1
          className={`lg:text-[6rem] text-[4rem] leading-[8rem] my-2 mb-6 ${styles.titleGradient} bg-clip-text`}
        >
          {characterName}
        </h1>
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div
            className={`lg:w-[450px] lg:h-auto w-[300px] h-auto border-1 ${styles.borderColor} ${styles.backgroundColor} bg-opacity-10 flex flex-row items-start justify-start gap-8 p-3`}
          >
            <Image
              src={faction.image}
              alt={`Faction - ${faction.name}`}
              width={60}
              height={60}
              className="object-contain"
            />
            <span className={`flex flex-col gap-1`}>
              <p
                className={`bg-clip-text ${styles.backgroundColor} text-[20px]`}
              >
                {faction.name} faction
              </p>
              <span>
                <p className="text-base text-white font-sen">{description}</p>
              </span>
            </span>
          </div>
          <div className="grid flex-row items-center justify-between w-full grid-cols-2 grid-rows-2 lg:flex">
            {attributes.map((attr, index) => (
              <span
                key={index}
                className={`lg:w-[100px] w-auto h-[120px] flex  flex-col items-center justify-center border-1 ${styles.borderColor} ${styles.backgroundColor} bg-opacity-10`}
              >
                {attr.image ? (
                  <Image
                    src={attr.image}
                    alt={`Attribute - ${attr.name}`}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                ) : (
                  <span className="flex items-center justify-center w-full h-full">
                    <p className="text-base text-white font-sen font-valorant">
                      {attr.description}
                    </p>
                  </span>
                )}
                <Divider className={`${styles.backgroundColor}`} />
                <p
                  className={`py-1 text-center ${styles.backgroundColor} bg-clip-text`}
                >
                  {attr.name}
                </p>
              </span>
            ))}
          </div>
          <Link
            href={contractLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full py-4 lg:items-start lg:justify-start"
          >
            <button
              className={`relative inline-flex items-center justify-center px-12 py-2 overflow-hidden text-base font-semibold transition-all duration-300 ease-in-out border text-white rounded-md group/button ${styles.titleGradient} backdrop-blur-lg hover:scale-110 border-white/20`}
            >
              <div className="absolute inset-0 flex justify-center w-full h-full bg-black bg-opacity-60 blur-lg"></div>
              <span className="z-10 w-full h-full text-lg">
                View on explorer
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative w-10 h-full bg-white/30"></div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const sliderRef1 = useRef<Slider | null>(null);
  const parallaxRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const clickAllowedRef = useRef(true); // Ref to manage click state
  const clickDelay = 500;

  const characters: Character[] = [
    {
      id: 1,
      contractLink: "https://explorer.perawallet.app/asset/1166502923/",
      characterImage: "/assets/chibis/Fuzzy Chibi_100.webp",
      characterName: "Fuzzy",
      faction: { name: "Inguz", image: "/assets/factions/icon-air_100.webp" },
      element: "Air",
      description:
        "This little mate belongs to the Air element and is all about fun and mischief. Its stunning fur gives it an adorable look that'll melt your heart. But there's more to Fuzzy than its cuteness - it's got some serious healing magic to aid its buddies.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-5_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-air_100.webp" },
        { name: "Type", description: "support" },
        { name: "Element", description: "Air" },
      ],
      skins: [
        { name: "Skin 1A", image: "/path/to/skin1a.png" },
        { name: "Skin 1B", image: "/path/to/skin1b.png" },
      ],
      visualModel: <FuzzyModel />,
      styles: {
        titleGradient: "bg-fuzzy-title", // Tailwind class for the gradient
        borderColor: "border-fuzzy-borderColor", // Tailwind class
        shadowColor: "shadow-fuzzy-badgeColor",
        backgroundColor: "bg-fuzzy-backgroundColor", // Tailwind class
        badgeColor: "bg-fuzzy-badgeColor", // Tailwind class
      },
    },
    {
      id: 2,
      contractLink: "https://explorer.perawallet.app/asset/1166485390/",
      characterImage: "/assets/chibis/Rocky Chibi_100.webp",
      characterName: "Rocky",
      faction: {
        name: "Inguz",
        image: "/assets/factions/icon-othila_100.webp",
      },
      element: "Earth",
      description:
        "This earthy buddy might look rough, but don't be fooled - it's actually a big softie, super affectionate, and sweet. Rockie is all about keeping the good vibes alive and protecting its teammates.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-2_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-othila_100.webp" },
        { name: "Type", description: "Defense" },
        { name: "Element", description: "Earth" },
      ],
      skins: [
        { name: "Skin 2A", image: "/path/to/skin2a.png" },
        { name: "Skin 2B", image: "/path/to/skin2b.png" },
      ],
      visualModel: <RockyModel />,
      styles: {
        titleGradient: "bg-rocky-title", // Tailwind class for the gradient
        borderColor: "border-rocky-borderColor", // Tailwind class
        shadowColor: "shadow-rocky-badgeColor",
        backgroundColor: "bg-rocky-backgroundColor", // Tailwind class
        badgeColor: "bg-rocky-badgeColor", // Tailwind class
      },
    },
    {
      id: 3,
      contractLink: "https://explorer.perawallet.app/asset/1166590241/",
      characterImage: "/assets/chibis/Taily Chibi Jumping_100.webp",
      characterName: "Taily",
      faction: { name: "Inguz", image: "/assets/factions/icon-peth_100.webp" },
      element: "Water",
      description:
        "The enchanting Inugi character in the Gunny video game, where canine charm meets aquatic prowess. This magical blend creates a creature that's like no other, effortlessly gliding across water surfaces, making every aquatic move a graceful masterpiece.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-1_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-peth_100.webp" },
        { name: "Type", description: "Defense" },
        { name: "Element", description: "Water" },
      ],
      skins: [
        { name: "Skin 3A", image: "/path/to/skin3a.png" },
        { name: "Skin 3B", image: "/path/to/skin3b.png" },
      ],
      visualModel: <TailyModel />,
      styles: {
        titleGradient: "bg-taily-title", // Tailwind class for the gradient
        borderColor: "border-taily-borderColor", // Tailwind class
        shadowColor: "shadow-taily-badgeColor",
        backgroundColor: "bg-taily-backgroundColor", // Tailwind class
        badgeColor: "bg-taily-badgeColor", // Tailwind class
      },
    },
    {
      id: 4,
      contractLink: "https://explorer.perawallet.app/asset/1166518213/",
      characterImage: "/assets/chibis/Bolty Chibi Atack_100.webp",
      characterName: "Bolty",
      faction: {
        name: "Inguz",
        image: "/assets/factions/icon-thurizas_100.webp",
      },
      element: "Electric",
      description:
        "An Inugi that stands as a distinctive character within Gunny. Coming directly from the lightning element, this creature emanates an air of solemnity while remaining steadfastly loyal to its masters.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-3_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-thurizas_100.webp" },
        { name: "Type", description: "Attack" },
        { name: "Element", description: "Lightning" },
      ],
      skins: [
        { name: "Skin 4A", image: "/path/to/skin4a.png" },
        { name: "Skin 4B", image: "/path/to/skin4b.png" },
      ],
      visualModel: <BoltyModel />,
      styles: {
        titleGradient: "bg-bolty-title", // Tailwind class for the gradient
        borderColor: "border-bolty-borderColor", // Tailwind class
        shadowColor: "shadow-bolty-badgeColor",
        backgroundColor: "bg-bolty-backgroundColor", // Tailwind class
        badgeColor: "bg-bolty-badgeColor", // Tailwind class
      },
    },
    {
      id: 5,
      contractLink: "https://explorer.perawallet.app/asset/1166579975/",
      characterImage: "/assets/chibis/Blaze Chibi_100.webp",
      characterName: "Blaze",
      faction: { name: "Inguz", image: "/assets/factions/icon-ratio_100.webp" },
      element: "Fire",
      description:
        "This fierce Inugi does not hold back, diving into battle with unmatched toughness and a fiery spirit. Its loyalty to its master is unwavering, and it’s always ready to strike when the occasion demands it.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-4_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-ratio_100.webp" },
        { name: "Type", description: "Attack" },
        { name: "Element", description: "Fire" },
      ],
      skins: [
        { name: "Skin 5A", image: "/path/to/skin5a.png" },
        { name: "Skin 5B", image: "/path/to/skin5b.png" },
      ],
      visualModel: <BlazeModel />, // React component for the visual model
      styles: {
        titleGradient: "bg-blaze-title", // Tailwind class for the gradient
        borderColor: "border-blaze-borderColor", // Tailwind class
        shadowColor: "shadow-blaze-badgeColor",
        backgroundColor: "bg-blaze-backgroundColor", // Tailwind class
        badgeColor: "bg-blaze-badgeColor", // Tailwind class
      },
    },
  ];

  const characterContentSliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    swipe: false,
    touchThreshold: 100,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSelectedCharacter(newIndex);
    },
  };

  useEffect(() => {
    parallaxRefs.current = characters.map(
      (_, i) => parallaxRefs.current[i] ?? React.createRef<HTMLDivElement>()
    );

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      parallaxRefs.current.forEach((ref) => {
        if (ref.current) {
          const element = ref.current.querySelector(
            ".parallax-image"
          ) as HTMLElement;
          gsap.to(element, {
            x: x * -15, // Adjusted for smoother movement
            y: y * -15, // Adjusted for smoother movement
            ease: "power1.out", // Smoother easing function
            duration: 0.6, // Slower duration for smoother transitions
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [characters]);

  const goToCharacter = (index: number) => {
    if (!clickAllowedRef.current) return;

    clickAllowedRef.current = false;
    setTimeout(() => {
      clickAllowedRef.current = true;
    }, clickDelay);

    setSelectedCharacter(index);
    if (sliderRef1.current) {
      sliderRef1.current.slickGoTo(index);
    }
  };

  return (
    <div
      className="h-fit min-h-screen bg-[#1D1B26] overflow-hidden lg:p-8 p-4 flex items-center justify-center relative w-full"
      id="characters"
    >
      {Array.from({ length: 200 }, (_, index) => (
        <i key={index} className="rain"></i>
      ))}

      <div className="relative flex flex-row items-center justify-between w-full h-full">
        <Slider
          ref={sliderRef1}
          className="w-full mt-[250px] lg:mt-0"
          {...characterContentSliderSettings}
        >
          {characters.map((character, index) => (
            <div key={index}>
              <CharacterContentSection
                {...character}
                parallaxRef={parallaxRefs.current[index]}
              />
            </div>
          ))}
        </Slider>

        <div className="absolute inset-x-0 top-0 flex flex-row items-center my-auto lg:flex-col lg:inset-y-0 lg:right-0 lg:top-24 w-fit">
          <div className="items-center justify-center hidden w-full h-full lg:block">
            {characters.map((character, index) => (
              <div
                key={index}
                className={`cursor-pointer mb-4 border-2 rounded-[20px] w-[100px] h-[100px] flex items-center justify-center gap-8 border-transparent`}
                onClick={() => goToCharacter(index)}
              >
                <span className="flex items-center justify-center bg-transparent border-transparent w-[100px] h-[100px]">
                  <Image
                    src={character.characterImage}
                    alt={`${character.characterName} thumbnail`}
                    width={100}
                    height={100}
                    className={`object-contain ${
                      selectedCharacter === index &&
                      `${character.styles.shadowColor} shadow-lg bg-transparent border-transparent rounded-[20px]`
                    }`}
                  />
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center w-full h-full lg:hidden">
            {characters.map((character, index) => (
              <div
                key={index}
                className={`cursor-pointer mb-4 border-2 rounded-[20px] w-[100px] h-[100px] flex items-center justify-center gap-8 border-transparent`}
                onClick={() => goToCharacter(index)}
              >
                <span className="flex items-center justify-center bg-transparent border-transparent w-[100px] h-[100px]">
                  <Image
                    src={character.characterImage}
                    alt={`${character.characterName} thumbnail`}
                    width={60}
                    height={60}
                    className={`object-contain ${
                      selectedCharacter === index &&
                      `${character.styles.shadowColor} shadow-lg bg-transparent border-transparent rounded-[20px]`
                    }`}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
