import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate
    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
    });

    function handleSubmit(values) {
        console.log(values);
        navigate("/dashboard");
    }

    return (
        <div className='flex flex-col w-[40%] text-center'>
            <span className='mt-10 mb-10 text-xl'>
                Sign in to KARMA
            </span>

            <div>
                <Formik initialValues={{ username: '', password: '', rememberCheck: false }} validationSchema={validationSchema} onSubmit={(values) => {
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
