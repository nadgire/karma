import React, { useState } from 'react'
import { Link } from 'react-router'
import { TbLogout } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { ImProfile } from "react-icons/im";


const ProfileDropdown = (props) => {
    function clickToClose() {
        props.flag=false;
    }
    return (
        <div className='absolute right-0 top-20 w-60 h-auto p-5 bg-blue-200 rounded-b-lg'>
            <ul className='space-y-5 py-5'>
                <li>
                    <Link to="/dashboard/profile" className='flex items-center gap-2' onClick={clickToClose}>
                        <ImProfile className='text-2xl' />
                        Profile
                    </Link>
                </li>
                <li className='flex items-center gap-2'>
                    <Link to="/dashboard/change-password" className='flex items-center gap-2' onClick={clickToClose}>
                        <BiEditAlt className='text-2xl' />
                        Change Password
                    </Link>
                </li>
                <li>
                    <Link to="/" className='flex items-center gap-2' onClick={clickToClose}>
                        <TbLogout className='text-2xl' />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropdown
