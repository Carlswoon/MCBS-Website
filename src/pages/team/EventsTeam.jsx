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
      bio: "Nick fuels the fun with structure and snacks.",
    },
    {
      name: "Suki",
      img: "/mahjong/people/events/Suki.png",
      tile: "/mahjong/people/events/tiles/Suki.png",
      title: "Vice President",
      bio: "Suki makes sure no event goes un-slayed.",
    },

    // Directors
    {
      name: "Clair",
      img: "/mahjong/people/events/Clair.png",
      tile: "/mahjong/people/events/tiles/Clair.png",
      title: "Events Director",
      bio: "Clair coordinates the chaos with elegance.",
    },
    {
      name: "Eric",
      img: "/mahjong/people/events/Eric.png",
      tile: "/mahjong/people/events/tiles/Eric.png",
      title: "Events Director",
      bio: "Eric brings the logistics and the laughs.",
    },
    {
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
      bio: "Daniel W is the wild card that makes it all work.",
    },
    {
      name: "Daniel Y",
      img: "/mahjong/people/events/Daniel Y.png",
      tile: "/mahjong/people/events/tiles/Daniel Y.png",
      title: "Events Subcommittee",
      bio: "Daniel Y shows up and shows out with sports and spirit.",
    },
    {
      name: "Ellen",
      img: "/mahjong/people/events/Ellen.png",
      tile: "/mahjong/people/events/tiles/Ellen.png",
      title: "Events Subcommittee",
      bio: "Ellen brings precision and presence to every event.",
    },
    {
      name: "Gloria",
      img: "/mahjong/people/events/Gloria.png",
      tile: "/mahjong/people/events/tiles/Gloria.png",
      title: "Events Subcommittee",
      bio: "Gloria makes chaos cute and under control.",
    },
    {
      name: "Jason",
      img: "/mahjong/people/events/Jason.png",
      tile: "/mahjong/people/events/tiles/Jason.png",
      title: "Events Subcommittee",
      bio: "Jason = cool, calm, collected — and always on time.",
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
      bio: "Wendy brings energy and a playlist for everything.",
    },
  ];

  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen px-6 py-20 bg-mcbs-white flex flex-col items-center justify-center relative font-mono">
      <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-16">Events Team</h1>

      {/* VPs */}
      <div className="flex gap-12 mb-12">
        {eventsTeam.slice(0, 2).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-44 sm:w-48 md:w-52 cursor-pointer"
            onClick={() => setActivePerson(person)}
          />
        ))}
      </div>

      {/* Directors */}
      <div className="flex gap-12 flex-wrap justify-center mb-12">
        {eventsTeam.slice(2, 5).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-44 sm:w-48 md:w-52 cursor-pointer"
            onClick={() => setActivePerson(person)}
          />
        ))}
      </div>

      {/* Subcomms */}
      <div className="flex flex-wrap justify-center gap-6">
        {eventsTeam.slice(5).map((person, i) => (
          <img
            key={i}
            src={person.tile}
            alt={person.name}
            className="w-40 sm:w-44 md:w-48 cursor-pointer"
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
