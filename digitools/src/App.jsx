import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductsSection from './components/ProductsSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <ProductsSection cart={cart} setCart={setCart} />
      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
