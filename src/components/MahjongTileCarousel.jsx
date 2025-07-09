import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const carouselItems = [
  { src: '/mahjong/joinMCBS.png', route: '/join' },
  { src: '/mahjong/events.png', route: '/events' },
  { src: '/mahjong/meetTheTeam.png', route: '/team' },
  { src: '/mahjong/ourSponsors.png', route: '/sponsors' },
  { src: '/mahjong/contactUs.png', route: '/contact' },
  { src: '/mahjong/event.png', route: '/events' },
];

const Carousel3D = () => {
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);

  // Configs
  const radius = 240;
  const autoRotate = true;
  const rotateSpeed = -60;
  const imgWidth = 120;
  const imgHeight = 170;

  let tX = 0;
  let tY = 0;
  let desX = 0;
  let desY = 0;

  useEffect(() => {
    const drag = dragContainerRef.current;
    const spin = spinContainerRef.current;
    const imgs = spin.querySelectorAll('img');
    const vids = spin.querySelectorAll('video');
    const elements = [...imgs, ...vids];

    spin.style.width = `${imgWidth}px`;
    spin.style.height = `${imgHeight}px`;

    const ground = document.getElementById('ground');
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;

    setTimeout(() => {
      elements.forEach((el, i) => {
        el.style.transform = `rotateY(${i * (360 / elements.length)}deg) translateZ(${radius}px)`;
        el.style.transition = 'transform 1s';
        el.style.transitionDelay = `${(elements.length - i) / 4}s`;
      });
    }, 1000);

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    const applyTransform = () => {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      drag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    document.onpointerdown = e => {
      let sX = e.clientX, sY = e.clientY;
      document.onpointermove = e => {
        const nX = e.clientX, nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform();
        sX = nX;
        sY = nY;
      };
      document.onpointerup = () => {
        const interval = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform();
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(interval);
          }
        }, 17);
        document.onpointermove = null;
        document.onpointerup = null;
      };
    };

    document.onwheel = e => {
      radius += e.deltaY / -3;
      setTimeout(() => {
        elements.forEach((el, i) => {
          el.style.transform = `rotateY(${i * (360 / elements.length)}deg) translateZ(${radius}px)`;
        });
      }, 1);
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-[#111] overflow-hidden"
      style={{ perspective: '500px' }}
    >
      <div id="drag-container" ref={dragContainerRef} className="relative flex transform rotate-x-[10deg]" style={{ transformStyle: 'preserve-3d' }}>
        <div id="spin-container" ref={spinContainerRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
          {carouselItems.map((item, i) => (
           <Link
              key={i}
              to={item.route}
              className="absolute left-0 top-0 w-full h-full transform-style preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover rounded-xl transition duration-300 hover:shadow-[0_0_15px_#fffd] reflect-below"
              />
            </Link>
          ))}
          <a href="/mahjong/mcbs_logo.png" target="_blank">
            <img src="/mahjong/mcbs_logo.png" alt="" className="absolute left-0 top-0 w-full h-full shadow-lg" />
          </a>
          <video
            controls
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 w-full h-full shadow-lg"
          >
            <source src="/mahjong/video.mp4" type="video/mp4" />
          </video>
          <p className="absolute top-full left-1/2 text-white transform -translate-x-1/2 rotate-x-90 font-serif">Welcome to MCBS!</p>
        </div>
        <div
          id="ground"
          className="absolute top-full left-1/2 transform -translate-x-1/2 rotate-x-90"
          style={{ background: 'radial-gradient(circle, #9993, transparent)' }}
        >
          <img
            src="/mahjong/mcbs_logo.png"
            alt="MCBS Logo"
            className="absolute top-1/2 left-1/2 w-28 h-28 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
