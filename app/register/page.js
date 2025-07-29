'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { show } from '../../utils/toastHelper';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      show('success', data.message || 'Registered successfully!');
      router.push('/login');
    } else {
      show('error', data.message || 'Registration failed.');
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
      <h2 className="text-center mb-4 fw-bold text-warning">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control form-control-lg mb-3"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="form-control form-control-lg mb-3"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control form-control-lg mb-4"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <div className='text-center'>
<button type="submit" className="fw-bold py-2 custom-btn" disabled={loading}>
  {loading ? <span className="spinner-border spinner-border-sm" /> : 'Register'}
</button>

        </div>
      </form>
      <p className="mt-3 text-center">
        Already a user? <Link href="/login" className="text-decoration-none custom-link">Login here</Link>
      </p>
    </div>
  </div>
  );
}
