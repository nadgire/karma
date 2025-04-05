import React from 'react'

const ChangePassword = () => {
    return (
        <div className='bg-white w-full h-fit rounded-4xl p-10 text-center'>
            <span className='text-2xl'>Change Password</span>
            <div className='flex gap-10 justify-center p-10'>
                <div className='flex flex-col text-left gap-4'>
                    <label className='py-1.5' htmlFor="currentPassword">Current password</label>
                    <label className='py-1.5' htmlFor="newPassword">New password</label>
                    <label className='py-1.5' htmlFor="rePassword">Re-type new password</label>

                </div>

                <div className='flex flex-col text-left gap-4'>
                    <input className='border-[#F95B15] border-2 px-2 py-1 rounded-2xl' type="password" id={"currentPassword"} name='currentPassword' />
                    <input className='border-[#F95B15] border-2 px-2 py-1 rounded-2xl' type="password" id={"newPassword"} name='newPassword' />
                    <input className='border-[#F95B15] border-2 px-2 py-1 rounded-2xl' type="password" id={"rePassword"} name='rePassword' />
                </div>
            </div>
            <div>
                <button type='submit' className='px-5 py-2 bg-[#F95B15] rounded-3xl text-white font-semibold'>Change Password</button>
            </div>
        </div>
    )
}

export default ChangePassword
