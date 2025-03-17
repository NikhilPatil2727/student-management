import React from 'react';
import universityIcon from '../../assets/University.png';
import Delete from '../../assets/delete-sign.png';
import checkmark from '../../assets/checkmark.png';

const FinancialAnalysis = () => {
  return (
    <div className="p-4">
      {/*
        Outer container for the entire financial analysis section.
        White background, rounded corners, and a subtle shadow.
      */}
      <div className="bg-white rounded-md shadow-md p-4">
        
        {/* Section Heading */}
        <h2 className="text-xl font-bold mb-4">Financial Analysis</h2>

        {/*
          Responsive grid container for the three cards.
          - On small screens (default), display 1 column (stacked).
          - On medium screens (md), display 3 columns side by side.
          - gap-4 adds spacing between cards.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 - Total Fee */}
          <div className="bg-white w-full max-w-sm p-4 rounded-md shadow-md">
            {/* Top row: label and button */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D8D8D]">Total Fee</p>
              <button className="bg-[#00C4F7] text-white px-4 py-1 rounded">
                View
              </button>
            </div>
            {/* Bottom row: icon and amount */}
            <div className="flex items-center mt-3">
              {/* Dummy icon path – replace with your actual icon */}
              <img
                src={universityIcon}
                alt="Total Fee Icon"
                className="w-10 h-10"
              />
              <p className="text-xl font-semibold text-[#8D8D8D] ml-2">
                ₹ 9453816
              </p>
            </div>
          </div>

          {/* Card 2 - Collected Fee */}
          <div className="bg-white w-full max-w-sm p-4 rounded-md shadow-md">
            {/* Top row: label and button */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D8D8D]">Collected Fee</p>
              <button className="bg-[#00C4F7] text-white px-4 py-1 rounded">
                View
              </button>
            </div>
            {/* Bottom row: icon and amount */}
            <div className="flex items-center mt-3">
              <img
                src={Delete}
                alt="Collected Fee Icon"
                className="w-10 h-10"
              />
              <p className="text-xl font-semibold text-[#8D8D8D] ml-2">
                ₹ 7863816
              </p>
            </div>
          </div>

          {/* Card 3 - Due Fee */}
          <div className="bg-white w-full max-w-sm p-4 rounded-md shadow-md">
            {/* Top row: label and button */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D8D8D]">Due Fee</p>
              <button className="bg-[#00C4F7] text-white px-4 py-1 rounded">
                View
              </button>
            </div>
            {/* Bottom row: icon and amount */}
            <div className="flex items-center mt-3">
              <img
                src={checkmark}
                alt="Due Fee Icon"
                className="w-10 h-10"
              />
              <p className="text-xl font-semibold text-[#8D8D8D] ml-2">
                ₹ 1590000
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinancialAnalysis;
