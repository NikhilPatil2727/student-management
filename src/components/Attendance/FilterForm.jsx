import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterForm = () => {
  const [classValue, setClassValue] = useState('');
  const [sectionValue, setSectionValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const [rollNo, setRollNo] = useState('');
  const [admissionNo, setAdmissionNo] = useState('');
  const [name, setName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', { classValue, sectionValue, dateValue, rollNo, admissionNo, name });
  };

  const handleReset = () => {
    setClassValue('');
    setSectionValue('');
    setDateValue(null);
    setRollNo('');
    setAdmissionNo('');
    setName('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        {/* First row: Class, Section, Date */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Class</label>
            <select
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Select</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="computer-science">Computer Science</option>
              <option value="12-science">12 Science</option>
              <option value="multiple">Multiple</option>
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
              <option value="web-dev">Web Dev</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="diff-section">Diff Section</option>
              <option value="multiple">M.Tech</option>
              <option value="multiple">B.Teach</option>
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
                {/* Icon can be added here */}
              </span>
            </div>
          </div>
        </div>

        {/* Second row: Roll No., Admission No, Name */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Roll No.</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Enter Roll No."
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Admission No.</label>
            <input
              type="text"
              value={admissionNo}
              onChange={(e) => setAdmissionNo(e.target.value)}
              placeholder="Enter Admission No."
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
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
