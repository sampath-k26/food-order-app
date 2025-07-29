'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQty, decreaseQty } from '@/redux/cartSlice';
import items from '../../lib/items';
import Image from 'next/image';
import { toast } from 'react-toastify';


const categories = [
  'All',
  'Indian',
  'Chinese',
  'Italian',
  'Dessert',
  'Beverages',
  'Snacks',
  'Fast Food',
  'South Indian',
  'North Indian',
  'Street Food',
  'Salads',
];

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const cart = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const router = useRouter();

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const getItemQty = (id) => cart.find(i => i.id === id)?.quantity || 0;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Browse Items</h2>

      
      <div className="category-scroll d-flex overflow-auto mb-4 px-2">
      {categories.map((cat) => (
      <button
       key={cat}
       onClick={() => setSelectedCategory(cat)}
       className={`btn category-btn px-3 pb-2 ${selectedCategory === cat ? 'active-cat' : ''}`}>
      {cat}
    </button>
      ))}
      </div>


      
      <div className="row">
        {filteredItems.map(item => {
          const qty = getItemQty(item.id);

          return (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div style={{ height: '200px', position: 'relative' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="card-img-top rounded-top"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold text-success">₹{item.price}</p>

                  {qty === 0 ? (
                    <button
                      className="btn btn-warning mt-auto"
                      onClick={() => {
                        dispatch(addToCart(item));
                        toast.success(`${item.title} added to cart!`);
                      }}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="d-flex align-items-center gap-2 mt-auto">
                      <button className="btn btn-outline-danger btn-round" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                      <span>{qty}</span>
                      <button className="btn btn-outline-success btn-round" onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
