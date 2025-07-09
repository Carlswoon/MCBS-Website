import { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // For close icon

export default function CountdownBanner() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = new Date('2025-07-18T18:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setVisible(false);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-mcbs-white text-mcbs-shadow rounded-full shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 z-50 border border-mcbs-blue">
      {/* Left text */}
      <p className="text-center md:text-left text-sm sm:text-base font-medium">
        Sign up for Mahjong Roulette and secure your seat for Week 2’s exclusive event! 🀄
      </p>

      {/* Timer */}
      <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-mcbs-navy">
        <div className="bg-mcbs-blue/70 px-2 py-1 rounded-md">
          {String(countdown.days).padStart(2, '0')}
          <span className="ml-1 font-sans">Days</span>
        </div>
        :
        <div className="bg-mcbs-blue/70 px-2 py-1 rounded-md">
          {String(countdown.hours).padStart(2, '0')}
          <span className="ml-1 font-sans">Hours</span>
        </div>
        :
        <div className="bg-mcbs-blue/70 px-2 py-1 rounded-md">
          {String(countdown.minutes).padStart(2, '0')}
          <span className="ml-1 font-sans">Minutes</span>
        </div>
        :
        <div className="bg-mcbs-blue/70 px-2 py-1 rounded-md">
          {String(countdown.seconds).padStart(2, '0')}
          <span className="ml-1 font-sans">Seconds</span>
        </div>
      </div>

      {/* Register Button */}
      <a
        href="/events"
        className="bg-mcbs-navy hover:bg-mcbs-green text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-full transition"
      >
        Register Now
      </a>

      {/* Close Button (optional) */}
      <button
        className="absolute top-2 right-4 text-mcbs-shadow/50 hover:text-mcbs-shadow"
        onClick={() => setVisible(false)}
      >
        <X size={16} />
      </button>
    </div>
  );
}
