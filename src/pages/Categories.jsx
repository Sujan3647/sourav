import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const categories = [
  "Women", "Men", "Kids", "Beauty & Personal Care",
  "Accessories", "Footwear", "Grocery & Kitchen",
  "Household Essentials", "Snacks & Drinks"
];

const generateProducts = (category) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${category}-${i + 1}`,
    name: `${category} Product ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 100,
    image: "https://via.placeholder.com/150"
  }));

export default function Categories() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.length >= 20) {
      alert("🛑 Cart limit reached (20 items). Remove something first.");
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div className="px-4 pt-4 pb-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen animate-fade-in">
      {categories.map((category) => {
        const products = generateProducts(category);
        return (
          <div key={category} className="mb-10">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border bg-white shadow hover:shadow-lg transition-all duration-300 p-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-indigo-600 font-semibold text-sm">₹{product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-xs mt-1 text-gray-700 line-clamp-2">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
