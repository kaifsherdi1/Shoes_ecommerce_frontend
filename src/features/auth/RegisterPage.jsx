import React, { useState } from 'react';
import { register } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function RegisterPage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirmation,setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password, password_confirmation: passwordConfirmation });
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" placeholder="Name" className="border p-2 w-full" value={name} onChange={e=>setName(e.target.value)} />
        <input type="email" placeholder="Email" className="border p-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="border p-2 w-full" value={passwordConfirmation} onChange={e=>setPasswordConfirmation(e.target.value)} />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
