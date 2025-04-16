import React from 'react';
import MyImage from '../../assets/man-with-laptop-light.png'; // Your local image path

const CurrentPlan = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          Current Plan - Premium
        </div>
        <div className="text-sm text-gray-600">
          Expires On: 03-05-2024
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">👋 Welcome, Your Institute</h2>
          <p className="text-gray-600">An early-morning walk is a blessing for the whole day.</p>
        </div>
        <div className="w-full md:w-auto">
          <img 
            src={MyImage} // Using your local image
            alt="Welcome" 
            className="w-[150px] h-auto md:w-[200px] rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;