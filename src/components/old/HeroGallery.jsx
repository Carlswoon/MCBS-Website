import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from '../assets/images/societyPhoto.jpg';
import image2 from '../assets/image1.jpg';
import image3 from '../assets/image2.jpg';

export default function HeroGallery() {
  const slides = [
    {
      image: image1,
      title: 'Mahjong Roulette',
      subtitle: 'Week 2 · June 6 · 3:00pm – 5:00pm',
      button: 'Learn More',
      link: '/events',
    },
    {
      image: image2,
      title: 'Week 7 Game Night',
      subtitle: 'June 18 · 3:00pm – 5:00pm',
      button: 'View Details',
      link: '/events',
    },
    {
      image: image3,
      title: 'Join MCBS Today',
      subtitle: 'Be part of UNSW’s chillest boardgame society',
      button: 'Join Now',
      link: '/join',
    },
  ];

  return (
    <section className="relative w-full bg-black pt-20">
      <div className="max-w-screen-xl mx-auto h-[400px] sm:h-[500px] md:h-[540px] relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-75 rounded-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-end px-6 sm:px-12 text-right text-mcbs-white">
                  <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl max-w-md shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
                    <p className="mt-2 text-base md:text-lg">{slide.subtitle}</p>
                    <a
                      href={slide.link}
                      className="inline-block mt-4 bg-mcbs-navy hover:bg-mcbs-green text-white px-6 py-2 rounded-lg font-semibold transition"
                    >
                      {slide.button}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
