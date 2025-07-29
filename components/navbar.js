'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../redux/userSlice';
import { show } from '../utils/toastHelper';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  const [loadingRegister, setLoadingRegister] = useState(false);


  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          dispatch(setUser(data.user));
        } else {
          dispatch(clearUser());
        }
      } catch (err) {
        dispatch(clearUser());
      }
    }

    getUser();
  }, [pathname,dispatch]);

 
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setLoadingRegister(false);
    };

    router.events?.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    dispatch(clearUser());
    show('info', 'Logged out successfully!');
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return (
    <nav className="navbar navbar-light px-3 justify-content-between">
      <Link href="/" className="btn">
        <h1 className="mb-0">
          <span className="fw-bold text-warning">Food Order</span> App
        </h1>
      </Link>

      {!user ? (
        <button
          onClick={() => {
            setLoadingRegister(true);
            router.push('/register');
          }}
          className="btn btn-outline-warning"
          disabled={loadingRegister}
        >
          {loadingRegister ? (
            <div
              className="spinner-border spinner-border-sm text-warning"
              role="status"
            />
          ) : (
            'Register'
          )}
        </button>
      ) : (
        <div className="d-flex align-items-center gap-3">
          <Link
            href="/cart"
            className="text-dark"
            style={{ textDecoration: 'none' }}
          >
            <i className="fa-solid fa-cart-shopping fs-4"></i>
          </Link>

          <div className="dropdown">
            <button
              className="btn d-flex align-items-center gap-2"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: 'none', background: 'transparent' }}
            >
              <i
                className="fa-regular fa-circle-user fs-4"
                style={{ color: '#000000' }}
              ></i>
            </button>

            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userMenu"
            >
              <li className="dropdown-item">Hi, {user.name}</li>
              <li>
                <Link href="/orders" className="dropdown-item">
                  Your Orders
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="dropdown-item text-danger"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
