"use client";
import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsCollisions";

export default function Roadmap({ scrollYProgress }: { scrollYProgress: any }) {
  const ref = useRef(null);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <AnimatePresence mode="wait">
      <BackgroundBeamsWithCollision>
        <motion.section
          className="min-h-screen h-fit lg:h-screen pb-[50px] lg:pb-0"
          // style={{ scale, rotate }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center h-full"
          >
            <div className="z-20 timeline-container">
              {/* Phase 1: Laying the Foundation */}
              <div className="timeline-point">
                <Image
                  src="/assets/gems/Gema (8)_100.webp"
                  alt="Gem representing Phase 1: Laying the Foundation"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="popup">
                  <div className="popup-number">1</div>
                  <div className="popup-details">
                    <div className="popup-title">Laying Foundations</div>
                    Team Formation, Creative Project Planning, and Value
                    Proposition
                    <p className="mt-2"> - 2022 Q1</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: Building the Blueprint */}
              <div className="timeline-point">
                <Image
                  src="/assets/gems/Gema-_2__100.webp"
                  alt="Gem representing Phase 2: Building the Blueprint"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="popup">
                  <div className="popup-number">2</div>
                  <div className="popup-details">
                    <div className="popup-title">Building Blueprints</div>
                    Creation of Economic Model, Whitepaper Development, Website
                    Development, and Value Proposition
                    <p className="mt-2"> - 2022 Q2</p>
                  </div>
                </div>
              </div>

              {/* Phase 3: Forging the Path */}
              <div className="timeline-point">
                <Image
                  src="/assets/gems/Gema (10)_100.webp"
                  alt="Gem representing Phase 3: Forging the Path"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="popup">
                  <div className="popup-number">3</div>
                  <div className="popup-details">
                    <div className="popup-title">Forging the Path</div>
                    Alpha Development, AWS Database Creation, Asset Creation on
                    Algorand, Gacha System Development, Inugis Airdrop, Heroes
                    Airdrop
                    <p className="mt-2"> - 2023 Q3</p>
                  </div>
                </div>
              </div>

              {/* Phase 4: Unleashing the Power */}
              <div className="timeline-point">
                <Image
                  src="/assets/gems/Gema (18)_100.webp"
                  alt="Gem representing Phase 4: Unleashing the Power"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="popup">
                  <div className="popup-number">4</div>
                  <div className="popup-details">
                    <div className="popup-title">Unleashing Power</div>
                    Private Alpha Release, Gacha System Launch, Open Alpha
                    Release, Tournament Launch
                    <p className="mt-2"> - 2023 Q4</p>
                  </div>
                </div>
              </div>

              {/* Phase 5: The Next Evolution */}
              <div className="timeline-point">
                <Image
                  src="/assets/gems/Gema (19)_100.webp"
                  alt="Gem representing Phase 5: The Next Evolution"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="popup">
                  <div className="popup-number">5</div>
                  <div className="popup-details">
                    <div className="popup-title">The Next Evolution</div>
                    2nd Gen Inugis Development, PVP Game Development, UI/UX
                    Update, Animated Short Films, PVP Beta Launch, Battle Pass
                    Release
                    <p className="mt-2"> - 2024 </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </BackgroundBeamsWithCollision>
    </AnimatePresence>
  );
}
