import { useState, useEffect } from 'react';
import { FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa';

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
      <div className="sticky top-0 bg-white z-40 py-3 mb-4 shadow-md rounded-b-xl flex items-center justify-between px-2 gap-3">
        {/* Beautified Search Bar */}
        <div className="flex items-center w-full max-w-xl mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner transition-all duration-300 text-sm md:text-base"
          />
          <FaSearch className="absolute left-4 text-gray-500 text-sm md:text-base" />
        </div>

        {/* New Cart Icon */}
        <button
          onClick={() => setShowCart(true)}
          className="relative flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full shadow hover:bg-indigo-200 transition"
        >
          <FaShoppingBag className="text-lg" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Auto-scrolling Banners */}
      <div className="mb-6 space-y-3">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          {bannerImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
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

      {/* Scrollable Categories */}
      <div className="mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-1 pb-2">
          {[
            { name: "Women", icon: "https://via.placeholder.com/50?text=W" },
            { name: "Men", icon: "https://via.placeholder.com/50?text=M" },
            { name: "Kids", icon: "https://via.placeholder.com/50?text=K" },
            { name: "Beauty", icon: "https://via.placeholder.com/50?text=B" },
            { name: "Accessories", icon: "https://via.placeholder.com/50?text=A" },
            { name: "Footwear", icon: "https://via.placeholder.com/50?text=F" },
            { name: "Grocery", icon: "https://via.placeholder.com/50?text=G" },
            { name: "Household", icon: "https://via.placeholder.com/50?text=H" },
            { name: "Snacks", icon: "https://via.placeholder.com/50?text=S" },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[64px]">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-12 h-12 rounded-full border shadow p-1 hover:scale-105 transition"
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
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-indigo-600">🛒 Your Cart</h2>
            <button
              className="text-gray-500 hover:text-red-500 transition"
              onClick={() => setShowCart(false)}
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3 overflow-y-auto flex-1">
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
