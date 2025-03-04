import React from 'react'
import { Link } from 'react-router'
import { TbLogout } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { ImProfile } from "react-icons/im";


const ProfileDropdown = () => {
    return (
        <div className='absolute right-0 top-20 w-60 h-auto p-5 bg-blue-200 rounded-b-lg'>
            <ul className='space-y-5 py-5'>
                <li className='flex items-center gap-2'>
                    <ImProfile className='text-2xl' />
                    Profile
                </li>
                <li className='flex items-center gap-2'>
                    <BiEditAlt className='text-2xl' />
                    Change Password
                </li>
                <li>
                    <Link to="/" className='flex items-center gap-2'>
                        <TbLogout className='text-2xl' />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropdown
