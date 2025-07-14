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
      bio: "Ronan manages content and promotion for the Mahjong Club’s Chinese WeChat official account. She specializes in using engaging storytelling to connect Mahjong lovers across different cultures. Through her work, she hopes to share the fun and tradition of Mahjong with a broader audience.",
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
      name: "Sukie",
      img: "/mahjong/people/marketing/Sukie.png",
      tile: "/mahjong/people/marketing/tiles/Sukie.png",
      title: "Marketing Subcommittee",
      bio: "Hi! I’m Sukie, and I’m excited to be serving on the Marketing Subcommittee for the UNSW Mahjong and Chinese Boardgames Society. I’m a current JD student at UNSW and a first-generation American born to Punjabi-Indian parents. I’ve always had a deep love for culture, community, and bringing people together, which is exactly what drew me to this society!\n\n Outside of Mahjong and marketing, I’m passionate about advocacy and service. I’ve held leadership positions in several student associations and represented the U.S. internationally as Miss USA, becoming the first Punjabi-Indian woman to earn that title. My background includes legal work, community volunteering (including refugee support and homelessness outreach), and performing arts (I’m a trained dancer and singer!).\n\n I believe board games are a powerful way to connect across cultures, make friends, and de-stress, especially during law school! As a Marketing Subcommittee Member, I’m committed to helping the society grow, create inclusive events, and highlight the joy and strategy behind every game we play.\n\n Whether you're a Mahjong master or a curious beginner, come join us, I can’t wait to meet you!",
    },
    {
      name: "Talia",
      img: "/mahjong/people/marketing/Talia.png",
      tile: "/mahjong/people/marketing/tiles/Talia.png",
      title: "Marketing Subcommittee",
      bio: "cooking something up on canva",
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
