import React from 'react';

export default function SidebarFilters({ categories, onFilter }) {
  return (
    <div className="w-64 p-4 border-r">
      <h3 className="font-bold mb-2">Categories</h3>
      <ul>
        {categories.map(c => (
          <li key={c.id}>
            <button onClick={() => onFilter(c.id)} className="text-left w-full hover:text-blue-600">
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
