import React from 'react';
import { BarChart } from 'lucide-react';

const IncomeExpensesProfit = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium">Income by Month Wise</h3>
        <div className="flex gap-4">
          <span className="text-blue-600 text-sm cursor-pointer">Income</span>
          <span className="text-gray-400 text-sm cursor-pointer">Expenses</span>
          <span className="text-gray-400 text-sm cursor-pointer">Profit</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Total Income</span>
          <span className="font-medium">₹141050</span>
        </div>
        <div className="h-48 flex items-end justify-between gap-2">
          {[25000, 72550, 41500, 2000].map((value, index) => (
            <div key={index} className="flex-1">
              <div 
                className="bg-blue-400 rounded-t-lg"
                style={{ height: `${(value / 72550) * 100}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>January</span>
          <span>February</span>
          <span>March</span>
          <span>December</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpensesProfit;