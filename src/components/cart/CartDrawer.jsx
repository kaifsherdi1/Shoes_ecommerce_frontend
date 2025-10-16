import React from 'react';
import { useCart } from '../../hooks/useCart';
import CartLineItem from './CartLineItem';

export default function CartDrawer() {
  const { items, clear } = useCart();

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.map(item => <CartLineItem key={item.id} item={item} />)}
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={clear}>
        Clear Cart
      </button>
    </div>
  );
}
