// components/AuthModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AuthModal = ({ type, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const url = `${API_BASE}/api/auth/${type}`;
    const payload = type === 'login' ? { email, password } : { email, password, name, role };

    try {
      const res = await axios.post(url, payload);
      console.log('Success:', res.data);
      localStorage.setItem('token', res.data.token);
      alert(`Successfully ${type === 'login' ? 'logged in' : 'signed up'}!`);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          {type === 'signup' && (
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-2 border rounded-md">
                <option value="customer">Customer</option>
                <option value="professional">Professional</option>
              </select>
            </div>
          )}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            {type === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;