import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-mcbs-green fixed top-0 w-full z-50 text-mcbs-navy shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">        
        {/* LOGO on the left */}
        <Link to="/">
          <img src={logo} alt="MCBS Logo" className="h-12 w-auto cursor-pointer" />
        </Link>
        <div className="flex gap-6 font-semibold">
          <Link to="/join" className="hover:text-mcbs-white transition">JOIN MCBS</Link>
          <Link to="/events" className="hover:text-mcbs-white transition">EVENTS</Link>
          <Link to="/team" className="hover:text-mcbs-white transition">MEET THE TEAM</Link>
          <Link to="/sponsors" className="hover:text-mcbs-white transition">OUR SPONSORS</Link>
          <Link to="/contact" className="hover:text-mcbs-white transition">CONTACT US</Link>
        </div>
      </nav>
    </header>
  )
}
