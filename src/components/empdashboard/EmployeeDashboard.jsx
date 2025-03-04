import React, { useState } from 'react'
import DashboardNav from '../DashboardNav';
import UserDashboardMenus from './UserDashboardMenus';
import EmpToCompany from '../reviews/EmpToCompany'

const EmployeeDashboard = () => {



    return (
        <div>
            <UserDashboardMenus />

            <DashboardNav />

            <div className='ml-[248px] p-10'>
                {
                    window.location.href === "http://localhost:5173/employee-dashboard/profile" ? (
                        <div>profile Page</div>
                    ) : window.location.href === "http://localhost:5173/employee-dashboard/education" ? (
                        <div>education Page</div>
                    ) : window.location.href === "http://localhost:5173/employee-dashboard/experience" ? (
                        <div>Experience Page</div>
                    ) : window.location.href === "http://localhost:5173/employee-dashboard/feedback" ? (
                        <EmpToCompany /> 
                    ) : null
                }
            </div>

        </div>
    )
}

export default EmployeeDashboard
