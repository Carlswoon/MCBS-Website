import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-mcbs-navy py-8">
      <div className="flex justify-center items-center gap-6">
        <a
          href="mailto:newski@unsw.edu.au"
          className="text-white hover:opacity-80 transition"
        >
          <FaEnvelope size={28} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition"
        >
          <div className="bg-white rounded-full p-1">
            <FaFacebookF size={20} className="text-mcbs-navy" />
          </div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition"
        >
          <FaYoutube size={28} />
        </a>
      </div>
    </footer>
  );
}
