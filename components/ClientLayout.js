'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./navbar'), { ssr: false });

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={3000}           
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}       
        theme="light"
      />
      <Navbar />
      {children}
    </Provider>
  );
}
