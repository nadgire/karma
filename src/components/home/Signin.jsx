import React from 'react'

const Signin = () => {
    return (
        <div className='bg-green-500 w-1/3 shadow-2xl'>
            <div className='text-center space-y-3'>
                <div className=''>
                    <input type="radio" name='userType' value="Employee" defaultChecked="true" />{` Employee `}
                    <input type="radio" name='userType' value="Company" />{` Organization `}
                </div>
                <div className='flex justify-center space-x-5'>
                    <div className='flex flex-col space-y-3'>
                        <span>Username</span>
                        <span>Password</span>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <input type='text' className='border rounded-sm px-1 ' />
                        <input type='password'  className='border rounded-sm px-1 ' />
                    </div>
                </div>
                <div>
                    <button className='border px-5 py-1 rounded-sm'>Signin</button>
                </div>
            </div>
        </div>
    )
}

export default Signin
