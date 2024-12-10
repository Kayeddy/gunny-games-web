"use client";

// Framer motion imports
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Divider } from "@nextui-org/react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

// Utils imports

interface CanvasRevealCardProps {
  title: string;
  description?: string;
  cardBorderBackground: string;
  index: number;
  milestoneReached: boolean;
  children?: React.ReactNode;
}

/**
 * A card component that reveals more content on hover. This component uses animations
 * from framer-motion to handle the reveal and employs a visually distinct border
 * background that can be customized per card.
 *
 * @param {CanvasRevealCardProps} props - The props for the card component.
 * @returns {React.ReactElement} The CanvasRevealCard component.
 */
const CustomMilestoneCard: React.FC<CanvasRevealCardProps> = ({
  title,
  description,
  cardBorderBackground,
  index,
  milestoneReached,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className="flex relative p-2 bg-no-repeat bg-[length:100%_100%] overflow-hidden lg:w-[12rem] lg:h-[12rem] w-[8rem] h-[10rem] flex-col items-center justify-around font-valorant text-center"
      style={
        milestoneReached
          ? {}
          : { backgroundImage: `url(${cardBorderBackground})` }
      }
    >
      {/* Conditionally render CanvasRevealEffect if the milestone is reached */}
      {milestoneReached && (
        <div className="w-full h-full">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black rounded-[30px] overflow-hidden w-full h-full"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </div>
      )}

      <div className="absolute inset-x-auto inset-y-auto z-20 flex flex-col justify-center gap-4 mx-auto my-auto item-center">
        {/* Change title to "COMPLETED" if the milestone is reached */}
        <h2
          className={`text-sm font-semibold lg:text-xl bg-clip-text bg-blaze-title  ${
            milestoneReached && "animate-pulse"
          }`}
        >
          {milestoneReached ? "COMPLETED" : title}
        </h2>
        <Divider className="my-2 mx-auto w-[50%] bg-slate-400" />
        <p className="text-sm lg:text-base text-slate-300 animate-bounce">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CustomMilestoneCard;
