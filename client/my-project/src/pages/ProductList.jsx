import React from 'react';
import { Products as products } from '../components/products'; // Import products array

export default function ProductList({ addToCart }) { // Receive addToCart as a prop
  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl px-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-2xl p-4 transform hover:scale-105 transition-transform duration-200 w-[300px] h-[400px] flex flex-col justify-between"
          >
            <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt={product.name} />
            <div className="mt-1 flex-grow">
              <h2 className="text-base font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-orange-500 font-bold mt-1 text-base">Price: ksh {product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)} // Add product to cart when button is clicked
              className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200 text-sm"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}