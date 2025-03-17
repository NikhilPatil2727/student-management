import React from "react";
import frontOfficeIcon from "../../assets/front-desk.png";
import studentInfoIcon from "../../assets/student-male.png";
import feeCollectionIcon from "../../assets/external-fees.png";
import exam from '../../assets/exam.png';
import atttendance from  '../../assets/checked-user.png';
import hr from '../../assets/external-hr-manager.png';
import communicate from '../../assets/talk-male.png';
import certificates from '../../assets/certificate.png';
const ManagementSystem = () => {
  return (
    <div className="p-4">
      {/* Container for the cards */}
      <div className="flex flex-wrap justify-center gap-6">
        
        {/* Front Office */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={frontOfficeIcon}
            alt="Front Office"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Front Office</p>
        </div>

        {/* Student Info */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={studentInfoIcon}
            alt="Student Info"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Student Info</p>
        </div>

        {/* Fee Collection */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={feeCollectionIcon}
            alt="Fee Collection"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Fee Collection</p>
        </div>

        {/* Examinations */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={exam}
            alt="Examinations"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Examinations</p>
        </div>

        {/* Attendance */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={atttendance}
            alt="Attendance"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Attendance</p>
        </div>

        {/* HR Manager */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={hr}
            alt="HR Manager"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">HR Manager</p>
        </div>

        {/* Communicate */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={communicate}
            alt="Communicate"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Communicate</p>
        </div>

        {/* Certificates */}
        <div className="w-[350px] h-[150px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={certificates}
            alt="Certificates"
            className="h-12 w-12 mb-2"
          />
          <p className="text-center font-medium">Certificates</p>
        </div>

      </div>
    </div>
  );
};

export default ManagementSystem;
