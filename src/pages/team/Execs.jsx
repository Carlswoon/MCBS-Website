import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function Execs() {
  const execs = [
    {
      name: "Mark",
      img: "/mahjong/people/exec/Mark.png",
      tile: "/mahjong/people/exec/tiles/Mark.png",
      title: "President",
      bio: "Founding member of MCBS (est. May 2024), Mark built the society tile by tile. Whether it's game night or governance, he’s always five moves ahead. With a sharp mind for strategy and an even sharper craving for snacks, Mark isn’t just playing mahjong—he’s redefining the meta.",
    },
    {
      name: "Nancy",
      img: "/mahjong/people/exec/Nancy.png",
      tile: "/mahjong/people/exec/tiles/Nancy.png",
      title: "Governance Officer",
      bio: "Nancy ensures the society runs smoothly and ethically.",
    },
    {
      name: "Elizabeth",
      img: "/mahjong/people/exec/Elizabeth.png",
      tile: "/mahjong/people/exec/tiles/Elizabeth.png",
      title: "Secretary & Treasurer",
      bio: "Elizabeth keeps the minutes and the money in perfect order.",
    },
  ];

  const [activeExec, setActiveExec] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12 sm:mb-16">
        Executive Team
      </h1>

      {/* Top tile */}
      <div className="mb-8">
        <img
          src={execs[0].tile}
          alt={execs[0].name}
          className="w-28 sm:w-36 md:w-44 mx-auto cursor-pointer transition-transform hover:scale-105"
          onClick={() => setActiveExec(execs[0])}
        />
      </div>

      {/* Bottom tiles */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        {[execs[1], execs[2]].map((exec, i) => (
          <img
            key={i}
            src={exec.tile}
            alt={exec.name}
            className="w-28 sm:w-36 md:w-44 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveExec(exec)}
          />
        ))}
      </div>

      <InfoModal
        name={activeExec?.name}
        role={activeExec?.title}
        bio={activeExec?.bio}
        imgSrc={activeExec?.img}
        onClose={() => setActiveExec(null)}
      />
    </div>
  );
}
