import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const tagClass = {
    popular: 'tag-popular',
    new: 'tag-new',
    bestseller: 'tag-bestseller',
  }[product.tagType] || 'tag-popular';

  return (
    <div className="card-hover rounded-2xl p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl p-3 rounded-xl" style={{ background: '#EDE9FE' }}>
          {product.icon}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagClass}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-base font-bold mb-2 text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 mb-4 flex-grow leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <ul className="mb-5 space-y-1.5">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ background: '#EDE9FE', color: '#7C3AED' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
        <div>
          <span className="text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>
            ${product.price}
          </span>
          <span className="text-xs ml-1 text-gray-400">/{product.period}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
