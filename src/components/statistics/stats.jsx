import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-normal text-gray-600">Total sale</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">$12,345</p>
          <p className="text-green-600">-36%</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-normal text-gray-600">Active sales</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">$12,345</p>
          <p className="text-green-600">-36%</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-normal text-gray-600">Total order</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">$12,345</p>
          <p className="text-green-600">-36%</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-normal text-gray-600">Total Customers</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">$12,345</p>
          <p className="text-green-600">-36%</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
