'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart, clearCart } from '../../redux/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function CartPage() {
  const cart = useSelector((state) => state.cart?.items || []);
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const router = useRouter();

  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const [checkingOut, setCheckingOut] = useState(false);

const handleCheckout = async () => {
  setCheckingOut(true);
  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, total }),
    });

    let data;
    try {
      data = await res.json();
    } catch (e) {
      const text = await res.text();
      console.error('Unexpected non-JSON response:', text);
      toast.error('Unexpected server response');
      return;
    }

    if (!res.ok) {
      toast.error(data.message || 'Something went wrong');
      return;
    }

    toast.success('Order placed successfully!');
    dispatch(clearCart());
    router.push('/browse');
  } catch (err) {
    console.error('Checkout error:', err);
    toast.error('Checkout failed. Please try again.');
  } finally {
    setCheckingOut(false);
  }
};

  
  

 
  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <button className="btn btn-warning mt-3" onClick={() => router.push('/browse')}>
          Browse Items
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Your Cart</h2>
-
      <div className="d-flex flex-column gap-3">
        {cart.map((item) => (
          <div key={item.id} className="card shadow-sm px-3 py-2">
            <div className="d-flex align-items-center gap-3">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded object-fit-cover"
              />

              <div className="flex-grow-1">
                <h6 className="mb-1">{item.title}</h6>
                <p className="mb-1 text-muted small">{item.description}</p>
                <p className="mb-0 fw-semibold text-success" style={{ fontSize: '0.9rem' }}>
                  ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                </p>
              </div>

              <div className="text-end">
                <div className="d-flex align-items-center gap-2 justify-content-end">
                  <button
                    className="btn btn-outline-danger btn-round"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-success btn-round"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-link text-danger text-decoration-none small mt-1"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-end mt-4">
        <h4>Total: ₹{total}</h4>
       <button className="btn btn-success mt-2" onClick={handleCheckout} disabled={checkingOut}>
           {checkingOut ? <span className="spinner-border spinner-border-sm" /> : 'Proceed to Checkout'}
       </button>

      </div>
    </div>
  );
}
