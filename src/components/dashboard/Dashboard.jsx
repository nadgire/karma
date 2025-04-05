import React from 'react'
import DashNavbar from './DashNavbar'
import DashSidebar from './DashSidebar'
import Profile from './Profile'
import Background from './Background'

const Dashboard = () => {
    return (
        <div>
            <DashNavbar />
            <div className='flex'>
                <DashSidebar />
                <div className='relative w-full'>
                    <Background />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
