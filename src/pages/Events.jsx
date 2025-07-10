export default function Events() {
  const events = [
    {
      week: "Week 1",
      image: "/mahjong/events/term2/Week 1.png",
    },
    {
      week: "Week 2",
      image: "/mahjong/events/term2/Week 2.png",
    },
    {
      week: "Week 3",
      image: "/mahjong/events/term2/Week 3.png",
    },
    {
      week: "Week 4",
      image: "/mahjong/events/term2/Week 4.png",
    },
    {
      week: "Week 5",
      image: "/mahjong/events/term2/Week 5.png",
    }
  ];

  return (
    <div className="w-full py-22">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-20">
        Our Events
      </h1>

      {/* Timeline container */}
      <div className="relative max-w-screen-xl mx-0auto px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-mcbs-blue z-0" />

        <div className="flex flex-col gap-24 relative z-10">
          {[...events].reverse().map((event, idx) => (
            <div
              key={idx}
              className={`relative flex w-full items-center ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Horizontal line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-[2px] bg-mcbs-blue ${
                  idx % 2 === 0 ? "right-1/2" : "left-1/2"
                }`}
                style={{ width: "calc(50% - 4rem)" }} // 4rem = 64px padding
              />

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-mcbs-blue rounded-full z-10" />

              {/* Image */}
              <div className="px-8 z-10">
                <img
                  src={event.image}
                  alt={event.week}
                  className="max-w-md rounded-xl border shadow-lg z-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
