import React from 'react';
import { useCart } from '../../hooks/useCart';
import CartLineItem from '../../components/cart/CartLineItem';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function CartPage() {
  const { items } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map(item => <CartLineItem key={item.id} item={item} />)}
      {items.length > 0 && (
        <div className="mt-4">
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout">
            <Button>Proceed to Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
