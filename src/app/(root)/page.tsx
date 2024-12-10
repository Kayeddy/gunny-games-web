"use client";

import { useScroll } from "framer-motion";
import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";
import Footer from "@/components/shared/Footer";
import useSectionObserver from "@/lib/hooks/useSectionObserver";
import Milestones from "@/sections/landing/Milestones";

const Home = () => {
  useSectionObserver(["home", "showcase", "characters", "roadmap", "ranking"]);

  return (
    <main className="relative flex flex-col gap-12 overflow-hidden h-fit bg-[#1D1B26]">
      <Hero />
      <Showcase />
      <Characters />
      <Roadmap />
      <Ranking />
      <Milestones />
      <Footer />
    </main>
  );
};

export default Home;
