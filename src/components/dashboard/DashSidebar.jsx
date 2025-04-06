import React, { useEffect, useState } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DashSidebar = () => {

    const location = useLocation();
    const userType = "Employee";
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {

        if (userType == 'Employee') {

            setMenuItems([
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    path: '/dashboard',
                    icon: <MdSpaceDashboard className={`text-xl ${location.pathname == '/dashboard' ? 'text-[#F95B15]' : ''}`} />,
                },
                {
                    id: 'review',
                    title: 'Review',
                    path: '/review',
                    icon: <MdOutlineRateReview className={`text-xl ${location.pathname == '/review' ? 'text-[#F95B15]' : ''}`} />,
                },
                {
                    id: 'change-password',
                    title: 'Change Password',
                    path: '/change-password',
                    icon: <RiLockPasswordLine className={`text-xl ${location.pathname == '/change-password' ? 'text-[#F95B15]' : ''}`} />,
                },
                {
                    id: 'delete-account',
                    title: 'Delete Account',
                    path: '/delete-account',
                    icon: <RiDeleteBin6Line className={`text-xl ${location.pathname == '/delete-account' ? 'text-[#F95B15]' : ''}`} />,
                },
            ]);
        }
        else {
            setMenuItems([

            ]);
        }
    }, [])

    return (
        <div className='w-72 h-[calc(100vh-112px)] py-16 px-10' >
            <ul className=' space-y-10 text-gray-500'>

                {menuItems.map((item) => (
                    <li id={item.id} key={item.id} className='flex items-center gap-2'>
                        {React.cloneElement(item.icon, {
                            className: `text-xl ${location.pathname === item.path ? 'text-[#F95B15]' : ''}`,
                        })}
                        <Link to={item.path} className={`${location.pathname === item.path ? 'text-black' : ''}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}


                {/* <li id={'dashboard'} className='flex items-center gap-2'>
                    <MdSpaceDashboard className={`text-xl ${location.pathname == '/dashboard' ? 'text-[#F95B15]' : ''}`} />
                    <Link to={'/dashboard'} className={`${location.pathname == '/dashboard' ? 'text-black' : ''}`}>Dashboard</Link>
                </li>
                <li id={'review'} className='flex items-center gap-2'>
                    <MdOutlineRateReview className={`text-xl ${location.pathname == '/review' ? 'text-[#F95B15]' : ''}`} />
                    <Link to={'/review'} className={`${location.pathname == '/review' ? 'text-black' : ''}`}>Review</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <RiLockPasswordLine className={`text-xl ${location.pathname == '/change-password' ? 'text-[#F95B15]' : ''}`} />
                    <Link to={'/change-password'} className={`${location.pathname == '/change-password' ? 'text-black' : ''}`}>Change Password</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <RiDeleteBin6Line className={`text-xl ${location.pathname == '/delete-account' ? 'text-[#F95B15]' : ''}`} />
                    <Link to={'/delete-account'} className={`${location.pathname == '/delete-account' ? 'text-black' : ''}`}>Delete Account</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default DashSidebar
