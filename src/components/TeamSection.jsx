import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import kaia from '../assets/image1.jpg';
import alex from '../assets/image2.jpg';
import rebecca from '../assets/image3.jpg';
import riley from '../assets/image1.jpg';
import remy from '../assets/image2.jpg';
import ned from '../assets/image3.jpg';
import daniel from '../assets/image1.jpg';
import tanay from '../assets/image2.jpg';

const teamMembers = [
  { name: 'Kaia Saxby', role: 'El Presidente', image: kaia },
  { name: 'Alex Bohm', role: 'Vice Pres!', image: alex },
  { name: 'Rebecca Suthers', role: 'Money Bags', image: rebecca },
  { name: 'Riley Hassall', role: 'NZ Daddy', image: riley },
  { name: 'Remy Waller', role: 'Secretary', image: remy },
  { name: 'Ned O\'Keefe', role: 'Sponsorships', image: ned },
  { name: 'Daniel Ingle', role: 'Japan Coordinator', image: daniel },
  { name: 'Tanay Kumar', role: 'Social Events Subcom', image: tanay },
  { name: 'Remy Waller', role: 'Secretary', image: remy },
  { name: 'Ned O\'Keefe', role: 'Sponsorships', image: ned },
  { name: 'Daniel Ingle', role: 'Japan Coordinator', image: daniel },
  { name: 'Tanay Kumar', role: 'Social Events Subcom', image: tanay },
  { name: 'Daniel Ingle', role: 'Japan Coordinator', image: daniel },
  { name: 'Tanay Kumar', role: 'Social Events Subcom', image: tanay },
];

const CARDS_PER_PAGE = 4;

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(teamMembers.length / CARDS_PER_PAGE);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = page * CARDS_PER_PAGE;
  const visibleMembers = teamMembers.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <section className="bg-slate-100 py-20 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">MEET THE TEAM</h2>

        {/* Carousel */}
        <div className="flex items-center justify-center relative">
          {/* Left Arrow */}
          <button onClick={prevPage} className="absolute left-0 p-2 md:p-4">
            <ChevronLeft size={32} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full px-12">
            {visibleMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-40 h-40 object-cover rounded-xl shadow" />
                <h3 className="mt-4 text-lg font-bold text-blue-900">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={nextPage} className="absolute right-0 p-2 md:p-4">
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${idx === page ? 'bg-blue-900' : 'bg-gray-400'} transition-all`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition">
            GET TO KNOW US
          </button>
        </div>
      </div>
    </section>
  );
}
