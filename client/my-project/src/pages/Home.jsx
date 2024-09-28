import React, { useRef } from 'react';
import Hero from '../components/layout/Hero'; // Adjust the path if needed
import ProductList from './ProductList'; // Correct component name

export default function Home({ addToCart }) { // Receive addToCart as a prop
  const productListRef = useRef(null); // Reference to the products section

  const scrollToProductList = () => {
    productListRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to products section
  };

  return (
    <div>
      {/* Hero section */}
      <Hero scrollToProductList={scrollToProductList} />
      
      {/* Products section */}
      <div ref={productListRef}>
        <ProductList addToCart={addToCart} /> {/* Pass addToCart to ProductList */}
      </div>
    </div>
  );
}