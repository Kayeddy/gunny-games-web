import { Scoreboard } from "@/components/landing/Ranking/Scoreboard";
import RankingBoardDecoration from "@/components/ui/RankingBoardDecoration";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Ranking({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.section className="flex items-center justify-center h-fit lg:h-screen min-h-screen bg-[#1D1B26] p-4 lg:p-8 relative">
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="bg-[#1D1B26] bg-opacity-50 rounded-[30px] z-10 p-4">
          <h1 className="text-[43px] leading-[55px] lg:leading-[100px] lg:text-[86px] bg-clip-text bg-fuzzy-title text-center">
            Ranking Board
          </h1>
        </span>
        <RankingBoardDecoration />

        <Scoreboard />
        <span className="absolute hidden left-10 top-6 lg:block">
          <RankingBoardDecoration />
        </span>
        <span className="absolute hidden right-10 top-6 lg:block">
          <RankingBoardDecoration />
        </span>
      </div>
    </motion.section>
  );
}
