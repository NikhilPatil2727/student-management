import React from 'react'
import Navbar from './components/Dashboard/Navbar'
import CurrentPlan from './components/Dashboard/CurrentPlan'
import Statistics from './components/Dashboard/Statistics'
import FinancialAnalysis from './components/Dashboard/FinancialAnalysis'
import ManagementSystem from './components/Dashboard/ManagementSystem'
import FeeByMonth from './components/Dashboard/FeeByMonth'

const App = () => {
    return (
        <div>
            {/* <Navbar/> */}
            {/* <CurrentPlan/> */}
            {/* <Statistics/> */}
            {/* <FinancialAnalysis/> */}
            {/* <ManagementSystem/> */}
            <FeeByMonth/>
        </div>
    )
}

export default App
