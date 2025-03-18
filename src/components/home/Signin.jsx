import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import CreateNewAccountModal from '../CreateNewAccountModal';
import ForgotPasswordModal from '../ForgotPasswordModal';
import axios from 'axios';
import { Field, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();

    const [isNewAccountDialogOpen, setIsNewAccountDialogOpen] = useState(false);
    // const openNewAccountDialog = () => {
    //     setIsNewAccountDialogOpen(true);
    // };

    const closeDialog = () => {
        setIsNewAccountDialogOpen(false);
        setIsForgotPasswordDialogOpen(false);
    };

    const [isForgotPasswordDialogOpen, setIsForgotPasswordDialogOpen] = useState(false);
    const openForgotPasswordDialog = () => {
        setIsForgotPasswordDialogOpen(true);
    };

    return (
        <Formik initialValues={{ username: "", password: "", userType: "" }} onSubmit={async (values) => {
            console.log("submitted");
            try {
                if (values.userType == "Company") {
                    console.log("com");
                }
                if (values.userType == "Employee") {
                    console.log(values);
                    var loginObj = { username: values.username, password: values.password }
                    const response = await axios.post("http://13.61.233.178:8080/employee/login", loginObj, { headers: { 'Content-Type': 'application/json' } });
                    if (response.data.status == "success") {
                        navigate("/dashboard");
                    }
                }

            } catch (error) {
                alert("Login failed");
            }
        }}>
            {({ values, handleChange, handleSubmit, handleReset }) => (
                <form onSubmit={handleSubmit} className='w-1/3 shadow-lg py-10 whitespace-nowrap rounded-lg select-none '>
                    <div className='text-center space-y-5 w-full'>
                        <div className='flex gap-3 justify-center'>
                            <div className='flex items-center gap-1'>
                                <Field type="radio" name='userType' value="Employee" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                {` Employee `}
                            </div>
                            <div className='flex items-center gap-1'>
                                <Field type="radio" name='userType' value="Company" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                {` Organization `}
                            </div>
                        </div>
                        <div className='flex flex-col mx-auto space-y-3 w-2/3'>
                            <Field type='text' name='username' className='border rounded-sm px-1 py-[2px]' placeholder='Username..' onChange={handleChange} />
                            <Field type='password' name='password' className='border rounded-sm px-1 py-[2px]' placeholder='Password..' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <button type='submit' className='border px-5 py-1 rounded-sm w-2/5 mx-auto bg-blue-600 text-white hover:bg-blue-700' onClick={handleSubmit}>Submit</button>
                            <a href="" onClick={(event) => { event.preventDefault(); openForgotPasswordDialog(); }} className='hover:underline w-1/2 mx-auto'>Forgotten password?</a>
                            {isForgotPasswordDialogOpen && <ForgotPasswordModal modalOff={closeDialog} />}
                        </div>
                        <Link to="/signup">
                            <button onClick={() => { navigateToSignUp() }} className='border px-5 py-1 rounded-sm w-2/3 mx-auto'>Create a new account</button>

                            {/* {isNewAccountDialogOpen && <CreateNewAccountModal modalOff={closeDialog} />} */}

                        </Link>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default Signin
