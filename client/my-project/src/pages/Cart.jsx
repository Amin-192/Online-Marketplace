import React from 'react';

export default function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="max-w-screen-lg w-full">
          {/* List of Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 mb-2 shadow rounded-lg space-x-4"
            >
              <img
                className="w-28 h-20 object-cover rounded"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ksh {item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p> {/* Display quantity */}
              </div>

              {/* Quantity Control Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-400 transition duration-200"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-400 transition duration-200"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)} // Remove item when clicked
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-4 flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-bold">Total Price: ksh {totalPrice}</h3>
          </div>

          {/* Order Button */}
          <div className="mt-6">
            <button
              onClick={() => alert('Proceeding to order...')}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}