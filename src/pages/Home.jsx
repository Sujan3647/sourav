import { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';

// Components
import Women from '../components/Women';
import Men from '../components/Men';
import Kids from '../components/Kids';
import BeautyCare from '../components/BeautyCare';
import Accessories from '../components/Accessories';
import Footwear from '../components/Footwear';
import GroceryKitchen from '../components/GroceryKitchen';
import Household from '../components/Household';
import SnacksDrinks from '../components/SnacksDrinks';

const bannerImages = [
  '/assets/banner1.png',
  '/assets/banner2.png',
  '/assets/banner3.png',
  '/assets/banner4.png',
  '/assets/banner5.png',
  '/assets/banner6.png',
];

const adImages = [
  'https://via.placeholder.com/600x100?text=Fashion+Sale',
  'https://via.placeholder.com/600x100?text=Electronics+Deals',
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState('');
  const [bannerIndex, setBannerIndex] = useState(0);
  const [adIndex, setAdIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    if (cart.length >= 20) {
      showTempMessage('❗ Cart limit reached (20 items).');
      return;
    }
    setCart([...cart, product]);
    showTempMessage('✅ Added to cart!');
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    showTempMessage('🗑️ Item removed');
  };

  const showTempMessage = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 2000);
  };

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    const adTimer = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % adImages.length);
    }, 6000);

    return () => {
      clearInterval(bannerTimer);
      clearInterval(adTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 pt-4 pb-24 relative">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm px-4 py-2 rounded-xl shadow-md z-50 transition-all duration-300">
          {notification}
        </div>
      )}

      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-md rounded-b-xl shadow flex items-center justify-between px-4 py-3">
        {/* Stylish Search Bar */}
        <div className="flex-1 relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, categories..."
            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 bg-white/40 backdrop-blur-md shadow-inner focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300 text-sm md:text-base"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Fancy Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="relative ml-3 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:scale-105 hover:bg-indigo-600 transition-transform duration-300 animate-bounce"
        >
          <FaShoppingCart className="text-xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Auto-scrolling Banners */}
      <div className="mt-6 space-y-3">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          {bannerImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === bannerIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="relative w-full h-24 md:h-28 lg:h-32 rounded-xl overflow-hidden shadow">
          {adImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Ad ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === adIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-2 pb-2">
          {[
            { name: 'Women', icon: 'svgs/women.svg' },
            { name: 'Men', icon: '/svgs/manlogo.svg' },
            { name: 'Kids', icon: 'svgs/kids.svg' },
            { name: 'Beauty', icon: '/svgs/beauty.svg' },
            { name: 'Accessories', icon: '/svgs/accessories.svg' },
            { name: 'Footwear', icon: '/svgs/footwear.svg' },
            { name: 'Grocery', icon: '/svgs/grocery.svg' },
            { name: 'Household', icon: '/svgs/households.svg' },
            { name: 'Snacks', icon: '/svgs/snacks.svg' },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[64px]">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-12 h-12 rounded-full p-2 border shadow hover:scale-110 transition"
              />
              <p className="text-xs text-gray-700 mt-1">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      <div className="space-y-8">
        <Women addToCart={addToCart} />
        <Men addToCart={addToCart} />
        <Kids addToCart={addToCart} />
        <BeautyCare addToCart={addToCart} />
        <Accessories addToCart={addToCart} />
        <Footwear addToCart={addToCart} />
        <GroceryKitchen addToCart={addToCart} />
        <Household addToCart={addToCart} />
        <SnacksDrinks addToCart={addToCart} />
      </div>

      {/* Slide-in Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl transform transition-transform duration-500 ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-indigo-600">🛒 Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-500 hover:text-red-600 transition"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3 overflow-y-auto flex-1 pr-2">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                >
                  <div className="w-40 truncate">
                    <p className="text-gray-800 text-sm font-medium truncate">{item.name}</p>
                    <p className="text-indigo-600 text-sm font-semibold">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div className="mt-4">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
