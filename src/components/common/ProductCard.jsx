import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, name, price, thumbnail }) {
  return (
    <Link to={`/products/${id}`} className="border p-2 rounded hover:shadow">
      <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
      <h2 className="font-bold mt-2">{name}</h2>
      <p className="text-gray-700">${price}</p>
    </Link>
  );
}
