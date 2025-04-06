import React, { useEffect, useState } from 'react'
import a from '../../assets/Images/kl1-1.png'


const Profile = (props) => {

    const userDetails = props.sendUserDetails;
    const [imgUrl, setImgUrl] = useState('');

    return (
        <>
            <div className='w-[50%] h-full bg-white rounded-4xl px-20 py-8 relative whitespace-nowrap'>
                <div className='h-56'>
                    {imgUrl ? (
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxIF_uP6uSM-x2mPFIqXoEztgGZztr_-0LqzMJS71pyuvvkkdV_KvekLXa-q3uDC6ud4&usqp=CAU'} alt={'profile image'} className='mx-auto h-56 rounded-2xl' loading="lazy" crossorigin="anonymous" />
                    ) : (
                        <span className='flex items-center justify-center'>Loading image...</span>
                    )}
                </div>
                <br />
                <div className='border-b-gray-300 border-b-2'>
                </div>
                <div className='pt-5 flex gap-5 w-full'>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <span>Username</span>
                        <span>Password</span>
                        <span>Is Account Active</span>
                        <span>Is Account Verified</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <span>{userDetails.username}</span>
                        <span>*************</span>
                        <span>{userDetails.status == true ? "Yes" : "No"}</span>
                        <span>{userDetails.verificationStatus == true ? "Yes" : "No"}</span>
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
                    <div className='flex py-5 gap-6'>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>Name</span>
                            <span>Mobile Number</span>
                            <span className='whitespace-nowrap'>Alternate Mobile Number</span>
                            <span className='whitespace-nowrap'>Last 4 Digits of Aadhar</span>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span className='capitalize'>{userDetails.name}</span>
                            <span>{userDetails.mobileNo}</span>
                            <span>{userDetails.alternateMobileNo}</span>
                            <span>****</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-4xl px-20 flex flex-col pt-10'>
                    <div>
                        <span className='font-bold'>Professional Details</span>
                        <div className='border-b-gray-300 border-b-2'>
                        </div>
                    </div>
                    <div className='flex py-5 gap-6'>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>Employee UID</span>
                            <span>Email</span>
                            <span>Role</span>
                            <span>Role in Company</span>
                            <span>Company ID</span>
                            <span>Report To</span>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <span>{userDetails.employeeUid}</span>
                            <span>{userDetails.email}</span>
                            <span>{userDetails.role}</span>
                            <span>{userDetails.roleInCompany}</span>
                            <span>{userDetails.companyId}</span>
                            <span>{userDetails.reportTo}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Profile
