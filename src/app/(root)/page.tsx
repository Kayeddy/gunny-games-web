import Characters from "@/sections/landing/Characters";
import Hero from "@/sections/landing/Hero";
import Roadmap from "@/sections/landing/Roadmap";
import Showcase from "@/sections/landing/Showcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <Characters />
      <Roadmap />
    </div>
  );
};

export default Home;
