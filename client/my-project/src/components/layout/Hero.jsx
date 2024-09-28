import React from 'react';
import bobaImage from '../../images/hero-image.png'; // Adjust the path based on your folder structure

export default function Hero({ scrollToProductList }) {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-6 md:flex md:items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
          <h1 className='text-6xl font-bold font-serif '>BOBA  <span className='text-orange-300'>WORLD<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
</span></h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the Best Boba Teas!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We offer a wide range of premium boba teas that you'll love. Shop now and enjoy your favorite flavors!
          </p>
          <button
            onClick={scrollToProductList} // Call the scroll function passed as prop
            className="bg-white text-orange-500 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src={bobaImage}
            alt="Delicious Boba"
            className="w-full max-w-md rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}