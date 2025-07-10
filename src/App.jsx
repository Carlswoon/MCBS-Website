import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Events2 from './pages/Events2';
import About from './pages/aboutUs';
import Team from './pages/MeetTheTeam';
import Sponsors from './pages/OurSponsors';
import Contact from './pages/ContactUs';
import Join from './pages/JoinMCBS';
import Marketing from './pages/team/Marketing';
import Execs from './pages/team/Execs';
import EventsTeam from './pages/team/EventsTeam'; 
import SponsorsTeam from './pages/team/SponsorsTeam';
import Internals from './pages/team/Internals';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/marketing" element={<Marketing />} />
        <Route path="/team/execs" element={<Execs />} />
        <Route path="/team/internals" element={<Internals />} />
        <Route path="/team/events" element={<EventsTeam />} />
        <Route path="/team/sponsors" element={<SponsorsTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/events2" element={<Events2 />} />
      </Routes>
    </>
  );
}

export default App;
