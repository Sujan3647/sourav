import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';

// Category Components
import Women from '../components/Women';
import Men from '../components/Men';
import Kids from '../components/Kids';
import BeautyCare from '../components/BeautyCare';
import Accessories from '../components/Accessories';
import Footwear from '../components/Footwear';
import GroceryKitchen from '../components/GroceryKitchen';
import Household from '../components/Household';
import SnacksDrinks from '../components/SnacksDrinks';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState('');

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 pt-4 pb-24 relative">

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm px-4 py-2 rounded-xl shadow-md z-50 transition-all duration-300">
          {notification}
        </div>
      )}

      {/* Top Bar */}
      <div className="sticky top-0 bg-white z-40 py-3 mb-4 shadow-md flex items-center gap-4 px-2 rounded-b-xl">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full shadow-inner">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </div>
        <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
          <FaShoppingCart className="text-2xl text-indigo-600" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className="mb-5 space-y-3">
        <img
          src="https://via.placeholder.com/600x200"
          alt="Banner"
          className="w-full h-40 object-cover rounded-xl shadow-sm"
        />
        <img
          src="https://via.placeholder.com/600x100"
          alt="Ad"
          className="w-full h-24 object-cover rounded-xl shadow-sm"
        />
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

      {/* Product Categories */}
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

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center px-4 transition-all">
          <div className="bg-white rounded-xl p-4 w-full max-w-md shadow-lg animate-fade-down relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowCart(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-lg font-bold mb-4 text-indigo-700">🛒 Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {cart.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b pb-1 text-sm"
                  >
                    <span className="text-gray-800 truncate w-32">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-600 font-semibold text-sm">₹{item.price}</span>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
