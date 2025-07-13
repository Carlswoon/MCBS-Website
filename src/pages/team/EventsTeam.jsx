import { useState } from "react";
import InfoModal from "../../components/InfoModal";

export default function EventsTeam() {
  const eventsTeam = [
    // VPs
    {
      name: "Nick",
      img: "/mahjong/people/events/Nick.png",
      tile: "/mahjong/people/events/tiles/Nick.png",
      title: "Vice President",
      bio: "Hi! I’m a Computer Science student who’s passionate about coding and technology. Outside of academics, I enjoy cooking and often experiment with simple, tasty recipes. I'm also a big fan of boardgame I love the mix of strategy and fun it brings.",
    },
    {
      name: "Suki",
      img: "/mahjong/people/events/Suki.png",
      tile: "/mahjong/people/events/tiles/Suki.png",
      title: "Vice President",
      bio: "Suki makes sure no event goes un-slayed but never had the chance to play against subbies",
    },

    // Directors
    {
      name: "Clair",
      img: "/mahjong/people/events/Clair.png",
      tile: "/mahjong/people/events/tiles/Clair.png",
      title: "Events Director",
      bio: "Clair supports every member's gambling addiction #hustlermindsetfr",
    },
    {
      name: "Eric",
      img: "/mahjong/people/events/Eric.png",
      tile: "/mahjong/people/events/tiles/Eric.png",
      title: "Events Director",
      bio: "Eric brings the logistics and the laughs.",
    },
    {
      // not revised yet
      name: "Helen",
      img: "/mahjong/people/events/Helen.png",
      tile: "/mahjong/people/events/tiles/Helen.png",
      title: "Events Director",
      bio: "Helen makes the vibes match the vision.",
    },

    // Subcomms
    {
      name: "Daniel W",
      img: "/mahjong/people/events/Daniel W.png",
      tile: "/mahjong/people/events/tiles/Daniel W.png",
      title: "Events Subcommittee",
      bio: "Daniel W is the wild card that makes it all work (somehow).",
    },
    {
      name: "Daniel Y",
      img: "/mahjong/people/events/Daniel Y.png",
      tile: "/mahjong/people/events/tiles/Daniel Y.png",
      title: "Events Subcommittee",
      bio: "Every time I play mahjong, it's like I 碰'd my head and 吃'd my last braincell. My plays? Cooked. My hand? 糊得不可胡. But we still ballin, 杠杠 baby 🤘",
    },
    {
      name: "Ellen",
      img: "/mahjong/people/events/Ellen.png",
      tile: "/mahjong/people/events/tiles/Ellen.png",
      title: "Events Subcommittee",
      bio: "can u make one up for me i acc cant think of anything",
    },
    {
      name: "Jason",
      img: "/mahjong/people/events/Jason.png",
      tile: "/mahjong/people/events/tiles/Jason.png",
      title: "Events Subcommittee",
      bio: "I joined mahjong without knowing how to play mahjong 🤡 (lowkey still don't)",
    },
    {
      name: "Steven",
      img: "/mahjong/people/events/Steven.png",
      tile: "/mahjong/people/events/tiles/Steven.png",
      title: "Events Subcommittee",
      bio: "Steven wears the bucket hat and carries the event.",
    },
    {
      name: "Wendy",
      img: "/mahjong/people/events/Wendy.png",
      tile: "/mahjong/people/events/tiles/Wendy.png",
      title: "Events Subcommittee",
      bio: "A loyal pop mart enjoyer I will crash out if u say my labubu is ugly",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12 sm:mb-16">
        Events Team
      </h1>

      {/* VPs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-12">
        {eventsTeam.slice(0, 2).map((person, i) => (
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
        {eventsTeam.slice(2, 5).map((person, i) => (
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
        {eventsTeam.slice(5).map((person, i) => (
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
