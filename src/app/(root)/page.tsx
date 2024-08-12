import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Ranking from "@/sections/landing/Ranking";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <Characters />
      <Roadmap />
      <Ranking />
    </div>
  );
};

export default Home;
