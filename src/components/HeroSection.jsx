import image1 from '../assets/images/societyPhoto.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <img
        src={image1}
        alt="Coronet Peak"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-end pr-10 text-mcbs-white text-right">
        <h1 className="text-4xl font-extrabold">Mahjong Roulette</h1>
        <p className="text-xl mt-2">Week 2 June 6 3:00pm - 5:00pm</p>
        <button className="mt-4 bg-mcbs-navy px-5 py-2 rounded font-semibold hover:bg-mcbs-green transition">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}