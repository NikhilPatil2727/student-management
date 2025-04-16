import React from 'react';
import { Cake } from 'lucide-react';
import YourLogo from '../../assets/Virat.jpg'; // Add your image path here

const BirthdayCard = () => {
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">🎂 Upcoming Birthdays</h2>

        {/* Students Section */}
        <div className="space-y-4">
          <h3 className="text-gray-600 font-medium">Students</h3>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={YourLogo} // Your image/logo here
              alt="Student Profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-pink-200"
            />
            <div>
              <p className="text-gray-800 font-semibold">Sheetal Ben 🎉</p>
              <p className="text-sm text-gray-500">20 Mar, 2004</p>
            </div>
            <Cake className="ml-auto text-pink-500 w-8 h-8" />
          </div>
        </div>

        {/* Employees Section */}
        <div className="space-y-4">
          <h3 className="text-gray-600 font-medium">Employees</h3>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <Cake className="text-gray-400 w-8 h-8" />
            </div>
            <div>
              <p className="text-gray-500">No upcoming birthdays</p>
            </div>
            <Cake className="ml-auto text-gray-300 w-8 h-8 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;