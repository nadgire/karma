import React, { useState } from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import { Field, Formik } from 'formik';
import axios from 'axios';

const Signup = () => {

    let [userT, setUserT] = useState("employee");
    let [step, setStep] = useState(1);
    function userToggle() {
        let inner = document.getElementById("inner");
        if (userT == "employee") {
            setUserT("organization");
            inner.classList.toggle("left-0");
            inner.classList.toggle("right-0");
            inner.classList.toggle("bg-blue-600");
            inner.classList.toggle("bg-green-600");

        }
        else {
            setUserT("employee");
            inner.classList.toggle("left-0");
            inner.classList.toggle("right-0");
            inner.classList.toggle("bg-blue-600");
            inner.classList.toggle("bg-green-600");
        }
    }

    return (
        <div>
            <Navbar />
            <div className='py-10 bg-gray-100'>
                <div className='w-fit border mx-auto px-10 py-16 bg-white rounded-lg shadow-xl'>
                    <h1 className='text-3xl text-center font-semibold'>Start buliding your KARMA now</h1>
                    <div className='flex flex-col items-center gap-2  pt-10 w-fit mx-auto'>
                        <span>You are?</span>
                        <div className='flex items-center gap-2'>
                            <span>Employee</span>
                            <div id="outer" className='relative w-14 h-[29px] border rounded-full bg-gray-300'>
                                <div onClick={userToggle} id="inner" className='absolute border w-7 h-7 rounded-full left-0 bg-blue-600'>
                                </div>
                            </div>
                            <span>Organization</span>
                        </div>
                    </div>



                    {/* User Signup Form */}
                    {(userT === "employee") && (<>
                        {/* Step Progress Bar */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <div className={`w-8 h-8 rounded-full flex justify-center items-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                1
                            </div>
                            <div className={`w-8 h-8 rounded-full flex justify-center items-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                2
                            </div>
                            <div className={`w-8 h-8 rounded-full flex justify-center items-center ${step === 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                3
                            </div>
                        </div>
                        <Formik
                            initialValues={{ name: "", username: "", password: "", repassword: "", email: "", mobileNo: "", alternateMobileNo: "", companyId: "", roleInCompany: "", reportTo: "", imageUrl: "" }}
                            onSubmit={async (values) => {
                                try {
                                    let signupObj = { username: values.username, name: values.name, email: values.email, mobileNo: values.mobileNo, alternateMobileNo: values.alternateMobileNo, imageUrl: values.imageUrl, verificationStatus: true, status: true, role: "Developer", lastFourDigitOfAadharCard: 1245, companyId: values.companyId, roleInCompany: values.roleInCompany, reportTo: values.reportTo, password: values.password };
                                    console.log(signupObj)

                                    const response = await axios.post("https://13.61.233.178:8080/employee/signup", signupObj, { headers: { 'Content-Type': 'application/json' } });
                                    console.log(response);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        >
                            {({ values, handleChange, handleSubmit, handleReset }) => (
                                <form onSubmit={handleSubmit} className="pt-10 flex flex-col gap-10 items-center">
                                    {/* Step 1 */}
                                    {step === 1 && (
                                        <div className="grid gap-3">
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="username">Username</label>
                                                <Field type="text" name="username" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="password">Password</label>
                                                <Field type="password" name="password" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="repassword">Re-type password</label>
                                                <Field type="password" name="repassword" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2 */}
                                    {step === 2 && (
                                        <div className="grid gap-3">
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="name">Full name</label>
                                                <Field type="text" name="name" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="email">Personal Email</label>
                                                <Field type="email" name="email" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="mobileNo">Mobile</label>
                                                <Field type="number" name="mobileNo" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="alternateMobileNo">Alternate mobile</label>
                                                <Field type="number" name="alternateMobileNo" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className='flex flex-col w-[550px]'>
                                                <label htmlFor="lastFourDigitOfAadharCard">Last 4 digits of Aadhar</label>
                                                <Field type="number" name='lastFourDigitOfAadharCard' onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3 */}
                                    {step === 3 && (
                                        <div className="grid gap-3">
                                            <div className='flex flex-col w-[550px]'>
                                                <label htmlFor="role">Role</label>
                                                <Field type="text" name='role' onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="companyId">Select your current company</label>
                                                <Field as="select" name="companyId" onChange={handleChange} className="p-1 border rounded-md">
                                                    <option value="A">A</option>
                                                    <option value="A1">A1</option>
                                                </Field>
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="roleInCompany">Select the role in company</label>
                                                <Field as="select" name="roleInCompany" onChange={handleChange} className="p-1 border rounded-md">
                                                    <option value="B">B</option>
                                                    <option value="B1">B1</option>
                                                </Field>
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="reportTo">Who you report to?</label>
                                                <Field as="select" name="reportTo" onChange={handleChange} className="p-1 border rounded-md">
                                                    <option value="C">C</option>
                                                    <option value="C1">C1</option>
                                                </Field>
                                            </div>
                                            <div className="flex flex-col w-[550px]">
                                                <label htmlFor="imageUrl">Select profile photo</label>
                                                <Field type="file" name="imageUrl" onChange={handleChange} className="p-1 border rounded-md" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex flex-row w-[550px] gap-6 justify-center">
                                        {step > 1 && (
                                            <>
                                                <input type="button" onClick={() => setStep(step - 1)} className="hover:border-blue-500 border-2 py-1 w-1/4 rounded-lg" value="Back" />

                                            </>
                                        )}
                                        {step < 3 && (
                                            <>
                                                <input type="button" onClick={() => setStep(step + 1)} className="hover:border-blue-500 border-2 py-1 w-1/4 rounded-lg" value="Next" />

                                            </>
                                        )}
                                        {step == 3 && (
                                            <>
                                                <input type="submit" className="hover:border-blue-500 border-2 py-1 w-1/4 rounded-lg" value="Submit" />

                                            </>
                                        )}
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </>
                    )}
                    {/* user signup */}
                    {/* {(userT == "employee") && <Formik initialValues={{ name: "", username: "", password: "", repassword: "", email: "", mobileNo: "", alternateMobileNo: "", companyId: "", roleInCompany: "", reportTo: "", imageUrl: "" }} onSubmit={async (values) => {
                    try {
                        let signupObj = { username: values.username, name: values.name, email: values.email, mobileNo: values.mobileNo, alternateMobileNo: values.alternateMobileNo, imageUrl: values.imageUrl, verificationStatus: true, status: true, role: "Developer", lastFourDigitOfAadharCard: 1245, companyId: values.companyId, roleInCompany: values.roleInCompany, reportTo: values.reportTo, password: values.password };
                        const response = await axios.post("http://13.61.233.178:8080/employee/signup", signupObj, { headers: { 'Content-Type': 'application/json' } });
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
                                    <Field as="select" name='companyId' onChange={handleChange} className="p-1 border rounded-md" >
                                        <option value="A">A</option>
                                        <option value="A1">A1</option>

                                    </Field>
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="roleInCompany">Select the role in company</label>
                                    <Field as="select" name='roleInCompany' onChange={handleChange} className="p-1 border rounded-md">
                                        <option value="B">B</option>
                                        <option value="B1">B1</option>

                                    </Field>
                                </div>
                                <div className='flex flex-col w-[550px]'>
                                    <label htmlFor="reportTo">Who you report to?</label>
                                    <Field as="select" name='reportTo' onChange={handleChange} className="p-1 border rounded-md">
                                        <option value="C">C</option>
                                        <option value="C1">C1</option>

                                    </Field>
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

                </Formik >} */}

                    {/* Company signup */}
                    {userT == "organization" && <Formik initialValues={{ name: "", username: "", password: "", repassword: "", email: "", mobile: "", alternateMobileNo: "", companyId: "", roleInCompany: "", reportTo: "", imageUrl: "" }} onSubmit={async (values) => {
                        try {
                            let signupObj = { name: values.name, username: values.username, password: values.password, email: values.email, mobile: values.mobile, alternateMobileNo: values.alternateMobileNo, companyId: values.companyId, roleInCompany: values.roleInCompany, reportTo: values.reportTo, imageUrl: values.imageUrl }
                            const response = await axios.post("http://13.61.233.178:8080/company/signup", signupObj);
                            console.log(response);

                        } catch (error) {
                            console.log("something is wrong")
                        }
                    }}>

                        {({ values, handleChange, handleSubmit, handleReset }) => (
                            <form onSubmit={handleSubmit} className='pt-10 flex flex-col gap-10 items-center'>

                                <div className='grid gap-3'>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="name">Company name</label>
                                        <Field type="text" name='name' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="email">Company email</label>
                                        <Field type="email" name='email' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="password">Alternate email</label>
                                        <Field type="email" name='alternateEmail' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="mobileNo">Mobile number</label>
                                        <Field type="number" name='mobileNo' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="password">Password</label>
                                        <Field type="password" name='password' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="email">Industry Type</label>
                                        <Field type="text" name='industry' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>
                                    <div className='flex flex-col w-[550px]'>
                                        <label htmlFor="website">Website</label>
                                        <Field type="text" name='website' onChange={handleChange} className="p-1 border rounded-md" />
                                    </div>

                                </div>

                                <div className='flex flex-row w-[550px] gap-6 justify-center'>
                                    <button type='submit' className='hover:border-green-500 border-2 py-1 w-1/4 rounded-lg'>Submit</button>
                                    <button type='reset' onClick={handleReset} className='hover:border-red-600 border-2 py-1 w-1/4 rounded-lg'>Clear</button>
                                </div>
                            </form>
                        )}

                    </Formik >}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
