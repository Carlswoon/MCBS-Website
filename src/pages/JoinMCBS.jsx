import { useIsMobile } from '../hooks/useIsMobile';
import CountdownBanner from '../components/CountdownSection';

export default function Join() {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src="/src/assets/image3.jpg"
        alt="Mahjong Event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center px-6 py-20 min-h-screen">
        <div className="max-w-2xl text-white space-y-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Why Join Mahjong Soc?
          </h1>

          <ul className="space-y-6 text-left text-sm sm:text-base">
            <li className="flex">
              <span className="text-2xl sm:text-3xl mr-4">🀄</span>
              <div>
                <p className="font-semibold">Meet Like-Minded Players</p>
                <p>
                  Whether you’re a total beginner or a seasoned pro, find people who love Mahjong as much as you do.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl sm:text-3xl mr-4">🤝</span>
              <div>
                <p className="font-semibold">Network & Make Friends</p>
                <p>
                  Build connections across campus—classmates, seniors, even alumni.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl sm:text-3xl mr-4">🎉</span>
              <div>
                <p className="font-semibold">Host & Attend Events</p>
                <p>
                  From casual game nights to full-blown tournaments, you can organize and compete in a variety of formats.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-2xl sm:text-3xl mr-4">💡</span>
              <div>
                <p className="font-semibold">Improve Your Strategy</p>
                <p>
                  Join workshops, get coaching tips, and level up your game every week.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex justify-center space-x-6 text-sm sm:text-base">
            <div>
              <p className="font-bold text-xl sm:text-2xl">2</p>
              <p>Years running</p>
            </div>
            <div>
              <p className="font-bold text-xl sm:text-2xl">40+</p>
              <p>Internal members</p>
            </div>
            <div>
              <p className="font-bold text-xl sm:text-2xl">10+</p>
              <p>Events hosted</p>
            </div>
          </div>
        </div>
      </div>

      {!isMobile && <CountdownBanner />}
    </div>
  );
}
