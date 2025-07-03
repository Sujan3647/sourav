import { useState } from 'react';
import {
  FaArrowLeft,
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    address: 'Agartala, Tripura',
    name: 'Sujan',
  });

  const [cartItems, setCartItems] = useState([]);

  const updateQty = (id, action) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: action === 'inc' ? item.qty + 1 : Math.max(item.qty - 1, 1),
            }
          : item
      )
    );
  };

  const removeAll = () => setCartItems([]);

  const handleBuy = () => {
    navigate('/thankyou');
  };

  const addMockData = () => {
    const demo = Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 200 + 50),
      image: 'https://via.placeholder.com/100',
      qty: 1,
    }));
    setCartItems(demo);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!user && cartItems.length === 0) {
    return (
      <div className="px-4 pb-20 text-center mt-24 animate-fade-in">
        <FaShoppingCart className="text-6xl text-gray-400 animate-bounce mx-auto mb-4" />
        <p className="text-lg font-semibold">No Cart Items</p>
        <button
          onClick={() => navigate('/profile')}
          className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded transition"
        >
          Login to View Cart
        </button>
      </div>
    );
  }

  if (user && cartItems.length === 0) {
    return (
      <div className="px-4 pb-20 text-center mt-24 animate-fade-in">
        <FaShoppingCart className="text-6xl text-gray-400 animate-bounce mx-auto mb-4" />
        <p className="text-lg font-semibold">Your Cart is Empty</p>
        <button
          onClick={addMockData}
          className="mt-4 text-sm text-violet-600 underline hover:text-violet-800 transition"
        >
          ➕ Add Demo Products
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 pb-28 animate-fade-in">
      {/* Top Bar */}
      <div className="flex justify-between items-center mt-4 mb-3">
        <div
          className="flex items-center gap-2 text-lg font-bold text-emerald-600 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft />
          My Cart
        </div>
      </div>

      {/* Address */}
      <div className="flex justify-between items-center bg-emerald-50 p-3 rounded-md shadow mb-4">
        <p className="text-sm text-gray-700">
          Deliver to: <strong>{user.address}</strong>
        </p>
        <button
          onClick={() => navigate('/profile')}
          className="text-sm text-emerald-700 underline hover:text-emerald-900"
        >
          Change
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white rounded-xl p-3 shadow-md transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                className="w-16 h-16 rounded-md object-cover"
                alt={item.name}
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-emerald-600 font-bold">₹{item.price}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, 'dec')}
                  className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition"
                >
                  <FaMinus />
                </button>
                <span className="px-2">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, 'inc')}
                  className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition"
                >
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={() =>
                  setCartItems(cartItems.filter((p) => p.id !== item.id))
                }
                className="text-red-600 hover:text-red-700 text-sm"
              >
                <FaTrash className="inline mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Bar */}
      <div className="fixed bottom-14 left-0 right-0 bg-white border-t shadow-xl p-4 flex justify-between items-center z-40">
        <p className="font-semibold text-gray-700">Total: ₹{total}</p>
        <div className="flex gap-3">
          <button
            onClick={handleBuy}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md shadow transition"
          >
            Buy Now
          </button>
          <button
            onClick={removeAll}
            className="text-red-500 hover:text-red-700 text-sm underline"
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
