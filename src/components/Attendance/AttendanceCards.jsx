import React from 'react';
import present from '../../assets/present.png';
import absent from '../../assets/absent.png';
import Late from '../../assets/late.png';
import halfDay from '../../assets/halfday.png';
/**
 * AttendanceCards Component
 * 
 * This component renders a parent "root" div with a white background,
 * shadow, and rounded corners. Inside it, four cards display attendance
 * data (Present, Absent, Late, Half Day).
 * 
 * Each card:
 * - Uses flexbox for layout (icon + text).
 * - Has a border, slight shadow, and rounded corners.
 * - Displays an icon (replace `src` with your actual icon/image paths).
 * - Shows a title and a numeric count.
 */

const AttendanceCards = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Root container with white background, shadow, and padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Grid container: 1 column on extra small screens, 2 on small screens, 4 on medium and up */}
        
        {/* Card: Today Present */}
        <div className="flex items-center bg-white border rounded-lg shadow p-4">
          <img
            src={present}
            alt="Today Present Icon"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="text-gray-600 text-sm">Today Present</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Card: Today Absent */}
        <div className="flex items-center bg-white border rounded-lg shadow p-4">
          <img
            src={absent}
            alt="Today Absent Icon"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="text-gray-600 text-sm">Today Absent</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Card: Today Late */}
        <div className="flex items-center bg-white border rounded-lg shadow p-4">
          <img
            src={Late}
            alt="Today Late Icon"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="text-gray-600 text-sm">Today Late</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Card: Today Half Day */}
        <div className="flex items-center bg-white border rounded-lg shadow p-4">
          <img
            src={halfDay}
            alt="Today Half Day Icon"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="text-gray-600 text-sm">Today Half Day</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AttendanceCards;
