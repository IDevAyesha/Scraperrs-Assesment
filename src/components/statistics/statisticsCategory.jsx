import React from 'react';

const StatisticsCategory = () => {
  return (
    <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8">
      <h1 className="text-lg font-normal text-gray-600">Statistics</h1>
      <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>

      {/* Layout for Pie chart and stats */}
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-x-6 md:space-y-0">
        {/* Pie Chart Image with Lazy Loading */}
        <img
          src="/assets/pie.png"
          alt="Sales Distribution by Category"
          className="w-full md:w-1/4 h-auto" // Full width on small screens, 1/4 width on medium screens and above
          loading="lazy"
        />

        {/* Sales Stats */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 w-full md:w-2/3">
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Total Sales:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Customers:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Returnings:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Lighter:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Candy:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Noodles:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Toy:
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Battery:
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatisticsCategory;
