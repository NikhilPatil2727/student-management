import React from 'react'
import Navbar from '../Dashboard/Navbar'
import AttendanceCards from './AttendanceCards'
import FilterForm from './FilterForm'
import Table from './Table'

const ProperAttend = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-4 md:p-6 lg:p-8 flex-grow">
        {/* Date Heading */}
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Tuesday 18 March</h1>
        </div>

        {/* Attendance Summary Cards */}
        <div className="mb-6">
          <AttendanceCards />
        </div>

        {/* Filter Form */}
        <div className="mb-6">
          <FilterForm />
        </div>

        {/* Students Table */}
        <Table />
      </main>
    </div>
  )
}

export default ProperAttend;
