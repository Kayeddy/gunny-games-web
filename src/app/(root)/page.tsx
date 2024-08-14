"use client";

import { useScroll } from "framer-motion";
import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";
import CustomLandingNavigationEventHandler from "@/components/custom/CustomLandingNavigationEventHandler";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative h-[500vh]">
      <CustomLandingNavigationEventHandler />
      <section id="home">
        <Hero scrollYProgress={scrollYProgress} />
      </section>
      <section id="showcase">
        <Showcase scrollYProgress={scrollYProgress} />
      </section>
      <section id="characters">
        <Characters scrollYProgress={scrollYProgress} />
      </section>
      <section id="roadmap">
        <Roadmap scrollYProgress={scrollYProgress} />
      </section>
      <section id="ranking">
        <Ranking scrollYProgress={scrollYProgress} />
      </section>
    </main>
  );
};

export default Home;
