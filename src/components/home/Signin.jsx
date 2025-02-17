import React from 'react'
import { useNavigate } from 'react-router';

const Signin = () => {

    const navigate = useNavigate();

    function funSigninSubmit(event) {
        navigate("/employee-dashboard");
    }

    return (
        <div className='w-1/3 shadow-lg py-10 whitespace-nowrap'>
            <div className='text-center space-y-5 w-full'>
                <div className=''>
                    <input type="radio" name='userType' value="Employee" defaultChecked="true" />{` Employee `}
                    <input type="radio" name='userType' value="Company" />{` Organization `}
                </div>
                <div className='flex flex-col mx-auto space-y-3 w-2/3'>
                    <input type='text' className='border rounded-sm px-1 py-[2px]' placeholder='Username..' />
                    <input type='password' className='border rounded-sm px-1 py-[2px]' placeholder='Password..' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <button className='border px-5 py-1 rounded-sm w-2/5 mx-auto bg-blue-600 text-white hover:bg-blue-700' onClick={(event) => { funSigninSubmit(event) }}>Submit</button>
                    <a href="" onClick={(event) => { event.preventDefault(); funForgotPassword(); }} className='hover:underline w-1/2 mx-auto'>Forgotten password?</a>
                </div>
                <div>
                    <button className='border px-5 py-1 rounded-sm w-2/3 mx-auto'>Create a new account</button>
                </div>
            </div>
        </div>
    )
}

export default Signin
