import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 flex flex-col md:flex-row justify-between gap-12">
      {/* Text Block */}
      <div className="md:w-1/2">
        <h2 className="text-6xl font-extrabold text-mcbs-navy mb-6">NEWSKI</h2>
        <p className="text-gray-700 mb-4">
          Where some of UNSW’s finest hit Jägerbombs harder than we hit the slopes (or occasionally the floor).
        </p>
        <p className="text-gray-700 mb-4">
          As UNSW’s largest hybrid sport/social society, we are renowned for our yearly events – Open Session & End of
          Session Parties, PubCrawl, O-Week, BBQs, Pre-Bevvies for Roundhouse Events, Snowball and of course our
          infamous ANNUAL NZ TRIP, where we take 90 of UNSW’s finest to the pristine slopes of Queenstown for 10 days
          of international mischief, powder and partying plus our ANNUAL JAPAN TRIP. This next one will take 30 of you
          lot to Hakuba and Tokyo for some more slopes and sendy nonsense.
        </p>
        <p className="text-gray-700">
          Whether you are a total novice on the slopes or a Canadian-bred WinterXGames hopeful, NEWSKI has a place for
          anyone with an aptitude for snow sports and hard liquor.
        </p>
      </div>

      {/* Image Stack */}
      <div className="relative md:w-1/2 flex justify-center items-center">
        <img
          src={image2}
          alt="Top photo"
          className="w-[300px] rotate-[5deg] shadow-xl absolute top-0 left-12 z-10"
        />
        <img
          src={image3}
          alt="Bottom photo"
          className="w-[300px] rotate-[-3deg] shadow-xl absolute top-40 left-32"
        />
      </div>
    </section>
  )
}