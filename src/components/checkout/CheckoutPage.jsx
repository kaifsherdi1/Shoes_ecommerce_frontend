import React from 'react';
import Steps from '../../components/checkout/Steps';
import Summary from '../../components/checkout/Summary';
import Button from '../../components/ui/Button';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Steps currentStep={0} />
      <div className="flex gap-4">
        <div className="flex-1">
          {/* Shipping/payment form placeholders */}
          <p>Shipping & Payment Form Here</p>
        </div>
        <Summary />
      </div>
      <Button className="mt-4">Place Order</Button>
    </div>
  );
}
