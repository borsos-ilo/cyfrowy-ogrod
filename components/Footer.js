import { FaLinkedin, FaInstagram, FaFlickr, FaTwitter, FaMastodon } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-cream">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-body mb-4 md:mb-0">
            © 2024 Borsos Ilona. Wszelkie prawa zastrzeżone.
          </p>
          
          <div className="flex space-x-4">
          <Link
            href={`/kolofon`}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 font-heading"
          >
            Kolofon
          </Link>
            <a
              href="https://www.linkedin.com/in/ilonaborsos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/borsos.ilo/"
              target="_blank"
              l="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.flickr.com/photos/199990665@N08/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaFlickr size={24} />
            </a>
            <a
              href="https://x.com/borsos_ilo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://mastodon.social/@borsos_ilo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FaMastodon size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;