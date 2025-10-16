import React, { useState } from 'react';
import { login } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="email" placeholder="Email" className="border p-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
