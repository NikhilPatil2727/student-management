import React from 'react';
import universityIcon from '../../assets/University.png';
import Delete from '../../assets/delete-sign.png';
import checkmark from '../../assets/checkmark.png';

const FinancialCard = ({ image, label, value, viewAction }) => (
  <div className="bg-white w-full max-w-sm p-4 rounded-md shadow-md">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-[#8D8D8D]">{label}</p>
      {viewAction && (
        <button className="bg-[#00C4F7] text-white px-4 py-1 rounded">
          View
        </button>
      )}
    </div>
    <div className="flex items-center mt-3">
      <img src={image} alt={`${label} icon`} className="w-10 h-10" />
      <p className="text-xl font-semibold text-[#8D8D8D] ml-2">{value}</p>
    </div>
  </div>
);

const FinancialAnalysis = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Financial Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FinancialCard
            image={universityIcon}
            label="Total Fee"
            value="₹9453816"
            viewAction={() => {}}
          />
          <FinancialCard
            image={Delete}
            label="Collected Fee"
            value="₹7863816"
            viewAction={() => {}}
          />
          <FinancialCard
            image={checkmark}
            label="Due Fee"
            value="₹1590000"
            viewAction={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialAnalysis;