import React from 'react'
import Navbar from './components/Dashboard/Navbar'
import CurrentPlan from './components/Dashboard/CurrentPlan'
import Statistics from './components/Dashboard/Statistics'
import FinancialAnalysis from './components/Dashboard/FinancialAnalysis'
import ManagementSystem from './components/Dashboard/ManagementSystem'
import FeeByMonth from './components/Dashboard/FeeByMonth'
import AttendanceCards from './components/Attendance/AttendanceCards'
import FilterForm from './components/Attendance/FilterForm'
import Table from './components/Attendance/Table'
import ProperAttend from './components/Attendance/ProperAttend'

const App = () => {
    return (
        <div>
            {/* <Navbar/> */}
            {/* <CurrentPlan/> */}
            {/* <Statistics/> */}
            {/* <FinancialAnalysis/> */}
            {/* <ManagementSystem/> */}
            {/* <FeeByMonth/> */}
            {/* <AttendanceCards/>
            <FilterForm/>
            <Table/> */}
            <ProperAttend/>
        </div>
    )
}

export default App
