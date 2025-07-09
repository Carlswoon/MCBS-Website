import { useNavigate } from "react-router-dom";

export default function MeetTheTeam() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Execs",
      key: "execs",
      description: "Meet our executive team who run the show behind the scenes.",
      imgOnRight: true,
      imgSrc: "/mahjong/events.png",
    },
    {
      title: "Events",
      key: "events",
      description: "Our events team brings you unforgettable memories all year long.",
      imgOnRight: false,
      imgSrc: "/mahjong/events.png",
    },
    {
      title: "Marketing",
      key: "marketing",
      description: "Creative minds behind our social media, posters, and promo.",
      imgOnRight: true,
      imgSrc: "/mahjong/events.png",
    },
    {
      title: "Sponsors",
      key: "sponsors",
      description: "Our sponsor team secures amazing partnerships and collabs.",
      imgOnRight: false,
      imgSrc: "/mahjong/events.png",
    },
  ];

  return (
    <div className="min-h-screen bg-mcbs-white py-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-mcbs-navy">
        Meet The Team
      </h1>

      <div className="space-y-12 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => navigate(`/team/${section.key}`)}
            className={`cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col md:flex-row items-center ${
              section.imgOnRight ? "md:flex-row" : "md:flex-row-reverse"
            } bg-mcbs-blue shadow-md rounded-2xl overflow-hidden`}
          >
            <img
              src={section.imgSrc}
              alt={section.title}
              className="w-full md:w-1/3 h-60 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h2 className="text-2xl font-semibold text-mcbs-navy">{section.title}</h2>
              <p className="mt-2 text-mcbs-shadow">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
