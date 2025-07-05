// src/components/SubCategorySection.jsx
import React from 'react';

export default function SubCategorySection({ title, subTitle, items = [], onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{title}</h2>
      {subTitle && <p className="text-sm text-gray-600 mb-3">{subTitle}</p>}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect?.(item)}
            className="flex flex-col items-center p-2 bg-white border shadow rounded-lg hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-full border"
            />
            <span className="text-xs text-gray-700 mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
