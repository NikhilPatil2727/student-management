import React from 'react';
import MyWebsite from "../../assets/MyWeb.png";
import MyAritcal from "../../assets/MyArtical.png";
import ManageWebsite from "../../assets/ManageWebsite.png";
import ExploreMarketplace from "../../assets/Marketpalce.png";

function WebArticlMarktPlace() {
  return (
    <div className="bg-white shadow p-4">
      {/* Responsive flex container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-md shadow p-4 flex items-center justify-between w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[100px]">
          <div className="flex items-center gap-2">
            {/* Replace with your icon path */}
            <img 
              src={MyWebsite}
              alt="Globe Icon" 
              className="w-8 h-8 object-contain" 
            />
            <span className="font-semibold text-gray-700">My Website</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-md shadow p-4 flex items-center justify-between w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[100px]">
          <div className="flex items-center gap-2">
            {/* Replace with your icon path */}
            <img 
              src={MyAritcal}
              alt="Articles Icon" 
              className="w-8 h-8 object-contain" 
            />
            <span className="font-semibold text-gray-700">My Articles</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-md shadow p-4 flex items-center justify-between w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[100px]">
          <div className="flex items-center gap-2">
            {/* Replace with your icon path */}
            <img 
              src={ManageWebsite}
              alt="Home Icon" 
              className="w-8 h-8 object-contain" 
            />
            <span className="font-semibold text-gray-700">Manage Website</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-md shadow p-4 flex items-center justify-between w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[100px]">
          <div className="flex items-center gap-2">
            {/* Replace with your icon path */}
            <img 
              src={ExploreMarketplace}
              alt="Marketplace Icon" 
              className="w-8 h-8 object-contain" 
            />
            <span className="font-semibold text-gray-700">Explore Marketplace</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebArticlMarktPlace;
