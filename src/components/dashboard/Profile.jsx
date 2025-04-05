import React from 'react'
import a from '../../assets/Images/kl1-1.png'
const Profile = () => {
    return (
        <>
            <div className='w-[50%] h-full bg-white rounded-4xl px-20 py-8 relative'>
                <div className=''>
                    <img src={a} alt="" className='mx-auto' />
                </div>
                <div className='border-b-gray-300 border-b-2'>
                </div>
                <div className='pt-5 flex gap-5 w-full'>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <span>Username</span>
                        <span>Password</span>
                        <span>Is Account Active</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <span>tejasghaiwat</span>
                        <span>*************</span>
                        <span>Yes</span>
                    </div>
                </div>
                <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                    <button className='bg-[#F95B15] px-10 py-2 rounded-3xl text-white font-semibold'>Update</button>
                </div>
            </div>
            <div className='w-[50%] h-full rounded-4xl flex flex-col gap-5'>
                <div className='h-[50%] bg-white rounded-4xl px-20 flex flex-col pt-10'>
                    <div>
                        <span className='font-bold'>Personal Details</span>
                        <div className='border-b-gray-300 border-b-2'>
                        </div>
                    </div>
                    <div className='flex py-5'>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>Name</span>
                            <span>Mobile Number</span>
                            <span>Alternate Mobile Number</span>
                            <span>Last 4 Digits of Aadhar</span>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>Tejas Ghaiwat</span>
                            <span>8888888888</span>
                            <span>9999999999</span>
                            <span>1234</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-4xl px-20 flex flex-col pt-10'>
                    <div>
                        <span className='font-bold'>Professional Details</span>
                        <div className='border-b-gray-300 border-b-2'>
                        </div>
                    </div>
                    <div className='flex py-5'>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>Employee UID</span>
                            <span>Email</span>
                            <span>Role</span>
                            <span>Role in Company</span>
                            <span>Company ID</span>
                            <span>Report To</span>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>EMP0001</span>
                            <span>tejas@company.com</span>
                            <span>Developer</span>
                            <span>Frontend Developer</span>
                            <span>TSYS, Global Payments Inc.,</span>
                            <span>Manager</span>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Profile
