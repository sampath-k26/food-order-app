import './globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLayout from '../components/ClientLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



export const metadata = {
  title: 'Food Order App',
  description: 'A simple food ordering application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/*<div className="app-content" >*/}
        <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover />
        <ClientLayout>
          {children}
          </ClientLayout>
        {/* </div>  */}
      </body>
    </html>
  );
}