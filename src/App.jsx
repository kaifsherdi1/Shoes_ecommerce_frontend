import { Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import ProductListPage from './features/products/ProductListPage';
import ProductDetailsPage from './features/products/ProductDetailsPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';
import ProfilePage from './features/account/ProfilePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
