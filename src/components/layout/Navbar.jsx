import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cart';

export default function Navbar() {
  const items = useCartStore(state => state.items);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">ShoesStore</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="relative">
          Cart
          {items.length > 0 && <span className="absolute -top-2 -right-3 bg-red-500 rounded-full px-2 text-xs">{items.length}</span>}
        </Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
