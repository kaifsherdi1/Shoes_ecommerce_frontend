import React from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../ui/Button';

export default function CartLineItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="flex justify-between items-center border-b p-2">
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>Qty: {item.quantity}</div>
      <Button onClick={() => removeItem(item.id)}>Remove</Button>
    </div>
  );
}
