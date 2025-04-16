// import React from 'react';
// import Man from '../../assets/man.png';
// import Student from '../../assets/students.png';
// import Visitor from '../../assets/external-visitors.png';
// import Money from '../../assets/todayfee.png';
// import Present from '../../assets/present_icon.png';
// import { UserCheck } from 'lucide-react';

// const StatCard = ({ src, icon: Icon, label, value }) => (
//   <div className="bg-white p-4 rounded border border-gray-200 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
//     <div className="mb-2 w-10 h-10">
//       {src ? (
//         <img src={src} alt={label} className="w-full h-full object-cover" />
//       ) : (
//         <Icon className="text-blue-600 w-full h-full" />
//       )}
//     </div>
//     <p className="text-gray-600">{label}</p>
//     <p className="text-2xl font-bold">{value}</p>
//   </div>
// );

// const Statistics = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <StatCard src={Man} label="Total Inquiry" value="290" />
//           <StatCard src={Student} label="Total Admission" value="221" />
//           <StatCard src={Visitor} label="Total Website Visitor" value="3035" />
//           <StatCard src={Money} label="Today Collection" value="₹0" />
//           <StatCard src={Present} label="Present Student" value="0" />
//           <StatCard icon={UserCheck} label="Present Employee" value="0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;



import React from 'react';
import { Users, Gift, UserCheck } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
    <div className="p-3 bg-blue-100 rounded-full">
      <Icon className="text-blue-600" />
    </div>
    <div>
      <p className="text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </div>
);

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard icon={Users} label="Total Inquiry" value="290" />
      <StatCard icon={UserCheck} label="Total Admission" value="221" />
      <StatCard icon={Users} label="Total Website Visitor" value="3035" />
      <StatCard icon={Gift} label="Today Collection" value="₹0" />
      <StatCard icon={Users} label="Present Student" value="0" />
      <StatCard icon={UserCheck} label="Present Employee" value="0" />
    </div>
  );
};

export default Statistics;