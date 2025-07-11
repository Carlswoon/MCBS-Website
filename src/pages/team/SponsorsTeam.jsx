import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function SponsorsTeam() {
  const sponsorsTeam = [
    {
      name: "Benny",
      img: "/mahjong/people/sponsors/Benny.png",
      tile: "/mahjong/people/sponsors/tiles/Benny.png",
      title: "Vice President",
      bio: "Benny makes deals, jokes, and vibes happen.",
    },
    {
      name: "Zetian",
      img: "/mahjong/people/sponsors/Zetian.png",
      tile: "/mahjong/people/sponsors/tiles/Zetian.png",
      title: "Vice President",
      bio: "Zetian brings calm charisma to every sponsor meeting.",
    },
    {
      name: "Ethan L",
      img: "/mahjong/people/sponsors/Ethan.png",
      tile: "/mahjong/people/sponsors/tiles/Ethan.png",
      title: "Sponsorship Director",
      bio: "Ethan L is all business – and all smiles.",
    },
    {
      name: "Louis",
      img: "/mahjong/people/sponsors/Louis.png",
      tile: "/mahjong/people/sponsors/tiles/Louis.png",
      title: "Sponsorship Director",
      bio: "Louis gets things done — and gets them done right.",
    },
    {
      name: "Maximus",
      img: "/mahjong/people/sponsors/Maximus.png",
      tile: "/mahjong/people/sponsors/tiles/Maximus.png",
      title: "Sponsorship Director",
      bio: "Maximus leads like a general and memes like a king.",
    },
    {
      name: "Chris",
      img: "/mahjong/people/sponsors/Chris.png",
      tile: "/mahjong/people/sponsors/tiles/Chris.png",
      title: "Sponsorship Subcommittee",
      bio: "Chris is the heart behind every partnership.",
    },
    {
      name: "Cindy",
      img: "/mahjong/people/sponsors/Cindy.png",
      tile: "/mahjong/people/sponsors/tiles/Cindy.png",
      title: "Sponsorship Subcommittee",
      bio: "Cindy keeps the brand alive with confidence and charm.",
    },
    {
      name: "Ethan H",
      img: "/mahjong/people/sponsors/Ethan H.png",
      tile: "/mahjong/people/sponsors/tiles/Ethan H.png",
      title: "Sponsorship Subcommittee",
      bio: "Ethan H is the smooth talker and secret weapon.",
    },
    {
      name: "Ian",
      img: "/mahjong/people/sponsors/Ian.png",
      tile: "/mahjong/people/sponsors/tiles/Ian.png",
      title: "Sponsorship Subcommittee",
      bio: "Always eating, never losing, could probably beat your grandma at mahjong. You’ll probably find me near the snacks during mahjong nights.",
    },
    {
      name: "Isabelle",
      img: "/mahjong/people/sponsors/Isabelle.png",
      tile: "/mahjong/people/sponsors/tiles/Isabelle.png",
      title: "Sponsorship Subcommittee",
      bio: "Isabelle sprinkles wholesomeness into every email.",
    },
    {
      name: "Oliver",
      img: "/mahjong/people/sponsors/Oliver.png",
      tile: "/mahjong/people/sponsors/tiles/Oliver.png",
      title: "Sponsorship Subcommittee",
      bio: "Hi, my name's Oliver and I'm a first year enjoying uni and friends",
    },
    {
      name: "Tao",
      img: "/mahjong/people/sponsors/Tao.png",
      tile: "/mahjong/people/sponsors/tiles/Tao.png",
      title: "Sponsorship Subcommittee",
      bio: "Tao brings big king energy to every deal.",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12 sm:mb-16">
        Sponsors Team
      </h1>

      {/* VPs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-12">
        {sponsorsTeam.slice(0, 2).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-28 sm:w-36 md:w-44 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActivePerson(person)}
          />
        ))}
      </div>

      {/* Directors */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-12">
        {sponsorsTeam.slice(2, 5).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-28 sm:w-36 md:w-44 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActivePerson(person)}
          />
        ))}
      </div>

      {/* Subcomms */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {sponsorsTeam.slice(5).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-24 sm:w-32 md:w-40 cursor-pointer transition-transform hover:scale-105"
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
