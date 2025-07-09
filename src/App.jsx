import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/MeetTheTeam';
import Sponsors from './pages/OurSponsors';
import Contact from './pages/ContactUs';
import Join from './pages/JoinMCBS';
import Marketing from './pages/team/Marketing';
import Execs from './pages/team/Execs';
import EventsTeam from './pages/team/EventsTeam'; 
import SponsorsTeam from './pages/team/SponsorsTeam';

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
        <Route path="/team/events" element={<EventsTeam />} />
        <Route path="/team/sponsors" element={<SponsorsTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
