import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Household({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/Household.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load Household.json", err));
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-indigo-700 mb-3">Household Essentials</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-2 shadow hover:shadow-md transition-transform hover:scale-[1.02]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <div className="flex justify-between items-center mb-1">
              <p className="text-indigo-600 font-semibold text-sm">
                ₹{product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-1 rounded-full text-sm"
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-xs text-gray-700 truncate">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
