import React from 'react';
import Navbar from './Navbar';
import CurrentPlan from './CurrentPlan';
import Statistics from './Statistics';
import FinancialAnalysis from './FinancialAnalysis';
import ManagementSystem from './ManagementSystem';
import FeeByMonth from './FeeByMonth';
import WebArticlMarktPlace from './WebArticlMarktPlace';
import BirthdayCard from './BirthdayCard';
import IncomeExpensesProfit from './IncomeExpensesProfit';

const DashboardFinal = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
    <Navbar />
    
    <div className="mt-4 grid grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[4fr_1fr] gap-4 md:gap-6">
      {/* Main Content Area */}
      <div className="space-y-4 md:space-y-6">
        <CurrentPlan />
        <Statistics />
        <FinancialAnalysis />
        <ManagementSystem />
        <FeeByMonth />
      </div>

      {/* Right Sidebar */}
      <div className="space-y-4 md:space-y-6">
        <WebArticlMarktPlace />
        <BirthdayCard />
        <IncomeExpensesProfit />
      </div>
    </div>
  </div>
);
}


export default DashboardFinal;