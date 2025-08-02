'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { show } from '../../utils/toastHelper';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      show('success', 'Login Successful!');
      
        router.push('/browse');
      
      
    } else {
      show('error', data.message || 'Login failed.');
    }
  } catch (error) {
    show('error', 'Something went wrong.');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card p-4 shadow-lg rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
      <h2 className="text-center mb-4 fw-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          className="form-control form-control-lg mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control form-control-lg mb-4"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className='text-center'>
     <button type="submit" className="py-2 fw-bold custom-btn" disabled={loading}>
          {loading ? <span className="spinner-border spinner-border-sm" /> : 'Login'}
      </button>

        </div>
      </form>
    </div>
  </div>
  );
}
