import CountdownBanner from '../components/CountdownSection';
import Carousel3D from '../components/MahjongTileCarousel';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Carousel3D />
      {!isMobile && <CountdownBanner />}
    </>
  );
}