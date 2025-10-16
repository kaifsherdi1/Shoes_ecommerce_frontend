import React from 'react';
import { useCart } from '../../hooks/useCart';

export default function Summary() {
  const { items } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="border p-4">
      <h2 className="font-bold mb-2">Order Summary</h2>
      {items.map(i => <div key={i.id} className="flex justify-between">{i.name} x {i.quantity} <span>${(i.price*i.quantity).toFixed(2)}</span></div>)}
      <hr className="my-2" />
      <div className="font-bold flex justify-between">Total: ${total.toFixed(2)}</div>
    </div>
  );
}
