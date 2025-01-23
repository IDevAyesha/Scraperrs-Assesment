import React from 'react';
const tableData = [
  {
    trackingNo: 1,
    productName: 'John Doe',
    productImage: '/assets/img.png',
    price: 50,
    totalOrder: 5,
    totalAmount: 250,
  },
  {
    trackingNo: 2,
    productName: 'Jane Smith',
    productImage: '/assets/img.png',
    price: 30,
    totalOrder: 3,
    totalAmount: 90,
  },
  {
    trackingNo: 3,
    productName: 'Jane Smith',
    productImage: '/assets/img.png',
    price: 30,
    totalOrder: 3,
    totalAmount: 90,
  },
  {
    trackingNo: 4,
    productName: 'Jane Smith',
    productImage: '/assets/img.png',
    price: 30,
    totalOrder: 3,
    totalAmount: 90,
  },
  {
    trackingNo: 5,
    productName: 'Jane Smith',
    productImage: '/assets/img.png',
    price: 30,
    totalOrder: 3,
    totalAmount: 90,
  },
];

const DataTable = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="border-b">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Tracking no</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Product Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Total Order</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-sm text-gray-600">{row.trackingNo}</td>
              <td className="px-4 py-2 text-sm text-gray-600 flex items-center">
                <img src={row.productImage} alt={`Product ${row.trackingNo}`} className="w-8 h-8 mr-2" />
                {row.productName}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">${row.price}</td>
              <td className="px-4 py-2 text-sm text-red-600 border-red-600">{row.totalOrder}</td>
              <td className="px-4 py-2 text-sm text-gray-600">${row.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
