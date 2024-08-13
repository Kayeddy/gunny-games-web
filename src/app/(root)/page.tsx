"use client";

import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const Home = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[500vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <Showcase scrollYProgress={scrollYProgress} />
      <Characters scrollYProgress={scrollYProgress} />
      <Roadmap scrollYProgress={scrollYProgress} />
      <Ranking scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Home;
