import React, { useState } from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import { Field, Formik } from 'formik';
import axios from 'axios';

const Signup = () => {

    let [userT, setUserT] = useState("employee");

    function userToggle() {
        let inner = document.getElementById("inner");
        let outer = document.getElementById("outer");

        console.log(inner);
        if (userT == "employee") {
            setUserT("organization");
            console.log(userT)
            inner.classList.toggle("left-0");
            inner.classList.toggle("right-0");
            inner.classList.toggle("bg-blue-600");
            inner.classList.toggle("bg-green-600");

        }
        else {
            setUserT("employee");
            console.log(userT)
            inner.classList.toggle("left-0");
            inner.classList.toggle("right-0");
            inner.classList.toggle("bg-blue-600");
            inner.classList.toggle("bg-green-600");
        }
    }

    return (
        <div>
            <Navbar />
            <div className='py-16'>
                <h1 className='text-3xl text-center font-semibold'>Start buliding your KARMA now</h1>
                <div className='flex flex-col items-center gap-2  pt-10' onClick={userToggle}>
                    <span>You are?</span>
                    <div className='flex items-center gap-2'>
                        <span>Employee</span>
                        <div id="outer" className='relative w-14 h-[29px] border rounded-full bg-gray-300'>
                            <div id="inner" className='absolute border w-7 h-7 rounded-full left-0 bg-blue-600'>
                            </div>
                        </div>
                        <span>Organization</span>
                    </div>
                </div>
                {(userT == "employee") && <Formik initialValues={{ name: "", username: "", password: "", repassword: "", email: "", mobile: "", alternateMobileNo: "", companyId: "", roleInCompany: "", reportTo: "", imageUrl: "" }} onSubmit={async (values) => {
                    try {
                        let signupObj = { name: values.name, username: values.username, password: values.password, email: values.email, mobile: values.mobile, alternateMobileNo: values.alternateMobileNo, companyId: values.companyId, roleInCompany: values.roleInCompany, reportTo: values.reportTo, imageUrl: values.imageUrl }
                        const response = await axios.post("http://13.61.233.178:8080/employee/signup", signupObj);
                        console.log(response);

                    } catch (error) {
                        console.log("something is wrong")
                    }
                }}>

                    {({ values, handleChange, handleSubmit, handleReset }) => (
                        <form onSubmit={handleSubmit} className='pt-10 flex flex-col gap-10 items-center'>

                            <div className='grid gap-3'>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="name">Full name</label>
                                    <Field type="text" name='name' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name='username' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name='password' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="repassword">Re-type password</label>
                                    <Field type="password" name='repassword' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="email">Personal Email</label>
                                    <Field type="email" name='email' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="mobileNo">Mobile</label>
                                    <Field type="number" name='mobileNo' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="alternateMobileNo">Alternate mobile</label>
                                    <Field type="number" name='alternateMobileNo' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="lastFourDigitOfAadharCard">Last 4 digits of Aadhar</label>
                                    <Field type="number" max-width="4" name='lastFourDigitOfAadharCard' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="role">Role</label>
                                    <Field type="text" name='role' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="companyId">Select your current company</label>
                                    <Field as="select" name='companyId' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="roleInCompany">Select the role in company</label>
                                    <Field as="select" name='roleInCompany' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="reportTo">Who you report to?</label>
                                    <Field as="select" name='reportTo' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="imageUrl">Select profile photo</label>
                                    <Field type="file" name='imageUrl' onChange={handleChange} className="p-1 border rounded-md" />
                                </div>
                            </div>

                            <div className='flex flex-row w-[550px] gap-6 justify-center'>
                                <button type='submit' className='hover:border-green-500 border-2 py-1 w-1/4 rounded-lg'>Submit</button>
                                <button type='reset' onClick={handleReset} className='hover:border-red-600 border-2 py-1 w-1/4 rounded-lg'>Clear</button>
                            </div>
                        </form>
                    )}

                </Formik >}

                {userT == "organization" && <div>Hello</div>}
            </div>
            <Footer />
        </div>
    )
}

export default Signup
