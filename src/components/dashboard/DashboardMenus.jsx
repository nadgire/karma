import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { BsBriefcaseFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { Link } from 'react-router';

const UserDashboardMenus = () => {
    return (
        <div className='text-blue-800 absolute w-[248px] h-[calc(100vh-80px)] border-r-2 bg-blue-200 border-blue-800 pt-40 mt-20 -z-20'>
            <ul className='ms-10 space-y-10'>
                <li className='flex items-center gap-2'>
                    <ImProfile className='text-2xl' />
                    <Link to="/employee-dashboard/profile">Profile</Link>

                </li>
                <li className='flex items-center gap-2'>
                    <FaGraduationCap className='text-2xl' />
                    <Link to="/employee-dashboard/education">Education</Link>

                </li>
                <li className='flex items-center gap-2'>
                    <BsBriefcaseFill className='text-xl' />
                    <Link to="/employee-dashboard/experience">Experience</Link>

                </li>
                <li className='flex items-center gap-2'>
                    <VscFeedback className='text-2xl' />
                    <Link to="/employee-dashboard/feedback">Feedback</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserDashboardMenus
