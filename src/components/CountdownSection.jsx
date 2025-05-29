import { useEffect, useState } from 'react';

export default function CountdownSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // 📆 Set target date
  useEffect(() => {
    const target = new Date('2025-06-06T18:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-mcbs-navy text-mcbs-white text-center py-6 mt-16">
      <h2 className="text-lg font-semibold">COUNTDOWN TO NEXT MAHJONG EVENT</h2>
      <div className="text-4xl mt-2 font-bold">
        {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes {countdown.seconds} Seconds
      </div>
    </section>
  )
}