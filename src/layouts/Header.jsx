import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 px-4 sm:px-6 flex items-center justify-between animate-fade-down">
      
      {/* 🖼 Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Honey Well Logo"
          className="h-10 sm:h-12 w-auto max-w-[160px] object-contain transition-transform hover:scale-105"
        />
      </Link>

      {/* 🔘 Right Buttons */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* 🟢 Buy on WhatsApp */}
        <a
          href="https://wa.me/918798634773"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-green-100 text-green-700 font-medium sm:font-semibold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in"
        >
          <span className="text-green-800 animate-float-slow">Buy on</span>
          <FaWhatsapp className="text-lg sm:text-xl text-green-600 animate-float-slow" />
        </a>

        {/* ❓ Help Center */}
        <Link
          to="/help"
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm text-xs sm:text-sm transition-all duration-300 ${
            location.pathname === '/help'
              ? 'bg-green-600 text-white font-semibold'
              : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
          }`}
        >
          <FaQuestionCircle className="text-lg sm:text-xl" />
          <span className="whitespace-nowrap">Help Center</span>
        </Link>
      </div>
    </header>
  );
}
