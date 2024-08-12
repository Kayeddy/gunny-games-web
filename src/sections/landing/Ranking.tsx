import { Scoreboard } from "@/components/landing/Ranking/Scoreboard";

export default function Ranking() {
  return (
    <div className="flex items-center justify-center min-h-screen h-fit bg-[#1D1B26]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Ranking Board</h1>
        <Scoreboard />
      </div>
    </div>
  );
}
