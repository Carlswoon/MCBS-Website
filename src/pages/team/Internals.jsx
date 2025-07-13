import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function Internals() {
  const internalsTeam = [
    {
      name: "Hannah",
      img: "/mahjong/people/internals/Hannah.png",
      tile: "/mahjong/people/internals/tiles/Hannah.png",
      title: "Vice President",
      bio: "Hannah keeps the people happy and the vibes immaculate.",
    },
    {
      name: "Jackson",
      img: "/mahjong/people/internals/Jackson.png",
      tile: "/mahjong/people/internals/tiles/Jackson.png",
      title: "HR Director",
      bio: "Doesn't speak Mandarin, atrocious at Mahjong and regularly crashes out over google forms!",
    },
    {
      // not revised yet
      name: "Jennifer",
      img: "/mahjong/people/internals/Jennifer.png",
      tile: "/mahjong/people/internals/tiles/Jennifer.png",
      title: "HR Subcommittee",
      bio: "Jennifer brings the empathy and the Excel sheets.",
    },
    {
      // not revised yet
      name: "XinXin",
      img: "/mahjong/people/internals/XinXin.png",
      tile: "/mahjong/people/internals/tiles/XinXin.png",
      title: "HR Subcommittee",
      bio: "XinXin brings the ✨ emotional intelligence ✨ to the team.",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12 sm:mb-16">
        Internals Team
      </h1>

      {/* VP */}
      <div className="mb-8">
        <img
          src={internalsTeam[0].tile}
          alt={internalsTeam[0].name}
          className="w-28 sm:w-36 md:w-44 mx-auto cursor-pointer transition-transform hover:scale-105"
          onClick={() => setActivePerson(internalsTeam[0])}
        />
      </div>

      {/* Director */}
      <div className="mb-8">
        <img
          src={internalsTeam[1].tile}
          alt={internalsTeam[1].name}
          className="w-28 sm:w-36 md:w-44 mx-auto cursor-pointer transition-transform hover:scale-105"
          onClick={() => setActivePerson(internalsTeam[1])}
        />
      </div>

      {/* Subcomms */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        {internalsTeam.slice(2).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-28 sm:w-36 md:w-44 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActivePerson(person)}
          />
        ))}
      </div>

      <InfoModal
        name={activePerson?.name}
        role={activePerson?.title}
        bio={activePerson?.bio}
        imgSrc={activePerson?.img}
        onClose={() => setActivePerson(null)}
      />
    </div>
  );
}
