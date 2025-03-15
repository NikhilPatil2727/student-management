import React from 'react';
import Man from '../../assets/man.png';
import Student from '../../assets/students.png';
import Visitor from '../../assets/external-visitors.png';
import Money from '../../assets/todayfee.png';
import Present from '../../assets/present_icon.png';
const Statistics = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <div className="bg-white p-6 rounded shadow">
      {/* 
        Section Heading
        ------------------------------------------------
        Displays the title "Statistics" at the top
      */}
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>

      {/* 
        Grid Container
        ------------------------------------------------
        5 statistic cards. 
        - On small screens: 1 column
        - On medium screens: up to 2 columns
        - On larger screens: up to 3 columns
        (this arrangement ensures the first row has 3 cards and the second row has 2)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* 
          Card 1: Total Inquiry
          ------------------------------------------------
          Replace the placeholder image with your actual icon/image
        */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center">
          <img
            src={Man}
            alt="Total Inquiry Icon"
            className="mb-2 w-10 h-10"
          />
          <p className="text-gray-600">Total Inquiry</p>
          <p className="text-2xl font-bold">279</p>
        </div>

        {/* 
          Card 2: Total Student
        */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center">
          <img
            src={Student}
            alt="Total Student Icon"
            className="mb-2 w-10 h-10"
          />
          <p className="text-gray-600">Total Student</p>
          <p className="text-2xl font-bold">204</p>
        </div>

        {/* 
          Card 3: Total Website Visitor
        */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center">
          <img
            src={Visitor}
            alt="Total Website Visitor Icon"
            className="mb-2 w-10 h-10"
          />
          <p className="text-gray-600">Total Website Visitor</p>
          <p className="text-2xl font-bold">2705</p>
        </div>

        {/* 
          Card 4: Today Collection
        */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center">
          <img
            src={Money}
            alt="Today Collection Icon"
            className="mb-2 w-10 h-10"
          />
          <p className="text-gray-600">Today Collection</p>
          <p className="text-2xl font-bold">₹ 0</p>
        </div>

        {/* 
          Card 5: Present Student
        */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center">
          <img
            src={Present}
            alt="Present Student Icon"
            className="mb-2 w-10 h-10"
          />
          <p className="text-gray-600">Present Student</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Statistics;
