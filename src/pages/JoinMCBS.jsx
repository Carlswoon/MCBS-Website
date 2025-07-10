import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountdownBanner from '../components/CountdownSection';

export default function Join() {
  // auto‐enable in a month…
  const REOPEN_DATE = new Date('2025-08-10T00:00:00Z');
  const applicationsOpen = Date.now() >= REOPEN_DATE;

  const [form, setForm] = useState({ name: '', email: '' });
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted:', form);
  };

  return (
    <div className="relative h-screen w-full">
      {/* IMAGE BACKGROUND */}
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="/src/assets/image3.jpg"
      />

      {/* OVERLAY */}
      <div className="relative z-10 flex h-full items-center justify-between px-8 bg-black/60">
        
        {/* LEFT: “Why Join Mahjong Soc?” */}
        <div className="max-w-lg text-white space-y-8">
          <h1 className="text-5xl font-extrabold">Why Join Mahjong Soc?</h1>

          <ul className="space-y-4">
            <li className="flex">
              <span className="text-3xl mr-4">🀄</span>
              <div>
                <p className="font-semibold">Meet Like-Minded Players</p>
                <p className="text-sm">
                  Whether you’re a total beginner or a seasoned pro, find people who love Mahjong as much as you do.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-3xl mr-4">🤝</span>
              <div>
                <p className="font-semibold">Network & Make Friends</p>
                <p className="text-sm">
                  Build connections across campus—classmates, seniors, even alumni.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-3xl mr-4">🎉</span>
              <div>
                <p className="font-semibold">Host & Attend Events</p>
                <p className="text-sm">
                  From casual game nights to full-blown tournaments, you can organize and compete in a variety of formats.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="text-3xl mr-4">💡</span>
              <div>
                <p className="font-semibold">Improve Your Strategy</p>
                <p className="text-sm">
                  Join workshops, get coaching tips, and level up your game every week.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex space-x-6 text-lg">
            <div>
              <p className="font-bold text-2xl">2</p>
              <p>Years running</p>
            </div>
            <div>
              <p className="font-bold text-2xl">40+</p>
              <p>Active members</p>
            </div>
            <div>
              <p className="font-bold text-2xl">10+</p>
              <p>Events hosted</p>
            </div>
          </div>
        </div>

        {/* RIGHT: signup form */}
        <form
          onSubmit={handleSubmit}
          className="w-96 bg-white rounded-xl p-8 shadow-2xl space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {applicationsOpen ? 'Sign up now' : 'Applications Closed'}
          </h2>

          <fieldset disabled={!applicationsOpen} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring disabled:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring disabled:bg-gray-100"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!applicationsOpen}
            className={`w-full font-semibold py-2 rounded transition
              ${
                applicationsOpen
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }
            `}
          >
            {applicationsOpen ? 'Join Us' : 'Applications Closed'}
          </button>

          {!applicationsOpen && (
            <p className="mt-4 text-center text-red-600 text-sm">
              We are currently not accepting new director or subcommittee applications.
              <br />
              Keep up to date with openings on our {' '}
              <Link
                to="/contact"
                className="text-red-600 hover:text-green-600 underline"
              >
                social media.
              </Link>
            </p>
          )}
        </form>
      </div>
      <CountdownBanner />
    </div>
  );
}
