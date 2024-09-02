"use client";

import { useScroll } from "framer-motion";
import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";
import CustomLandingNavigationEventHandler from "@/components/custom/CustomLandingNavigationEventHandler";
import Footer from "@/components/shared/Footer";
import useSectionObserver from "@/lib/hooks/useSectionObserver";
import InteractiveRewards from "@/sections/landing/InteractiveRewards";

const Home = () => {
  const { scrollYProgress } = useScroll();

  useSectionObserver(["home", "showcase", "characters", "roadmap", "ranking"]);

  return (
    <main className="relative flex flex-col gap-12 overflow-hidden h-fit bg-[#1D1B26]">
      <CustomLandingNavigationEventHandler />
      <section id="home">
        <Hero scrollYProgress={scrollYProgress} />
      </section>
      <section id="showcase">
        <Showcase scrollYProgress={scrollYProgress} />
      </section>
      <section id="characters">
        <Characters />
      </section>
      <section id="roadmap">
        <Roadmap scrollYProgress={scrollYProgress} />
      </section>
      <section id="ranking">
        <Ranking scrollYProgress={scrollYProgress} />
      </section>
      <section id="ranking">
        <InteractiveRewards />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
