"use client";

import { useScroll } from "framer-motion";
import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";
import CustomLandingNavigationEventHandler from "@/components/custom/CustomLandingNavigationEventHandler";
import Footer from "@/components/shared/Footer";
import { useEffect, useState } from "react";
import PageLoader from "@/components/shared/PageLoader";
import useSectionObserver from "@/lib/hooks/useSectionObserver";

const Home = () => {
  const { scrollYProgress } = useScroll();

  useSectionObserver(["home", "showcase", "characters", "roadmap", "ranking"]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loading indicator and hide the content initially
    document.body.classList.add("loading");

    const handlePageLoad = () => {
      setIsLoading(false);
      // Once the page is fully loaded, remove the loading class
      document.body.classList.remove("loading");
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <main className="relative flex flex-col gap-12 overflow-hidden h-fit bg-[#1D1B26]">
      {isLoading && <PageLoader />}
      <CustomLandingNavigationEventHandler />
      <section id="home">
        <Hero scrollYProgress={scrollYProgress} />
      </section>
      <section id="showcase">
        <Showcase />
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
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
