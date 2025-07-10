import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center">
        <img
          src="/mahjong/people/marketing/Carlson.png"
          alt="Mahjong Soc gathering"
          className="absolute inset-0 object-cover w-full h-full object-cover object-[position:50%_40%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-20 text-5xl font-extrabold text-white">
          About Mahjong Soc
        </h1>
      </section>

      {/* MISSION */}
      <section className="px-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">What we're all about</h2>
        <p className="text-lg text-gray-700">
        <p className="text-lg text-gray-700 text-center">
          🎉 Welcome to Mahjong Soc – the place where tile‐flipping pros and total newbs come together to laugh, learn, and spin up epic hands!  
          Whether you’re chasing that perfect “pong,” here for the snacks 🍜, or just keen to meet new mates, you’ll feel right at home!
        </p>

        </p>
      </section>

      {/* VALUES */}
      <section className="px-8 bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: '🀄',
              title: 'Community',
              desc: 'A welcoming space where every player belongs.',
            },
            {
              icon: '🏆',
              title: 'Competition',
              desc: 'Friendly tournaments that sharpen your skills.',
            },
            {
              icon: '🤝',
              title: 'Connection',
              desc: 'Network with peers, seniors, and alumni.',
            },
          ].map((v, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <div className="text-4xl">{v.icon}</div>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
        <div className="relative">
          <div className="border-l-2 border-green-600 absolute h-full left-1/2 transform -translate-x-1/2" />
          {[
            {
              year: 2023,
              text: 'Founded by a passionate group of UNSW students.',
            },
            {
              year: 2024,
              text: 'Hosted our first campus-wide tournament with 30+ players.',
            },
            {
              year: 2025,
              text: 'Grew to 50+ active members and launched strategy workshops.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`mb-8 flex w-full justify-${idx % 2 === 0 ? 'start' : 'end'} items-center`}
            >
              <div className="w-1/2 p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold">{item.year}</h4>
                <p className="mt-1 text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-green-600">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to shuffle the tiles?
        </h2>
        <Link
          to="/join"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
        >
          Join Mahjong Soc
        </Link>
      </section>

    </div>
  );
}
