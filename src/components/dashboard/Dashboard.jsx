import React, { useState } from 'react'
import DashboardNav from '../DashboardNav';
import UserDashboardMenus from './DashboardMenus';
import EmpToCompany from '../reviews/EmpToCompany'
import ChangePassword from '../ChangePassword';

const Dashboard = () => {



    return (
        <div className='relative'>
            <UserDashboardMenus />

            <DashboardNav />

            <div className='absolute p-10 left-[248px] w-[calc(100%-248px)]'>
                {
                    window.location.href === "http://localhost:5173/dashboard/profile" ? (
                        <div>profile Page</div>
                    ) : window.location.href === "http://localhost:5173/dashboard/education" ? (
                        <div>education Page</div>
                    ) : window.location.href === "http://localhost:5173/dashboard/experience" ? (
                        <div>Experience Page</div>
                    ) : window.location.href === "http://localhost:5173/dashboard/feedback" ? (
                        <EmpToCompany />
                    ) : window.location.href === "http://localhost:5173/dashboard/change-password" ? (
                        <ChangePassword />
                    ) : null
                }
            </div>

        </div>
    )
}

export default Dashboard
