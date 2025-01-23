import React from 'react';

const StatisticsTopSelling = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 bg-white shadow-md rounded-lg p-8">
      <h1 className="text-lg font-normal text-gray-600">Statistics</h1>
      <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
      <div className="space-y-4 md:space-y-0 md:flex md:items-start md:space-x-6">
        {/* Sales Stats */}
        <ul className="grid gap-x-6 w-full md:w-2/3">
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Total Sales
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Customers
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Returnings
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Lighter
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Candy
            </span>
          </li>
        </ul>
        {/* Pie Chart Image with Lazy Loading */}
        <div className="w-full md:w-1/4">
          <img
            src="/assets/pie.png"
            alt="Sales Distribution by Category"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTopSelling;
