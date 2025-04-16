// import React from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList
// } from "recharts";

// const data = [
//   { month: "September 2024", fee: 1691116 },
//   { month: "October 2024", fee: 609000 },
//   { month: "November 2024", fee: 1065000 },
//   { month: "December 2024", fee: 945400 },
//   { month: "January 2025", fee: 510902 },
//   { month: "February 2025", fee: 1297898 },
//   { month: "March 2025", fee: 1334000 }
// ];

// export default function FeeByMonth() {
//   return (
//     <div
//       className="bg-white rounded shadow p-4"
//       style={{ width: "100%", maxWidth: "730px", height: "420px" }}
//     >
//       {/* Top section: Title and total fees */}
//       <div className="flex items-center gap-2 text-gray-600 text-sm">
//         <div>Collected Fees by Month</div>
//         <div className="font-semibold">₹7439416</div>
//       </div>

//       {/* Chart title */}
//       <h2 className="text-center font-semibold text-gray-700 mt-2">
//         Fee by Month Wise
//       </h2>

//       {/* Responsive Bar chart */}
//       <div className="mt-4" style={{ width: "100%", height: "300px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={data}
//             margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//             <YAxis tick={{ fontSize: 12 }} />
//             <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
//             <Bar dataKey="fee" fill="#10B981">
//               {/* Labels on top of each bar */}
//               <LabelList
//                 dataKey="fee"
//                 position="top"
//                 formatter={(value) => `₹${value.toLocaleString()}`}
//               />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { BarChart } from 'lucide-react';

const FeeByMonth = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart className="text-blue-600" />
          <h3 className="font-medium">Fee by Month Wise</h3>
        </div>
        <p className="text-sm text-gray-600">₹5314050</p>
      </div>
      <div className="h-64 flex items-end justify-between gap-2">
        {[141400, 1055000, 954500, 555952, 607858, 1510000, 757750].map((value, index) => (
          <div key={index} className="flex-1">
            <div 
              className="bg-green-400 rounded-t-lg"
              style={{ height: `${(value / 1510000) * 100}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>Oct 2024</span>
        <span>Nov 2024</span>
        <span>Dec 2024</span>
        <span>Jan 2025</span>
        <span>Feb 2025</span>
        <span>Mar 2025</span>
        <span>Apr 2025</span>
      </div>
    </div>
  );
};

export default FeeByMonth;
