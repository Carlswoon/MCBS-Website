import image1 from '../assets/images/societyPhoto.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <img
        src={image1}
        alt="MCBS Society"
        className="w-full h-full object-cover brightness-75"
      />
      {/* Optional gradient bottom fade to white */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
