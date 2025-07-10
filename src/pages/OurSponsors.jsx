import { Link } from 'react-router-dom';

export default function OurSponsors() {
  return (
    <div className="pt-25 pb-16 px-8 space-y-12">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-center">Our Sponsors</h1>

      {/* Sponsors grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Gong Grocer */}
        <div className="flex flex-col items-center text-center space-y-4">
          <a
            href="https://gonggrocer.com.au/pages/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/sponsors/gonggrocer1.png"
              alt="Gong Grocer Logo"
              className="max-h-32 object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <h2 className="text-2xl font-semibold">Gong Grocer</h2>
          <p className="text-gray-600">
            Our official grocery partner—fueling Mahjong Soc events with fresh
            snacks & supplies.  
            <a
              href="https://gonggrocer.com.au/pages/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline ml-1"
            >
              Visit site →
            </a>
          </p>
        </div>

        {/* Alexius Communications */}
        <div className="flex flex-col items-center text-center space-y-4">
          <a
            href="https://alexiuscomms.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/sponsors/alexiuscomm.png"
              alt="Alexius Communications Logo"
              className="max-h-32 object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <h2 className="text-2xl font-semibold">Alexius Communications</h2>
          <p className="text-gray-600">
            Our marketing & outreach sponsor—helping us share Mahjong Soc with
            the world.  
            <a
              href="https://alexiuscomms.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline ml-1"
            >
              Visit site →
            </a>
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-30">
        <p className="text-lg mb-4">
          Interested in partnering with Mahjong Soc?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Become a Sponsor
        </Link>
      </div>
    </div>
  );
}
