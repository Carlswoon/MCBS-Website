import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function Internals() {
  const internalsTeam = [
    // VP (1副)
    {
      name: "Hannah",
      img: "/mahjong/people/internals/Hannah.png",
      tile: "/mahjong/people/internals/tiles/Hannah.png",
      title: "Vice President",
      bio: "Hannah keeps the people happy and the vibes immaculate.",
    },

    // Director (2導)
    {
      name: "Jackson",
      img: "/mahjong/people/internals/Jackson.png",
      tile: "/mahjong/people/internals/tiles/Jackson.png",
      title: "HR Director",
      bio: "Doesn't speak Mandarin, atrocious at Mahjong and reguarly crashes out over google forms!",
    },

    // Subcomms (3員)
    {
      name: "Jennifer",
      img: "/mahjong/people/internals/Jennifer.png",
      tile: "/mahjong/people/internals/tiles/Jennifer.png",
      title: "HR Subcommittee",
      bio: "Jennifer brings the empathy and the Excel sheets.",
    },
    {
      name: "XinXin",
      img: "/mahjong/people/internals/XinXin.png",
      tile: "/mahjong/people/internals/tiles/XinXin.png",
      title: "HR Subcommittee",
      bio: "XinXin brings the ✨ emotional intelligence ✨ to the team.",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-6 py-20 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-16">Internals Team</h1>

      {/* VP */}
      <div className="mb-12">
        <img
          src={internalsTeam[0].tile}
          alt={internalsTeam[0].name}
          className="w-44 sm:w-48 md:w-52 mx-auto cursor-pointer"
          onClick={() => setActivePerson(internalsTeam[0])}
        />
      </div>

      {/* Director */}
      <div className="mb-12">
        <img
          src={internalsTeam[1].tile}
          alt={internalsTeam[1].name}
          className="w-44 sm:w-48 md:w-52 mx-auto cursor-pointer"
          onClick={() => setActivePerson(internalsTeam[1])}
        />
      </div>

      {/* Subcomms */}
      <div className="flex gap-12">
        {internalsTeam.slice(2).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-44 sm:w-48 md:w-52 cursor-pointer"
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
