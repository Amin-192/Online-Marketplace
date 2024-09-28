import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

export default function Header({ cartCount }) {
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);

  const toggleAccountModal = () => {
    setAccountModalOpen(!isAccountModalOpen);
  };

  return (
    <div>
      <nav className="py-2 px-3 bg-orange-300">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="rounded-2xl" src="/logo.png" alt="Logo" width={70} height={60} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-grow justify-center">
            <input
              type="search"
              placeholder="Search for products..."
              className="border-2 border-orange-300 rounded-2xl w-[300px] h-[50px] px-2"
            />
            <button className="bg-orange-300 px-3 rounded-lg h-[40px] flex items-center ml-2">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* User Account Button */}
            <div className="relative">
              <button
                className="text-black flex items-center space-x-2"
                onClick={toggleAccountModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>Account</span>
              </button>

              {/* Account Modal */}
              {isAccountModalOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <Link to="/login">
                    <button className="block w-full px-4 py-2 text-black hover:bg-gray-100 text-center">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="block w-full px-4 py-2 text-black hover:bg-gray-100 text-center">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <div className="relative">
              <Link to="/cart">
                <button className="text-black flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>Cart</span>
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1">
                    {cartCount} {/* Dynamic Cart Count */}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden flex justify-center mt-2">
          <input
            type="search"
            placeholder="Search for products..."
            className="border-2 border-orange-300 rounded-2xl w-[300px] h-[50px] px-2"
          />
          <button className="bg-orange-300 px-3 rounded-lg h-[40px] flex items-center ml-2">
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}