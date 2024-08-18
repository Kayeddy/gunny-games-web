"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { Divider } from "@nextui-org/divider";

interface Skin {
  name: string;
  image: string;
}

interface CharacterAttribute {
  name: string;
  image: string;
}

interface Faction {
  name: string;
  image: string;
}

interface Character {
  id: number;
  characterImage: string;
  characterName: string;
  faction: Faction;
  element: string;
  description: string;
  attributes: CharacterAttribute[];
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
          <Image src={skin.image} alt={skin.name} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

const CharacterContentSection: React.FC<CharacterContentProps> = ({
  characterImage,
  characterName,
  faction,
  element,
  description,
  attributes,
  skins,
  styles,
  parallaxRef,
}) => {
  return (
    <div
      ref={parallaxRef}
      className="flex flex-col items-center justify-around h-full gap-12 px-24 lg:ml-10 lg:flex-row"
    >
      <div className="parallax-image lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] relative">
        <Image
          src={characterImage}
          alt={characterName}
          layout="fill"
          objectFit="contain"
          className="object-cover w-full h-full"
        />
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
            className={`lg:w-[450px] lg:h-[150px] w-[300px] h-auto border-1 ${styles.borderColor} ${styles.backgroundColor} bg-opacity-10 flex flex-row items-start justify-start gap-8 p-3`}
          >
            <Image
              src={faction.image}
              alt={faction.name}
              width={60}
              height={60}
              className="object-contain"
            />
            <span className={`flex flex-col gap-1`}>
              <p
                className={`bg-clip-text ${styles.backgroundColor} text-[20px]`}
              >
                {faction.name}
              </p>
              <p className="text-white">{description}</p>
            </span>
          </div>
          <div className="grid flex-row items-center justify-between w-full grid-cols-2 grid-rows-2 lg:flex">
            {attributes.map((attr, index) => (
              <span
                key={index}
                className={`lg:w-[100px] w-auto h-[120px] flex  flex-col items-center justify-center border-1 ${styles.borderColor} ${styles.backgroundColor} bg-opacity-10`}
              >
                <Image
                  src={attr.image}
                  alt={attr.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <Divider className={`${styles.backgroundColor}`} />
                <p
                  className={`py-1 text-center ${styles.backgroundColor} bg-clip-text`}
                >
                  {attr.name}
                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const sliderRef1 = useRef<Slider | null>(null);
  const parallaxRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

  const characters: Character[] = [
    {
      id: 1,
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
        { name: "Type", image: "/assets/icons/ORA-PNG_100.webp" },
        { name: "Element", image: "/assets/icons/ORA-PNG_100.webp" },
      ],
      skins: [
        { name: "Skin 1A", image: "/path/to/skin1a.png" },
        { name: "Skin 1B", image: "/path/to/skin1b.png" },
      ],
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
        { name: "Type", image: "/assets/icons/ORA-PNG_100.webp" },
        { name: "Element", image: "/assets/icons/ORA-PNG_100.webp" },
      ],
      skins: [
        { name: "Skin 2A", image: "/path/to/skin2a.png" },
        { name: "Skin 2B", image: "/path/to/skin2b.png" },
      ],
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
      characterImage: "/assets/chibis/Taily Chibi Jumping_100.webp",
      characterName: "Taily",
      faction: { name: "Inguz", image: "/assets/factions/icon-peth_100.webp" },
      element: "Water",
      description:
        "the enchanting Inugi character in the Gunny video game, where canine charm meets aquatic prowess. This magical blend creates a creature that's like no other, effortlessly gliding across water surfaces, making every aquatic move a graceful masterpiece.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-1_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-peth_100.webp" },
        { name: "Type", image: "/assets/icons/ORA-PNG_100.webp" },
        { name: "Element", image: "/assets/icons/ORA-PNG_100.webp" },
      ],
      skins: [
        { name: "Skin 3A", image: "/path/to/skin3a.png" },
        { name: "Skin 3B", image: "/path/to/skin3b.png" },
      ],
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
      characterImage: "/assets/chibis/Bolty Chibi Atack_100.webp",
      characterName: "Bolty",
      faction: {
        name: "Inguz",
        image: "/assets/factions/icon-thurizas_100.webp",
      },
      element: "Electric",
      description:
        "an Inugi that stands as a distinctive character within Gunny. Coming directly from the lightning element, this creature emanates an air of solemnity while remaining steadfastly loyal to its masters.",
      attributes: [
        {
          name: "Ability",
          image: "/assets/abilities/icon-hability-3_100.webp",
        },
        { name: "Faction", image: "/assets/factions/icon-thurizas_100.webp" },
        { name: "Type", image: "/assets/icons/ORA-PNG_100.webp" },
        { name: "Element", image: "/assets/icons/ORA-PNG_100.webp" },
      ],
      skins: [
        { name: "Skin 4A", image: "/path/to/skin4a.png" },
        { name: "Skin 4B", image: "/path/to/skin4b.png" },
      ],
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
        { name: "Type", image: "/assets/icons/ORA-PNG_100.webp" },
        { name: "Element", image: "/assets/icons/ORA-PNG_100.webp" },
      ],
      skins: [
        { name: "Skin 5A", image: "/path/to/skin5a.png" },
        { name: "Skin 5B", image: "/path/to/skin5b.png" },
      ],
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
    setSelectedCharacter(index);
    if (sliderRef1.current) {
      sliderRef1.current.slickGoTo(index);
    }
  };

  return (
    <div className="h-fit min-h-screen bg-[#1D1B26] overflow-hidden lg:p-8 p-4 flex items-center justify-center relative w-full">
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

        <div className="absolute inset-x-0 top-0 flex flex-row items-center my-auto lg:flex-col lg:inset-y-0 lg:right-0 w-fit">
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
                    alt={`Character ${index + 1}`}
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
                    alt={`Character ${index + 1}`}
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
