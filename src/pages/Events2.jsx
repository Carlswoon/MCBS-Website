import { useState } from 'react';

export default function Events2() {
  const events = [
    { week: 'Week 1', date: 'June 6, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 1.png' },
    { week: 'Week 2', date: 'June 13, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 2.png' },
    { week: 'Week 3', date: 'June 20, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 3.png' },
    { week: 'Week 4', date: 'June 27, 2025 | 5 PM–8 PM', image: '/mahjong/events/term2/Week 4.png' },
    { week: 'Week 5', date: 'July 4, 2025  |  5 PM–8 PM', image: '/mahjong/events/term2/Week 5.png' },
    { week: 'Week 6', date: 'TBA', image: '/mahjong/events/tba.png' },
  ];

  const windowSize = 5;
  const [current, setCurrent] = useState(0);
  const [windowStart, setWindowStart] = useState(0);

  const prev = () => {
    if (current === 0) return;
    const nxt = current - 1;
    setCurrent(nxt);
    if (nxt < windowStart) setWindowStart(ws => ws - 1);
  };

  const next = () => {
    if (current === events.length - 1) return;
    const nxt = current + 1;
    setCurrent(nxt);
    if (nxt > windowStart + windowSize - 1) setWindowStart(ws => ws + 1);
  };

  const selectEvent = idx => {
    setCurrent(idx);
    if (idx < windowStart) setWindowStart(idx);
    else if (idx > windowStart + windowSize - 1)
      setWindowStart(idx - (windowSize - 1));
  };

  const visible = events.slice(windowStart, windowStart + windowSize);

  return (
    <section className="relative pt-24 pb-28 px-4 sm:px-6 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-mcbs-navy mb-12">
        Our Events
      </h1>

      {/* Desktop Layout */}
      <div className="hidden sm:block relative">
        {/* Arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-4 top-[40%] transform -translate-y-1/2 z-20 text-mcbs-navy text-3xl p-2 rounded-full border border-gray-300 disabled:opacity-50 hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          onClick={next}
          disabled={current === events.length - 1}
          className="absolute right-4 top-[40%] transform -translate-y-1/2 z-20 text-mcbs-navy text-3xl p-2 rounded-full border border-gray-300 disabled:opacity-50 hover:bg-gray-100"
        >
          ›
        </button>

        <div className="absolute inset-x-0 top-1/2 h-px bg-mcbs-green z-10" />

        <div className="overflow-x-hidden mx-auto max-w-[90vw] lg:max-w-6xl px-4 py-16">
          <div className="flex items-center justify-center space-x-10">
            {visible.map((evt, idx) => {
              const globalIdx = windowStart + idx;
              const isActive = globalIdx === current;
              const isAbove = globalIdx % 2 === 0;

              return (
                <div
                  key={globalIdx}
                  onClick={() => selectEvent(globalIdx)}
                  className={`flex flex-col items-center cursor-pointer ${
                    isAbove ? 'pb-28' : 'pt-28'
                  } transform transition-transform duration-300 ${
                    isActive ? 'scale-110 z-20 opacity-100' : 'opacity-60'
                  }`}
                >
                  <img
                    src={evt.image}
                    alt={evt.week}
                    className="w-40 md:w-48 rounded-lg shadow-lg mb-2"
                  />
                  <div className="w-4 h-4 bg-mcbs-green rounded-full" />
                  <p className="mt-2 text-center text-gray-600 text-sm">{evt.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-12">
        {events.map((evt, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform duration-300"
            onClick={() => setCurrent(idx)}
          >
            <img
              src={evt.image}
              alt={evt.week}
              className={`w-40 rounded-lg shadow-md mb-3 ${
                current === idx ? 'scale-105' : 'opacity-80'
              }`}
            />
            <div className="w-3 h-3 bg-mcbs-green rounded-full" />
            <p className="mt-2 text-center text-gray-600 text-sm">{evt.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
