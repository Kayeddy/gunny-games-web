import { Cover } from "@/components/custom/CustomTextAnimatedCover";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";

export default function Milestones() {
  return (
    <div className="relative flex flex-col items-center justify-between w-screen min-h-screen gap-8 p-4 h-scren lg:p-8">
      <section className="flex flex-col items-center justify-center">
        <Cover>
          <h1 className="bg-clip-text bg-bolty-backgroundColor font-valorant text-[40px] text-center text-4xl md:text-4xl lg:text-6xl font-semibold  w-full  mt-6 relative z-20 py-6">
            The More, The Merrier: Unlock Bigger Rewards!
          </h1>
        </Cover>
      </section>
      <section className="flex flex-col items-center justify-center"></section>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
