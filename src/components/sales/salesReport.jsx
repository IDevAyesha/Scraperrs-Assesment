import React from 'react';

const SalesReport = () => {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4">
      {/* Header with filter options and Export PDF */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Report</h2>
        <div className="flex space-x-12 text-sm text-gray-600">
          <span>12 Months</span>
          <span>6 Months</span>
          <span>30 Days</span>
          <span>7 Days</span>
          <button className="">Export PDF</button>
        </div>
      </div>
      {/* Image with lazy loading */}
      <div className="mt-4">
        <img
          src="/assets/graph.png"
          alt="Sales Revenue Graph"
          className="w-full h-auto"
          loading="lazy" // This enables lazy loading
        />
      </div>
    </div>
  );
};

export default SalesReport;
