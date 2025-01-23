import DataTable from '@/components/common/table';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import SalesReport from '@/components/sales/salesReport';
import Statistics from '@/components/statistics/statistics';
import StatisticsCategory from '@/components/statistics/statisticsCategory';
import StatisticsTopSelling from '@/components/statistics/statisticsTopSelling';
import Stats from '@/components/statistics/stats';
import React from 'react';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-gray-100 p-4">
          <div className="flex-1 bg-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg ml-1">
                Good Morning, Michael Smith <span role="img" aria-label="wave">👋</span>
              </h1>
              <div className='flex justify-between items-center gap-2'>
                <div className="p-2 bg-white rounded-lg text-gray-600">
                  1 Jan 2025 - 31 Jan 2025
                </div>
                <div className='w-6 h-6 bg-white rounded-lg'>
                  <img src="/assets/purchases.png" alt="purchase" className='w-full h-full rounded-lg' />
                </div>

              </div>

            </div>
          </div>
          <Stats />
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <SalesReport />
            <Statistics />
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            <StatisticsCategory />
            <StatisticsTopSelling />
          </div>
          <div className="mt-4">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}
