import logo from '../assets/mcbs_logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClick(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className="bg-mcbs-green fixed top-0 w-full z-50 text-mcbs-navy shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="MCBS Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-mcbs-navy focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-semibold items-center">
          {/* ABOUT dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen(open => !open)}
              className="flex items-center hover:text-mcbs-white transition"
            >
              ABOUT
              <svg
                className="ml-1 h-4 w-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 7.5l4.5 4.5 4.5-4.5h-9z" />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-mcbs-navy rounded shadow-lg z-10">
                <Link to="/about" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-mcbs-green hover:text-mcbs-white cursor-pointer">
                  About Us
                </Link>
                <Link to="/team" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-mcbs-green hover:text-mcbs-white cursor-pointer">
                  Meet the Team
                </Link>
                <Link to="/sponsors" onClick={() => setAboutOpen(false)} className="block px-4 py-2 hover:bg-mcbs-green hover:text-mcbs-white cursor-pointer">
                  Our Sponsors
                </Link>
              </div>
            )}
          </div>

          <Link to="/join" className="hover:text-mcbs-white transition">JOIN MCBS</Link>
          <Link to="/events2" className="hover:text-mcbs-white transition">EVENTS</Link>
          <Link to="/contact" className="hover:text-mcbs-white transition">CONTACT US</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-mcbs-green px-4 pb-4 pt-2 text-mcbs-navy font-semibold space-y-2 shadow-lg">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">About Us</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">Meet the Team</Link>
          <Link to="/sponsors" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">Our Sponsors</Link>
          <Link to="/join" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">Join MCBS</Link>
          <Link to="/events2" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">Events</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-mcbs-white">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
