import React from 'react'
import Profile from './Profile'
import { useLocation } from 'react-router-dom';
import EmpToCompReview from '../review/EmpToCompReview';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';

const Background = () => {
    const location = useLocation();
    return (
        <>
            <div className={'relative h-[calc(100vh-150px)] w-[95%] bg-[rgba(0,0,0,0.05)] rounded-4xl p-14 z-10 flex gap-5'}>
                {location.pathname == '/dashboard' && <Profile />}
                {location.pathname == '/review' && <EmpToCompReview />}
                {location.pathname == '/change-password' && <ChangePassword />}
                {location.pathname == '/delete-account' && <DeleteAccount />}
            </div>
            <div className='bg-gradient-to-b from-[#D139B1] to-[#F87F57] w-64 h-64 rounded-4xl absolute right-18 bottom-10 -rotate-[45deg]'>
            </div>
            <div className='bg-gradient-to-b from-[#FF5F6D] to-[#FFC371] w-36 h-36 rounded-4xl absolute right-[450px] bottom-6 rotate-[70deg]'>
            </div>
            <div className='bg-gradient-to-b from-[#ffa33a] via-[#ffca3a] to-[#ebff3a] w-36 h-36 rounded-4xl absolute right-8 bottom-96 rotate-[110deg]'>
            </div>
            <div className='bg-gradient-to-b from-[#FF61D2] to-[#FE9090] w-24 h-24 rounded-4xl absolute right-8 top-28 rotate-[220deg]'>

            </div>
        </>
    )
}

export default Background
