"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center min-h-screen h-fit bg-[#1D1B26]"
        >
          <div className="z-20 timeline-container">
            {/* Phase 1: Laying the Foundation */}
            <div className="timeline-point">
              <Image
                src="/assets/gems/Gema (8)_100.png"
                alt=""
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
                </div>
              </div>
            </div>

            {/* Phase 2: Building the Blueprint */}
            <div className="timeline-point">
              <Image
                src="/assets/gems/Gema (3)_100.png"
                alt=""
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
                </div>
              </div>
            </div>

            {/* Phase 3: Forging the Path */}
            <div className="timeline-point">
              <Image
                src="/assets/gems/Gema (11)_100.png"
                alt=""
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
                </div>
              </div>
            </div>

            {/* Phase 4: Unleashing the Power */}
            <div className="timeline-point">
              <Image
                src="/assets/gems/Gema (18)_100.png"
                alt=""
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
                </div>
              </div>
            </div>

            {/* Phase 5: The Next Evolution */}
            <div className="timeline-point">
              <Image
                src="/assets/gems/Gema (23)_100.png"
                alt=""
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
