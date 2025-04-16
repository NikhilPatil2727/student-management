import React from 'react';
import { Building2, GraduationCap, Landmark, FileText, Users, MessageSquare } from 'lucide-react';

const SystemCard = ({ icon: Icon, label }) => (
  <div className="bg-white p-4 rounded-lg flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
    <div className="p-3 bg-blue-100 rounded-full">
      <Icon className="text-blue-600" />
    </div>
    <p className="text-gray-600 text-sm text-center">{label}</p>
  </div>
);

const ManagementSystem = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <SystemCard icon={Building2} label="Front Office" />
      <SystemCard icon={GraduationCap} label="Student Info." />
      <SystemCard icon={Landmark} label="Fee Collection" />
      <SystemCard icon={FileText} label="Examinations" />
      <SystemCard icon={Users} label="HR Manager" />
      <SystemCard icon={MessageSquare} label="Communicate" />
    </div>
  );
};

export default ManagementSystem;