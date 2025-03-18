import React, { useState } from 'react';
import avtar from '../../assets/avatar.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white py-3 px-4 shadow">
      {/* Left section: you can place a date or any other content */}
      <div>
        <h1 className="text-lg font-semibold">Wednesday 12 March</h1>
      </div>

      {/* Right section: user avatar + dropdown */}
      <div className="relative">
      <img
  src={avtar}
  alt="User Avatar"
  className="w-10 h-10 rounded-full cursor-pointer"
  onClick={handleAvatarClick}
/>
        
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
            <ul className="flex flex-col">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
