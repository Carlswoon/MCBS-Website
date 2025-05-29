import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'

export default function MoreInfoSection() {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-6 md:px-20"
      style={{
        backgroundImage: `url(${image2})`,
      }}
      >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Group Image Card */}
        <div className="w-full md:w-1/2">
          <img
            src={image1}
            alt="NZ Group Trip"
            className="rounded shadow-xl"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-md p-8 rounded shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">NEW ZEALAND 2024</h2>
          <p className="mb-3 text-gray-800">
            The countdown to winter in Queenstown is on! After a hugely successful trip in 2024, we’re once again ready
            for fresh powder, epic adventures and themed evening parties that only Newski can provide!
          </p>
          <p className="mb-3 text-gray-800">
            We’ll be heading back to Queenstown in September for more powder, punch and promiscuity.
          </p>
          <p className="mb-5 text-gray-800">
            Join NEWSKI on our BIGGEST TRIP EVER and experience 10 unforgettable days full of adventure in a place where
            no two days are the same!
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}