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

// src/pages/Events2.jsx
// import { useState } from 'react';

// export default function Events2() {
//   const events = [
//     { week: 'Week 1', date: 'June 6, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 1.png' },
//     { week: 'Week 2', date: 'June 13, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 2.png' },
//     { week: 'Week 3', date: 'June 20, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 3.png' },
//     { week: 'Week 4', date: 'June 27, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 4.png' },
//     { week: 'Week 5', date: 'July 4, 2025  |  5 PM–8 PM', image: '/mahjong/events/term2/Week 5.png' },
//     { week: 'Week 6', date: 'TBA',                image: '/mahjong/events/tba.png' },
//   ];

//   const windowSize = 5;
//   const [current, setCurrent] = useState(0);
//   const [windowStart, setWindowStart] = useState(0);

//   const prev = () => {
//     if (current === 0) return;
//     const nxt = current - 1;
//     setCurrent(nxt);
//     if (nxt < windowStart) setWindowStart(ws => ws - 1);
//   };

//   const next = () => {
//     if (current === events.length - 1) return;
//     const nxt = current + 1;
//     setCurrent(nxt);
//     if (nxt > windowStart + windowSize - 1) setWindowStart(ws => ws + 1);
//   };

//   const selectEvent = idx => {
//     setCurrent(idx);
//     if (idx < windowStart) setWindowStart(idx);
//     else if (idx > windowStart + windowSize - 1)
//       setWindowStart(idx - (windowSize - 1));
//   };

//   const visible = events.slice(windowStart, windowStart + windowSize);

//   return (
//     <section className="pt-28 pb-16 px-4 bg-white">
//       {/* Title */}
//       <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-12">
//         Our Events
//       </h1>

//       {/* Timeline wrapper */}
//       <div className="relative">
//         {/* Left arrow */}
//         <button
//           onClick={prev}
//           disabled={current === 0}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20
//                      text-mcbs-navy text-3xl p-2 rounded-full border border-gray-300
//                      disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
//         >
//           ‹
//         </button>

//         {/* Right arrow */}
//         <button
//           onClick={next}
//           disabled={current === events.length - 1}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20
//                      text-mcbs-navy text-3xl p-2 rounded-full border border-gray-300
//                      disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
//         >
//           ›
//         </button>

//         {/* Center rail */}
//         <div className="absolute inset-x-0 top-1/2 h-px bg-mcbs-green" />

//         {/* Events row */}
//         <div className="flex items-center justify-center space-x-12 overflow-x-hidden">
//           {visible.map((evt, idx) => {
//             const globalIdx = windowStart + idx;
//             const isActive  = globalIdx === current;
//             const isAbove   = globalIdx % 2 === 0;

//             return (
//               <div
//                 key={globalIdx}
//                 onClick={() => selectEvent(globalIdx)}
//                 className={`
//                   flex flex-col items-center cursor-pointer
//                   ${isAbove ? 'pb-24' : 'pt-24'}
//                   transform transition-transform duration-300
//                   ${isActive ? 'scale-110 z-10 opacity-100' : 'opacity-60'}
//                 `}
//               >
//                 <img
//                   src={evt.image}
//                   alt={evt.week}
//                   className="w-48 rounded-lg shadow-lg mb-2"
//                 />
//                 <div className="w-4 h-4 bg-mcbs-green rounded-full" />
//                 <p className="mt-2 text-center text-gray-600 text-sm">
//                   {evt.date}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
