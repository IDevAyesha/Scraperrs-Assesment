import React, { useState } from "react";

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleLanguageDropdown = () => setIsLanguageOpen((prev) => !prev);
  const toggleUserDropdown = () => setIsUserOpen((prev) => !prev);

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-white">
      <div className="w-full md:w-auto flex items-center justify-center md:justify-start mb-4 md:mb-0 relative">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full md:w-64 px-4 py-2 pl-10 bg-sky-100 rounded-lg focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.45-6.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center space-x-1 text-sm text-gray-600"
          >
            <span>Eng (US)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isLanguageOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
              <ul>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Eng (US)</li>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Español</li>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Français</li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C18.21 14.724 18 13.896 18 13V8a6 6 0 00-12 0v5c0 .896-.21 1.724-.595 2.595L4 17h5m6 0a3 3 0 01-6 0"
            />
          </svg>
          <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="/assets/profile_pic.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:block text-sm text-gray-600">John Doe</span>
          <button
            onClick={toggleUserDropdown}
            className="flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isUserOpen && (
            <div className="absolute right-1 mt-36 w-40 bg-white shadow-lg rounded-lg border">
              <ul>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">My Profile</li>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Settings</li>
                <li className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
