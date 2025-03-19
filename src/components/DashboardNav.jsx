import React, { useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import UserDashboardMenus from './dashboard/DashboardMenus';
import ProfileDropdown from './ProfileDropdown';


const DashboardNav = () => {

    const [profileDropdownMenuFlag, setProfileDropdownMenuFlag] = useState(false);

    function profileDropdownMenu(){
        setProfileDropdownMenuFlag(!profileDropdownMenuFlag);
    }

    return (
        <div className='text-blue-800 select-none shadow-xl shadow-blue-100 max-h-20 min-h-20 flex justify-between relative z-10'>
            <div className='flex items-center justify-center gap-20'>
                <div className='w-40 h-40 bg-white rounded-full ms-10 mt-28 shadow-xl'>
                    <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/07/Hrithik-Roshan-extends-financial-support-to-100-Bollywood-dancers-.jpeg" alt="" className='w-40 h-40 rounded-full object-cover border-blue-800 border-2' />
                </div>
                <h1 className='text-2xl'>Welcome <span className='font-bold' onClick={() => { }} >Mr. Hritik Roshan</span></h1>
            </div>
            <div className='flex mr-10 gap-1 items-center z-10' onClick={() => {
                profileDropdownMenu();
            }}>
                <RxAvatar className='text-4xl text-blue-800' />
                <FaCaretDown className='text-3xl text-blue-800' />
            </div>
            {profileDropdownMenuFlag && <ProfileDropdown />}
        </div>
    )
}

export default DashboardNav
