import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl mb-3 bg-white" style={{ border: '1px solid #E5E7EB' }}>
      <div className="flex items-center gap-3">
        <span className="text-2xl p-2 rounded-lg" style={{ background: '#EDE9FE' }}>
          {item.icon}
        </span>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
          <span className="text-xs text-gray-400">/{item.period}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-purple-600" style={{ fontFamily: 'Syne, sans-serif' }}>
          ${item.price}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs font-semibold px-3 py-1 rounded-lg transition-colors hover:bg-red-50"
          style={{ color: '#EF4444', border: '1px solid #FCA5A5' }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
