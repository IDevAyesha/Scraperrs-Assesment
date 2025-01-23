import React from 'react';

const Statistics = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-normal text-gray-600">Statistics</h2>
      <h2 className="text-lg font-bold text-black mt-2">Low Stock Alert</h2>
      <ul className="space-y-2 mt-2">
        <li className="flex justify-between bg-gray-100 text-black rounded-lg p-3">
          <span className="font-normal">Beverages - stock available 10 5</span>
          <span className="text-red-500 text-opacity-70">-14%</span>
        </li>
        <li className="flex justify-between bg-gray-100 text-black rounded-lg p-3">
          <span className="font-normal">Beverages - stock available 10</span>
          <span className="text-red-500 text-opacity-70">-14%</span>
        </li>
        <li className="flex justify-between bg-gray-100 text-black rounded-lg p-3">
          <span className="font-normal">Beverages - stock available 10</span>
          <span className="text-red-500 text-opacity-70">-14%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
