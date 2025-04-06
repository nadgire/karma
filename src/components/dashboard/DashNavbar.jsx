import React, { useState } from 'react'
import smallLogo from '../../assets/Images/kl1-1.png'
import user from "../../assets/Images/download.png";
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";


const DashNavbar = (props) => {

    const [profileDivFlag, setProfileDivFlag] = useState(false);

    function profileDiv() {
        setProfileDivFlag(!profileDivFlag)
    }

    function funMenuClick(event) {
        setProfileDivFlag(false);
        console.log(event.currentTarget.id);
    }

    return (
        <div className='w-full min-h-24 flex relative'>
            <div className='w-[90%] mx-auto flex items-center'>
                <div className='w-1/6'>
                    <img src={smallLogo} alt="" className='h-14 w-auto' />
                </div>
                <div className='w-2/3 text-3xl font-semibold'>Welcome to your Karma</div>
                <div className='w-1/6 flex items-center gap-3 justify-end'>
                    <img src={user} alt="" className='w-10 h-10' />
                    <div className='flex items-center gap-2' onClick={profileDiv}>
                        <span className='text-xl whitespace-nowrap capitalize'>
                            {props.sendUserDetails}
                        </span>
                        <FaCaretDown className='text-2xl' />
                    </div>
                </div>
            </div>
            {
                profileDivFlag && (
                    <div className='absolute right-0 top-24 w-72 bg-[#F95B15] z-20 h-fit p-10 text-white rounded-bl-3xl'>
                        <ul className='flex flex-col gap-5'>
                            <li id={'dashboard'} className='flex items-center gap-2' onClick={funMenuClick}>
                                <MdSpaceDashboard className={`text-xl ${location.pathname == '/dashboard' ? 'text-white font-bold' : ''}`} />
                                <Link to={'/dashboard'} className={`${location.pathname == '/dashboard' ? 'text-white font-bold' : ''}`}>Dashboard</Link>
                            </li>
                            <li id={'changePassword'} className='flex items-center gap-2' onClick={funMenuClick}>
                                <RiLockPasswordLine className={`text-xl ${location.pathname == '/change-password' ? 'text-white font-bold' : ''}`} />
                                <Link to={'/change-password'} className={`${location.pathname == '/change-password' ? 'text-white font-bold' : ''}`}>Change Password</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <MdLogout className={`text-xl ${location.pathname == '/logout' ? 'text-white font-bold' : ''}`} />
                                <Link to={'/logout'} className={`${location.pathname == '/logout' ? 'text-white font-bold' : ''}`}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default DashNavbar
