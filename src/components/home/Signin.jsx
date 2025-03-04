import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import CreateNewAccountModal from '../CreateNewAccountModal';
import ForgotPasswordModal from '../ForgotPasswordModal';

const Signin = () => {

    const navigate = useNavigate();
    const txtusername = useRef();
    const txtpassword = useRef();

    function funSigninSubmit(event) {

        //login code
        event.preventDefault();

        //get radio value
        var radios = document.getElementsByName('userType');
        var userType = '';
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                userType = radios[i].value;
                break;
            }
        }

        //Navigatge to employee dashboard
        if (userType == "Employee") {
            navigate("/employee-dashboard");
        }
    }

    const [isNewAccountDialogOpen, setIsNewAccountDialogOpen] = useState(false);
    const openNewAccountDialog = () => {
        setIsNewAccountDialogOpen(true);
    };

    const closeDialog = () => {
        setIsNewAccountDialogOpen(false);
        setIsForgotPasswordDialogOpen(false);
    };

    const [isForgotPasswordDialogOpen, setIsForgotPasswordDialogOpen] = useState(false);
    const openForgotPasswordDialog = () => {
        setIsForgotPasswordDialogOpen(true);
    };

    return (
        <div className='w-1/3 shadow-lg py-10 whitespace-nowrap rounded-lg select-none '>
            <div className='text-center space-y-5 w-full'>
                <div className='flex gap-3 justify-center'>
                    <div className='flex items-center gap-1'>
                        <input type="radio" name='userType' value="Employee" defaultChecked="true" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        {` Employee `}
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="radio" name='userType' value="Company" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        {` Organization `}
                    </div>
                </div>
                <div className='flex flex-col mx-auto space-y-3 w-2/3'>
                    <input type='text' ref={txtusername} className='border rounded-sm px-1 py-[2px]' placeholder='Username..' />
                    <input type='password' ref={txtpassword} className='border rounded-sm px-1 py-[2px]' placeholder='Password..' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <button className='border px-5 py-1 rounded-sm w-2/5 mx-auto bg-blue-600 text-white hover:bg-blue-700' onClick={(event) => { funSigninSubmit(event) }}>Submit</button>
                    <a href="" onClick={(event) => { event.preventDefault(); openForgotPasswordDialog(); }} className='hover:underline w-1/2 mx-auto'>Forgotten password?</a>
                    {isForgotPasswordDialogOpen && <ForgotPasswordModal modalOff={closeDialog} />}
                </div>
                <div>
                    <button onClick={() => { openNewAccountDialog() }} className='border px-5 py-1 rounded-sm w-2/3 mx-auto'>Create a new account</button>

                    {isNewAccountDialogOpen && <CreateNewAccountModal modalOff={closeDialog} />}

                </div>
            </div>
        </div>
    )
}

export default Signin
