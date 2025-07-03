import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaThLarge, FaUser } from 'react-icons/fa';

export default function Footer() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Categories', path: '/categories', icon: <FaThLarge /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-t h-20 px-4 sm:px-8">
      <div className="flex justify-between items-center h-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group w-1/3 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-indigo-600 scale-110 font-semibold'
                  : 'text-gray-500 hover:text-indigo-500'
              }`}
            >
              <span
                className={`text-2xl sm:text-3xl transition-transform duration-300 ${
                  isActive
                    ? 'animate-[bounce_0.6s_ease-in-out] text-indigo-600 drop-shadow-md'
                    : 'group-hover:scale-110'
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-[11px] sm:text-sm mt-1 tracking-wide transition-all duration-200 ${
                  isActive ? 'text-indigo-700' : 'group-hover:opacity-90'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
