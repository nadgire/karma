import React, { useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(5, "Password must be at least 8 characters")
            .required("Password is required"),
    });

    async function handleSubmit(values) {
        // fetch(`http://13.61.233.178:8080/employee/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         "username": values.username,
        //         "password": values.password,
        //     }),
        // })
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     }
        //     )
        //     .then((data) => {
        //         console.log(data);
        //         localStorage.setItem('token', data.token);
        //         localStorage.setItem('user', JSON.stringify(data.username));
        //         navigate("/dashboard");
        //     }
        //     )
        //     .catch((error) => {
        //         console.error('There has been a problem with your fetch operation:', error);
        //     }
        //     );
        // console.log(response.data);
        const payload = {
            username: values.username,
            password: values.password,
        }
        try {
            const response = await axios.post("http://13.61.233.178:8080" + "/employee/login", payload);
            console.log(response);
            if (response.status == 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.username));
                localStorage.setItem('user_id', response.data.employeeId);
                navigate("/dashboard");
            }
        } catch (error) {
            console.error('There has been a problem with your axios request:', error);
        }
    }

    const [type, setType] = useState("Employee");

    function typeToggle() {
        if (type === 'Employee') {
            $('#typeToggle').toggleClass('left-0');
            $('#typeToggle').toggleClass('right-0');
            setType("Organization");
            console.log("now : ", type);
        }
        else {
            $('#typeToggle').toggleClass('left-0');
            $('#typeToggle').toggleClass('right-0');
            setType("Employee");
            console.log("now : ", type);
        }
    }

    return (
        <div className='flex flex-col w-[40%] text-center'>
            <span className='m-10 text-xl'>
                Sign in to KARMA
            </span>

            <div>
                <div className='flex items-center justify-center gap-2 mb-10'>
                    <span> Employee </span>
                    <div className='bg-gray-500 min-w-14 h-8 rounded-full relative' onClick={typeToggle}>
                        <div id={'typeToggle'} className='bg-[#F95B15] w-8 h-8 rounded-full absolute left-0'></div>
                    </div>
                    <span> Organization </span>
                </div>
                <Formik initialValues={{ username: '', password: '' }} validationSchema={validationSchema} onSubmit={(values) => {
                    handleSubmit(values);
                }}>
                    {({ handleSubmit, handleChange, values }) => (
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <div className='grid'>
                                <label htmlFor={'username'} className='text-start text-sm ms-1'>Username</label>
                                <div className='relative flex items-center'>
                                    <Field name={'username'} id={'username'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} autoFocus={true} />
                                    <FaUser className='absolute right-2 text-gray-500 text-xl' />
                                </div>
                                <ErrorMessage name="username" component="div" className="error text-red-600 text-start" />
                            </div>

                            <div className='grid'>
                                <label htmlFor={'password'} className='text-start text-sm ms-1'>Password</label>
                                <div className='relative flex items-center'>
                                    <Field name={'password'} id={'password'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    <IoMdLock className='absolute right-2 text-gray-500 text-2xl' />
                                </div>
                                <ErrorMessage name="password" component="div" className="error text-red-600 text-start" />
                            </div>
                            <div className='flex items-center justify-between'>
                                <label>
                                    <Field type="checkbox" name="rememberCheck" />
                                    <span> Remember me</span>
                                </label>
                                <label htmlFor="forgotPassword">Forgot Password?</label>
                            </div>
                            <div className='pt-5'>
                                <button type='submit' className='capitalize bg-[#F95B15] text-white font-semibold px-10 py-2 rounded-full' onSubmit={handleSubmit}>sign in</button>
                            </div>
                            {/* <div className='flex justify-center gap-1 capitalize'>
                                <span>new user? </span>
                                <strong className='text-[#F95B15]'>
                                    sign up
                                </strong>
                            </div> */}

                        </form>
                    )}

                </Formik>
            </div >
        </div>

    )
}

export default Signin
