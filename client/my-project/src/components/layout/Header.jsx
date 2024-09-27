import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="bg-white rounded-xl py-2 px-3 mt-3 shadow-lg">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div>
            <a href="/">
              <img src="" alt="Logo" width={70} height={60} />
            </a>
          </div>

          <div className="flex items-center flex-grow justify-center">
            <input
              type="search"
              placeholder="Search for a recipe..."
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

          <div className="relative">
            <button className="text-black">
             EXTRA BUTTON HERE
            </button>
           
          </div>
        </div>
      </nav>
    </div>
  );
}