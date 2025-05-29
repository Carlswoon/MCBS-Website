import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-blue-900 py-8">
      <div className="flex justify-center items-center gap-6">
        <a href="mailto:newski@unsw.edu.au" className="text-white hover:opacity-80 transition">
          <Mail size={28} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition">
          <div className="bg-white rounded-full p-1">
            <Facebook size={24} className="text-blue-900" />
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition">
          <Instagram size={28} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition">
          <Youtube size={28} />
        </a>
      </div>
    </footer>
  );
}
