'use client';

import Link from 'next/link';
import Image from 'next/image';
import allustration from '../public/Allustration.png';
import card from '../public/Card.png';
import card1 from '../public/Card1.png';
import card2 from '../public/Card2.png'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import carticon from '../public/carticon.png';


export default function HomePage() {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  const handleOrderNow = () => {
    if (user) {
      router.push('/browse');
    } else {
      router.push('/register');
    }
  };
  return (
    <>
    <div className="container my-5">
      <div className="row align-items-center justify-content-between">
        
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <Image
            src={allustration}
            alt="Sample"
            width={311}
            height={347}
            className="img-fluid"
            priority
          />
        </div>

        
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">
            Happy With <span className="text-warning">Delicious Food</span><br />
            And Get New Experiences With <br />
            <span className="text-warning">Asian Food</span>
          </h1>
          <p className="mt-3 text-muted">
            Exploring new food with different transition that you can try at this place and get a good price from us as well.
          </p>
          <button className="btn btn-warning text-white px-4 py-2" onClick={handleOrderNow}>
            Order Now <Image  alt="icon" src={carticon} width={25} height={25} className='bg-warning'/>

          </button>
        </div>
      </div>
    </div>

    <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">How <u>You Can </u>Order</h2>
        <div className="row g-4">
          
          <div className="col-12 col-md-4 text-center">
            <Image
              src={card}
              alt="Fast Delivery"
              width={200}
              height={200}
              className="img-fluid mb-3 "
            />
            <h5 className="fw-bold">Affordable Prices</h5>
            <p className="text-muted">Enjoy top-quality meals without breaking your wallet.</p>
           
          </div>

          
          <div className="col-12 col-md-4 text-center">
            <Image
              src={card1}
              alt="Quality Food"
              width={200}
              height={200}
              className="img-fluid mb-3"
            />
            <h5 className="fw-bold">Quality Food</h5>
            <p className="text-muted">We serve only the freshest and most delicious meals.</p>
          </div>

          
          <div className="col-12 col-md-4 text-center">
            <Image
              src={card2}
              alt="Affordable Prices"
              width={200}
              height={200}
              className="img-fluid mb-3"
            />
            <h5 className="fw-bold">Fast Delivery</h5>
            <p className="text-muted">Get your food delivered to your doorstep in minutes.</p>
          </div>
        </div>
      </div>
    </>
  );
}
