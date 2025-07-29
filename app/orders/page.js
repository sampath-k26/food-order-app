'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/user-orders');
        const data = await res.json();

        if (res.ok) {
          setOrders(data.orders);
        } else {
          toast.error(data.message || 'Failed to fetch orders');
        }
      } catch (err) {
        toast.error('Something went wrong');
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading orders...</span>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h4>No past orders found.</h4>
        <button
          className="btn btn-primary mt-3"
          onClick={() => router.push('/browse')}
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Your Past Orders</h3>
        <button className="btn btn-primary" onClick={() => router.push('/browse')}>
          Back to Browse
        </button>
      </div>

      {orders.map((order, idx) => (
        <div key={order._id} className="card p-3 mb-3">
          <h5>Order #{idx + 1}</h5>
          <small className="text-muted">
            Placed on {new Date(order.createdAt).toLocaleString()}
          </small>
          <ul className="mt-2">
            {order.items.map((item, i) => (
              <li key={i}>
                {item.title} × {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="fw-semibold text-success mt-2">Total: ₹{order.total}</p>
        </div>
      ))}
    </div>
  );
}
