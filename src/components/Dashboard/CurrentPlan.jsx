import React from 'react';
import MyImage from '../../assets/man-with-laptop-light.png';
const CurrentPlan = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 
        Top Bar Section 
        ------------------------------------------------
        Displays the current plan on the left and 
        expiration date on the right
      */}
      <div className="flex justify-between items-center bg-indigo-600 text-white rounded-md p-4">
        <span className="font-semibold">
          Current Plan: <span className="font-bold">Premium</span>
        </span>
        <span>Expire On: 03-05-2024</span>
      </div>

      {/* 
        Main Content Section 
        ------------------------------------------------
        1. Welcome message
        2. Subtext / Quote
        3. Image (dummy link)
      */}
      <div className="mt-8 bg-white rounded-md shadow p-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pr-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, Your Institute
          </h1>
          <p className="mt-2 text-gray-600">
            Morning is when I am awake and there is a dawn in me.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={MyImage}
            alt="Dummy" 
            className="max-w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default CurrentPlan;
