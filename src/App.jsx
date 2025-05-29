import image1 from './assets/image1.jpg';

import Navbar from './components/Navbar';
import CountdownSection from './components/CountdownSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MoreInfoSection from './components/MoreInfoSection';
import TeamSection from './components/TeamSection';
import YouTubeEmbed from './components/VideoSection';
import SponsorsSection from './components/SponsorSection';
import FooterSection from './components/footer';

function App() {
  return (
    <div className="font-sans">
      <>
        <Navbar />
        <CountdownSection />
        <HeroSection />
        <AboutSection />
        <MoreInfoSection />
        <TeamSection />
        <YouTubeEmbed />
        <SponsorsSection />
        <FooterSection />
      </>
    </div>
  );
}

export default App;
