import { Scoreboard } from "@/components/landing/Ranking/Scoreboard";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Ranking({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.section
      className="flex items-center justify-center h-screen bg-[#1D1B26] sticky top-0"
      style={{ scale, rotate }}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Ranking Board</h1>
        <Scoreboard />
      </div>
    </motion.section>
  );
}
