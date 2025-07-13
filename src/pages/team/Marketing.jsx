import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function Marketing() {
  const marketingTeam = [
    {
      name: "Nat",
      img: "/mahjong/people/marketing/Nat.png",
      tile: "/mahjong/people/marketing/tiles/Nat.png",
      title: "Vice President",
      bio: "Might not be cooking at the mahjong table, but I'll be cooking up your weekly mahjong content!",
    },
    {
      name: "Yuyan",
      img: "/mahjong/people/marketing/Yuyan.png",
      tile: "/mahjong/people/marketing/tiles/Yuyan.png",
      title: "Vice President",
      bio: "From the moment I was born, I was destined to make mahjong reels",
    },
    {
      // not revised yet
      name: "Ruonan",
      img: "/mahjong/people/marketing/Ruonan.png",
      tile: "/mahjong/people/marketing/tiles/Ruonan.png",
      title: "Marketing Director",
      bio: "Ruonan crafts the brand identity with precision and flair.",
    },
    {
      name: "Tristan",
      img: "/mahjong/people/marketing/Tristan.png",
      tile: "/mahjong/people/marketing/tiles/Tristan.png",
      title: "Marketing Director",
      bio: "The only guy in the soc that actually knows how to play mahjong",
    },
    {
      name: "Carlson",
      img: "/mahjong/people/marketing/Carlson.png",
      tile: "/mahjong/people/marketing/tiles/Carlson.png",
      title: "Marketing Subcommittee",
      bio: "catch him looksmaxxing at events",
    },
    {
      name: "Charles",
      img: "/mahjong/people/marketing/Charles.png",
      tile: "/mahjong/people/marketing/tiles/Charles.png",
      title: "Marketing Subcommittee",
      bio: "I'm so cool",
    },
    {
      // not revised yet
      name: "Jun",
      img: "/mahjong/people/marketing/Jun.png",
      tile: "/mahjong/people/marketing/tiles/Jun.png",
      title: "Marketing Subcommittee",
      bio: "Sydney Metro",
    },
    {
      name: "Leon",
      img: "/mahjong/people/marketing/Leon.png",
      tile: "/mahjong/people/marketing/tiles/Leon.png",
      title: "Marketing Subcommittee",
      bio: "Leon brings vibes and reels to life.",
    },
    {
      name: "Melissa",
      img: "/mahjong/people/marketing/Mel.png",
      tile: "/mahjong/people/marketing/tiles/Mel.png",
      title: "Marketing Subcommittee",
      bio: "I LOVEEEE Mahjong ❤️‍🔥",
    },
    {
      name: "Nathan",
      img: "/mahjong/people/marketing/Nathan.png",
      tile: "/mahjong/people/marketing/tiles/Nathan.png",
      title: "Marketing Subcommittee",
      bio: "Nathan runs the show behind the camera.",
    },
    {
      // not revised yet
      name: "Sukie",
      img: "/mahjong/people/marketing/Sukie.png",
      tile: "/mahjong/people/marketing/tiles/Sukie.png",
      title: "Marketing Subcommittee",
      bio: "Sukie adds the ✨ personality ✨ to every post.",
    },
    {
      // not revised yet
      name: "Talia",
      img: "/mahjong/people/marketing/Talia.png",
      tile: "/mahjong/people/marketing/tiles/Talia.png",
      title: "Marketing Subcommittee",
      bio: "Talia = sass + skill. Iconic combo.",
    },
    {
      name: "Xixi",
      img: "/mahjong/people/marketing/Xixi.jpg",
      tile: "/mahjong/people/marketing/tiles/Xixi.png",
      title: "Marketing Subcommittee",
      bio: "ive never actually played mahjong in my life 😓",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12 sm:mb-16">
        Marketing Team
      </h1>

      {/* VPs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-12">
        {marketingTeam.slice(0, 2).map((person, i) => (
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
        {marketingTeam.slice(2, 4).map((person, i) => (
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
        {marketingTeam.slice(4).map((person, i) => (
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
