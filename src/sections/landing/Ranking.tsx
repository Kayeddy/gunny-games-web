import { Scoreboard } from "@/components/landing/Ranking/Scoreboard";
import RankingBoardDecoration from "@/components/ui/RankingBoardDecoration";
import { motion } from "framer-motion";

export default function Ranking() {
  return (
    <motion.section
      className="relative flex h-fit min-h-screen items-center justify-center bg-[#1D1B26] p-4 lg:h-screen lg:p-8"
      id="ranking"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="z-10 rounded-[30px] bg-[#1D1B26] bg-opacity-50 p-4">
          <h1 className="bg-fuzzy-title bg-clip-text text-center text-[43px] leading-[55px] lg:text-[86px] lg:leading-[100px]">
            Ranking Board
          </h1>
        </span>
        <Scoreboard />
        <span className="absolute left-10 top-6 hidden lg:block">
          <RankingBoardDecoration />
        </span>
        <span className="absolute right-10 top-6 hidden lg:block">
          <RankingBoardDecoration />
        </span>
      </div>
    </motion.section>
  );
}
