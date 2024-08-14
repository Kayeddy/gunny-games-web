"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "@/components/shared/Loader";
import "../../app/globals.css";
import Image from "next/image";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

interface CharacterProps {
  backgroundImage: string;
  logoSrc: string;
  bindText: string;
  characterImageSrc: string;
  factionName: string;
  characterName: string;
  roleImageSrc: string;
  roleName: string;
  description: string;
  abilities: { src: string; key: string }[];
  containerClass: string;
  leftVerticalClass: string;
  mainImgClass: string;
  contentMainClass: string;
  boxSectionClass: string;
  iconsMainClass: string;
  iconsInnerClass: string;
  viewContractBtnClass: string;
  characterImgSize?: number;
  contractButtonLink: string;
}

const Character: React.FC<CharacterProps> = ({
  backgroundImage,
  logoSrc,
  bindText,
  characterImageSrc,
  factionName,
  characterName,
  roleImageSrc,
  roleName,
  description,
  abilities,
  containerClass,
  leftVerticalClass,
  mainImgClass,
  contentMainClass,
  boxSectionClass,
  iconsMainClass,
  iconsInnerClass,
  viewContractBtnClass,
  characterImgSize,
  contractButtonLink,
}) => {
  return (
    <div
      className={`${containerClass}`}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={leftVerticalClass}>
        <h6 className="header6">{bindText}</h6>
        {/* <img src={logoSrc} className="gl-logo-img" /> */}
      </div>
      <div className={mainImgClass}>
        <div className="main-img scene">
          <Image
            src={characterImageSrc}
            alt="banner-main-img"
            className="object-contain"
            data-depth="0.2"
            width={characterImgSize ?? 500}
            height={characterImgSize ?? 500}
          />
        </div>
      </div>
      <div className={contentMainClass}>
        <h5 className="header5">{factionName}</h5>
        <h1 className="font-insomnia">{characterName}</h1>
        <div className={boxSectionClass}>
          <div className="controller-box-img">
            <Image src={roleImageSrc} alt="role-img" width={100} height={100} />
          </div>
          <div className="controller-box-content">
            <h5>{roleName}</h5>
            <p>{description}</p>
          </div>
        </div>
        <div className={iconsMainClass}>
          {abilities.map((ability, index) => (
            <div key={index} className={iconsInnerClass}>
              <div className="controller-img">
                <Image src={ability.src} alt="" width={100} height={100} />
              </div>
              <p>{ability.key}</p>
            </div>
          ))}
        </div>
        <div className={viewContractBtnClass + " cursor-scale"}>
          <a
            href={contractButtonLink}
            target="_blank"
            rel="referrer noreferrer"
            className="view-contract-btn"
          >
            view contract
          </a>
        </div>
      </div>
    </div>
  );
};

const characters = [
  {
    backgroundImage: "/assets/nft_cards/FUZZY_100.png",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-first.svg",

    bindText: "Skins",
    characterImageSrc: "/assets/chibis/Fuzzy Chibi_100.png",
    factionName: "Air elemental",
    characterName: "Fuzzy",
    roleImageSrc: "/assets/factions/icon-air_100.png",
    roleName: "Inguz",
    description:
      "This little mate belongs to the Air element and is all about fun and mischief. Its stunning fur gives it an adorable look that'll melt your heart. But there's more to Fuzzy than its cuteness - it's got some serious healing magic to aid its buddies.",
    abilities: [
      {
        src: "/assets/abilities/icon-hability-5_100.png",
        key: "Ability",
      },
      {
        src: "/assets/factions/icon-air_100.png",
        key: "Faction",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Type",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Element",
      },
    ],
    containerClass: "banner-section-loop",
    leftVerticalClass: "banner-left-vertical-main",
    mainImgClass: "banner-main-img",
    contentMainClass: "banner-content-main",
    boxSectionClass: "controller-box-section",
    iconsMainClass: "controller-icons-main",
    iconsInnerClass: "controller-icons-inner",
    viewContractBtnClass: "view-contract-btn-main",
    contractButtonLink: "https://explorer.perawallet.app/asset/1166502923/",
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/phoenix.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-second.svg",
    bindText: "Skins",
    characterImageSrc: "/assets/chibis/Rocky Chibi_100.png",
    factionName: "Earth Elemental",
    characterName: "Rockie",
    roleImageSrc: "/assets/factions/icon-othila_100.png",
    roleName: "OTHILA",
    description:
      "This earthy buddy might look rough, but don't be fooled - it's actually a big softie, super affectionate, and sweet. Rockie is all about keeping the good vibes alive and protecting its teammates.",
    abilities: [
      {
        src: "/assets/abilities/icon-hability-2_100.png",
        key: "Ability",
      },
      {
        src: "/assets/factions/icon-othila_100.png",
        key: "Faction",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Type",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Element",
      },
    ],
    containerClass: "banner-section-loop",
    leftVerticalClass: "banner-left-vertical-main",
    mainImgClass: "banner-main-img",
    contentMainClass: "banner-content-main",
    boxSectionClass: "controller-box-section",
    iconsMainClass: "controller-icons-main",
    iconsInnerClass: "controller-icons-inner",
    viewContractBtnClass: "view-contract-btn-main",
    contractButtonLink: "https://explorer.perawallet.app/asset/1166485390/",
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "Skins",
    characterImageSrc: "/assets/chibis/Taily Chibi Jumping_100.png",
    factionName: "Water elemental",
    characterName: "Taily",
    roleImageSrc: "/assets/factions/Iconos (3)_100.png",
    roleName: "Perth",
    description:
      "the enchanting Inugi character in the Gunny video game, where canine charm meets aquatic prowess. This magical blend creates a creature that's like no other, effortlessly gliding across water surfaces, making every aquatic move a graceful masterpiece.",
    abilities: [
      {
        src: "/assets/abilities/icon-hability-1_100.png",
        key: "Ability",
      },
      {
        src: "/assets/factions/Iconos (3)_100.png",
        key: "Faction",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Type",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Element",
      },
    ],
    containerClass: "banner-section-loop",
    leftVerticalClass: "banner-left-vertical-main",
    mainImgClass: "banner-main-img",
    contentMainClass: "banner-content-main",
    boxSectionClass: "controller-box-section",
    iconsMainClass: "controller-icons-main",
    iconsInnerClass: "controller-icons-inner",
    viewContractBtnClass: "view-contract-btn-main",
    contractButtonLink: "https://explorer.perawallet.app/asset/1166590241/",
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "Skins",
    characterImageSrc: "/assets/chibis/Bolty Chibi Atack_100.png",
    factionName: "Lightning Elemental",
    characterName: "Bolty",
    roleImageSrc: "/assets/factions/icon-thurizas_100.png",
    roleName: "Thurizas",
    description:
      "an Inugi that stands as a distinctive character within Gunny. Coming directly from the lightning element, this creature emanates an air of solemnity while remaining steadfastly loyal to its masters.",
    abilities: [
      {
        src: "/assets/abilities/icon-hability-3_100.png",
        key: "Ability",
      },
      {
        src: "/assets/factions/icon-thurizas_100.png",
        key: "Faction",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Type",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Element",
      },
    ],
    containerClass: "banner-section-loop",
    leftVerticalClass: "banner-left-vertical-main",
    mainImgClass: "banner-main-img",
    contentMainClass: "banner-content-main",
    boxSectionClass: "controller-box-section",
    iconsMainClass: "controller-icons-main",
    iconsInnerClass: "controller-icons-inner",
    viewContractBtnClass: "view-contract-btn-main",
    contractButtonLink: "https://explorer.perawallet.app/asset/1166518213/",
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "Skins",
    characterImageSrc: "/assets/chibis/Blaze Chibi_100.png",
    factionName: "Fire Elemental",
    characterName: "Blaze",
    roleImageSrc: "/assets/factions/icon-ratio_100.png",
    roleName: "CONTROLLER",
    description:
      "This fierce Inugi does not hold back, diving into battle with unmatched toughness and a fiery spirit. Its loyalty to its master is unwavering, and it’s always ready to strike when the occasion demands it.",
    abilities: [
      {
        src: "/assets/abilities/icon-hability-4_100.png",
        key: "Ability",
      },
      {
        src: "/assets/factions/icon-ratio_100.png",
        key: "Faction",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Type",
      },
      {
        src: "/assets/icons/ORA-PNG_100.webp",
        key: "Element",
      },
    ],
    containerClass: "banner-section-loop",
    leftVerticalClass: "banner-left-vertical-main",
    mainImgClass: "banner-main-img",
    contentMainClass: "banner-content-main",
    boxSectionClass: "controller-box-section",
    iconsMainClass: "controller-icons-main",
    iconsInnerClass: "controller-icons-inner",
    viewContractBtnClass: "view-contract-btn-main",
    contractButtonLink: "https://explorer.perawallet.app/asset/1166579975/",
  },
];

const Characters = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  useEffect(() => {
    const handleScriptsLoaded = () => {
      setIsLoading(false);
    };

    // Ensure the custom script is loaded after all other scripts
    const script = document.createElement("script");
    script.src = "/customScript.js";
    script.onload = handleScriptsLoaded;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      className="sticky top-0 h-screen bg-[#1D1B26] overflow-hidden"
      style={{ scale, rotate }}
    >
      {/* Load necessary libraries via CDN */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/parallax-js@3.1.0/dist/parallax.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        strategy="beforeInteractive"
      />

      {/* Load custom script */}
      <Script
        src="/customScript.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Custom script loaded successfully.");
          setIsLoading(false);
        }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative my-auto">
          {/* <header className="header-section-main">
            <div className="cursor"></div>
            <div className="custom-container">
              <div className="header-section-inner">
                <div className="header-logo">
                  <a href="javascript:void(0);">
                    <img
                      src="https://www.yudiz.com/codepen/valorant-characters/valorant.svg"
                      className="cursor-scale small"
                      alt="valorant-logo"
                    />
                  </a>
                </div>
                <div className="header-menu">
                  <ul>
                    <li className="active cursor-scale">
                      <a href="javascript:void(0);">latest</a>
                    </li>
                    <li className="cursor-scale">
                      <a href="javascript:void(0);">collection</a>
                    </li>
                    <li className="cursor-scale">
                      <a href="javascript:void(0);">career</a>
                    </li>
                    <li className="cursor-scale">
                      <a href="javascript:void(0);">soter</a>
                    </li>
                  </ul>
                </div>
                <div className="header-right-icon">
                  <a href="javascript:void(0);" className="cursor-scale">
                    <img
                      src="https://www.yudiz.com/codepen/valorant-characters/header-right-arrow.svg"
                      alt="right-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header> */}
          <section className="banner-section-main">
            {Array.from({ length: 200 }, (_, index) => (
              <i key={index} className="rain"></i>
            ))}
            <div className="banner-section-inner">
              {characters.map((character, index) => (
                <Character key={index} {...character} />
              ))}
            </div>
            <div className="controller-right-icons-main">
              <div className="controller-right-icons-inner">
                <div>
                  <Image
                    src="/assets/chibis/Fuzzy Chibi_100.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/chibis/Rocky Chibi_100.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/chibis/Taily Winner_100.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/chibis/Bolty Chibi Atack_100.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/chibis/Blaze Chibi_100.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </motion.section>
  );
};

export default Characters;
