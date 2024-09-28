import React from 'react';

export default function Cart({ cart }) {
  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
              className="flex justify-between items-center bg-white p-4 mb-2 shadow rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ksh {item.price}</p>
              </div>
              <img
                className="w-16 h-16 object-cover rounded"
                src={item.image}
                alt={item.name}
              />
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
              className="bg-orange-300 py-2 px-4 rounded hover:bg-orange-600 text-red-500 transition duration-200"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}