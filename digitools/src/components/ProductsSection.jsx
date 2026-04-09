import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import products from '../products.json';

const ProductsSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.warning(`${product.name} is already in your cart!`);
      return;
    }
    setCart(prev => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (id) => {
    const item = cart.find(i => i.id === id);
    setCart(prev => prev.filter(i => i.id !== id));
    toast.error(`${item?.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning('Your cart is empty!');
      return;
    }
    setCart([]);
    toast.success('Checkout successful! Thank you for your purchase! 🎉');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Premium Digital Tools
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Hand-picked AI tools that help you work faster, smarter, and more efficiently.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1 rounded-xl" style={{ background: '#F3F4F6' }}>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-lg font-semibold text-sm transition-all ${activeTab === 'products' ? 'btn-primary shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${activeTab === 'cart' ? 'btn-primary shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Cart
              {cart.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}

        {/* Cart */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-20 rounded-2xl" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-sm text-gray-400 mb-6">Browse our tools and add items to your cart</p>
                <button onClick={() => setActiveTab('products')} className="btn-primary px-6 py-3 rounded-lg text-sm font-semibold">
                  Browse Products
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Your Cart
                </h3>
                <p className="text-sm text-gray-400 mb-6">{cart.length} item(s) in your cart</p>

                {cart.map(item => (
                  <CartItem key={item.id} item={item} onRemove={handleRemove} />
                ))}

                {/* Summary */}
                <div className="mt-6 p-5 rounded-2xl" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">Subtotal ({cart.length} items)</span>
                    <span className="font-bold text-gray-900">${total}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Platform Fee</span>
                    <span className="font-bold text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between items-center mb-5 pt-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-extrabold text-xl text-purple-600">${total}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn-primary w-full py-3 rounded-xl font-bold text-sm">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
