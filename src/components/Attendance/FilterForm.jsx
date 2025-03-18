import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterForm = () => {
  const [classValue, setClassValue] = useState('');
  const [sectionValue, setSectionValue] = useState('');
  const [dateValue, setDateValue] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', { classValue, sectionValue, dateValue });
  };

  const handleReset = () => {
    setClassValue('');
    setSectionValue('');
    setDateValue(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Class</label>
            <select
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Select</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Section</label>
            <select
              value={sectionValue}
              onChange={(e) => setSectionValue(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Select</option>
              <option value="sectionA">Section A</option>
              <option value="sectionB">Section B</option>
              <option value="sectionC">Section C</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Date</label>
            <div className="relative">
              <DatePicker
                selected={dateValue}
                onChange={(date) => setDateValue(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="dd-mm-yyyy"
                className="border border-gray-300 rounded px-3 py-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                </svg> */}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons below inputs */}
        <div className="flex flex-col sm:flex-row gap-2 justify-start">
          <button type="submit" className="bg-black text-white w-full sm:w-auto px-5 py-2 rounded hover:bg-opacity-90 transition-colors">
            Search
          </button>
          <button type="button" onClick={handleReset} className="bg-red-500 text-white w-full sm:w-auto px-5 py-2 rounded hover:bg-red-600 transition-colors">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
