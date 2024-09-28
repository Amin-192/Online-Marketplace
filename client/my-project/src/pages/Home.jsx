import React from 'react';
import ProductList from '../pages/ProductList';

export default function Home({ addToCart }) { // Receive addToCart as a prop
  return (
    <div className="text-8xl">
      {/* Pass addToCart to ProductList */}
      <ProductList addToCart={addToCart} />
    </div>
  );
}