import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-mcbs-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold text-mcbs-navy mb-10">Contact Us</h1>

      <div className="flex gap-10 text-5xl text-mcbs-navy">
        <a
          href="https://www.instagram.com/unswmcbsoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mcbs-green transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/people/UNSW-Mahjong-Chinese-Boardgame-Society/61559099544815/#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mcbs-green transition duration-300"
        >
          <FaFacebook />
        </a>

        <a
          href="mailto:unswmcbsociety@gmail.com"
          className="hover:text-mcbs-green transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-mcbs-shadow text-sm mt-6 text-center px-4">
        Feel free to reach out to us on social media or drop us an email!
      </p>
    </div>
  );
}
