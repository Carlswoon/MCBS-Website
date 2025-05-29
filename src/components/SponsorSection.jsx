import stm from '../assets/image1.jpg';
import arc from '../assets/image1.jpg';
import travelcation from '../assets/image1.jpg';
import fireball from '../assets/image1.jpg';
import rhythm from '../assets/image1.jpg';
import fourSeasons from '../assets/image1.jpg';

const sponsors = [
  { name: 'STM', logo: stm },
  { name: 'ARC Clubs', logo: arc },
  { name: 'Travelcation', logo: travelcation },
  { name: 'Fireball', logo: fireball },
  { name: 'Rhythm Japan', logo: rhythm },
  { name: 'Four Seasons', logo: fourSeasons },
];

export default function SponsorsSection() {
  return (
    <section className="bg-white border-t-4 border-blue-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">THANKS TO OUR SPONSORS</h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
