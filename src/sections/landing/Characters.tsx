"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "@/components/shared/Loader";
import "../../app/globals.css";
import Image from "next/image";

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
            <img src={roleImageSrc} alt="role-img" />
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
                <img src={ability.src} alt="" />
              </div>
              <p>{ability.key}</p>
            </div>
          ))}
        </div>
        <div className={viewContractBtnClass + " cursor-scale"}>
          <a href="#" className="view-contract-btn">
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
    bindText: "BIND PERSONALIZADA",
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
        src: "/assets/abilities/icon-hability-1_100.png",
        key: "Type",
      },
      {
        src: "/assets/gems/Gema (16)_100.png",
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
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/phoenix.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-second.svg",
    bindText: "BIND PERSONALIZADA",
    characterImageSrc: "/assets/chibis/Rocky Chibi_100.png",
    factionName: "Duelist",
    characterName: "Phoenix",
    roleImageSrc:
      "https://www.yudiz.com/codepen/valorant-characters/subtract-second.svg",
    roleName: "DUELIST",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/q-second-icon.svg",
        key: "q",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/e-second-icon.svg",
        key: "e",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/c-second-icon.svg",
        key: "c",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/x-second-icon.svg",
        key: "x",
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
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "BIND PERSONALIZADA",
    characterImageSrc: "/assets/chibis/Taily Chibi Jumping_100.png",
    factionName: "Controller",
    characterName: "Viper",
    roleImageSrc:
      "https://www.yudiz.com/codepen/valorant-characters/subtract-third.svg",
    roleName: "CONTROLLER",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/q-third-icon.svg",
        key: "q",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/e-third-icon.svg",
        key: "e",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/c-third-icon.svg",
        key: "c",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/x-third-icon.svg",
        key: "x",
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
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "BIND PERSONALIZADA",
    characterImageSrc: "/assets/chibis/Bolty Chibi Atack_100.png",
    factionName: "Controller",
    characterName: "Viper",
    roleImageSrc:
      "https://www.yudiz.com/codepen/valorant-characters/subtract-third.svg",
    roleName: "CONTROLLER",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/q-third-icon.svg",
        key: "q",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/e-third-icon.svg",
        key: "e",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/c-third-icon.svg",
        key: "c",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/x-third-icon.svg",
        key: "x",
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
  },
  {
    backgroundImage:
      "https://www.yudiz.com/codepen/valorant-characters/viper.jpg",
    logoSrc:
      "https://www.yudiz.com/codepen/valorant-characters/gl-logo-third.svg",
    bindText: "BIND PERSONALIZADA",
    characterImageSrc: "/assets/chibis/Blaze Chibi_100.png",
    factionName: "Controller",
    characterName: "Viper",
    roleImageSrc:
      "https://www.yudiz.com/codepen/valorant-characters/subtract-third.svg",
    roleName: "CONTROLLER",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/q-third-icon.svg",
        key: "q",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/e-third-icon.svg",
        key: "e",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/c-third-icon.svg",
        key: "c",
      },
      {
        src: "https://www.yudiz.com/codepen/valorant-characters/x-third-icon.svg",
        key: "x",
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
  },
];

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="relative min-h-screen bg-[#1D1B26]">
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
        <div>
          <header className="header-section-main">
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
          </header>
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
                  <img src="/assets/chibis/Fuzzy Chibi_100.png" alt="" />
                </div>
                <div>
                  <img src="/assets/chibis/Rocky Chibi_100.png" alt="" />
                </div>
                <div>
                  <img src="/assets/chibis/Taily Winner_100.png" alt="" />
                </div>
                <div>
                  <img src="/assets/chibis/Bolty Chibi Atack_100.png" alt="" />
                </div>
                <div>
                  <img src="/assets/chibis/Blaze Chibi_100.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Characters;
