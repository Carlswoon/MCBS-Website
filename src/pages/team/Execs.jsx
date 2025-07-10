import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function Execs() {
  const execs = [
    {
      name: "Mark",
      img: "/mahjong/people/exec/Mark.png", // president tile
      tile: "/mahjong/people/exec/tiles/Mark.png",
      title: "President",
      bio: "Mark leads the MCBS society with a passion for strategy and snacks.",
    },
    {
      name: "Nancy",
      img: "/mahjong/people/exec/Nancy.png", // governance officer tile
      tile: "/mahjong/people/exec/tiles/Nancy.png",
      title: "Governance Officer",
      bio: "Nancy ensures the society runs smoothly and ethically.",
    },
    {
      name: "Elizabeth",
      img: "/mahjong/people/exec/Elizabeth.png", // sec+treasurer tile
      tile: "/mahjong/people/exec/tiles/Elizabeth.png",
      title: "Secretary & Treasurer",
      bio: "Elizabeth keeps the minutes and the money in perfect order.",
    },
  ];

  const [activeExec, setActiveExec] = useState(null);
 return (
    <div className="min-h-screen px-6 py-20 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-16">Executive Team</h1>

      {/* Top tile */}
      <div className="mb-8">
        <img
          src={execs[0].tile}
          alt={execs[0].name}
          className="w-44 sm:w-48 md:w-52 mx-auto cursor-pointer"
          onClick={() => setActiveExec(execs[0])}
        />
      </div>

      {/* Bottom tiles */}
      <div className="flex gap-12">
        {[execs[1], execs[2]].map((exec, i) => (
          <img
            key={i}
            src={exec.tile}
            alt={exec.name}
            className="w-44 sm:w-48 md:w-52 cursor-pointer"
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