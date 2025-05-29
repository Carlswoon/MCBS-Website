import CountdownSection from '../components/CountdownSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MoreInfoSection from '../components/MoreInfoSection';
import TeamSection from '../components/TeamSection';
import YouTubeEmbed from '../components/VideoSection';
import SponsorsSection from '../components/SponsorSection';
import FooterSection from '../components/LastSection.jsx';

export default function Home() {
  return (
    <>
      <CountdownSection />
      <HeroSection />
      <AboutSection />
      <MoreInfoSection />
      <TeamSection />
      <YouTubeEmbed />
      <SponsorsSection />
      <FooterSection />
    </>
  );
}