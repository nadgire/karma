import React from 'react'

const DeleteAccount = () => {
    return (
        <div className='bg-white w-full h-fit rounded-4xl p-10 text-center'>
            <span className='text-2xl'>Delete Account</span>
            <div className='flex gap-10 justify-center p-10'>
                <div className='flex flex-col text-left gap-4'>
                    <label className='py-1.5' htmlFor="currentPassword">Enter Password</label>


                </div>

                <div className='flex flex-col text-left gap-4'>
                    <input className='border-[#F95B15] border-2 px-2 py-1 rounded-2xl' type="password" id={"currentPassword"} name='currentPassword' />

                </div>
            </div>
            <div>
                <button type='submit' className='px-5 py-2 bg-[#F95B15] rounded-3xl text-white font-semibold'>Delete Account</button>
            </div>
        </div>
    )
}

export default DeleteAccount
