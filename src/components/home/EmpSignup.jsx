import React, { useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import * as Yup from 'yup'

const EmpSignup = () => {

    const stepArr = [1, 2, 3];
    let [step, setStep] = useState(1);

    function funBtnNext() {
        setStep(step + 1);
    }

    function funBtnPrev() {
        console.log()
        setStep(step - 1);
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        repassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please retype your password"),
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        mobileNo: Yup.string()
            .matches(
                /^[0-9]{10}$/,
                "Mobile number must be exactly 10 digits"
            )
            .required("Mobile number is required"),
        alternateMobileNo: Yup.string()
            .matches(
                /^[0-9]{10}$/,
                "Mobile number must be exactly 10 digits"
            ),
        lastFourDigitOfAadharCard: Yup.string()
            .matches(
                /^[0-9]{4}$/,
                "Must be exactly 4 digits"
            )
            .required("Aadhar number is required"),
        role: Yup.string()
            .min(3, "Role must be at least 3 characters")
            .required("Role is required"),
        companyId: Yup.string()
            .min(3, "Company ID must be at least 3 characters")
            .required("Company ID is required"),
        roleInCompany: Yup.string()
            .min(3, "Role in company must be at least 3 characters")
            .required("Role in company is required"),
        reportTo: Yup.string()
            .min(3, "Report to must be at least 3 characters")
            .required("Report to is required"),
        imageUrl: Yup.mixed()
            .required("Image is required")
            .test("fileSize", "File too large", (value) => {
                return value && value.size <= 2 * 1024 * 1024; // 2MB
            })
            .test("fileFormat", "Unsupported file format", (value) => {
                return value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
            }),
    });

    function handleSubmit(values){
        
    }

    return (
        <div className='mt-10 w-[40%] mx-auto'>
            <Formik initialValues={{ username: '', password: '', rememberCheck: false }} validationSchema={validationSchema} onSubmit={(values) => {
                handleSubmit(values);
            }}>
                {({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit} className='space-y-5'>

                        {
                            (step == 1) && (
                                <>
                                    <div className='grid'>
                                        <label htmlFor={'username'} className='text-start text-sm ms-1'>Username</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'username'} id={'username'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} autoFocus={true} />
                                        </div>
                                        <ErrorMessage name="username" component="div" className="error text-red-600 text-start" />
                                    </div>

                                    <div className='grid'>
                                        <label htmlFor={'password'} className='text-start text-sm ms-1'>Password</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'password'} id={'password'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="password" component="div" className="error text-red-600 text-start" />
                                    </div>

                                    <div className='grid'>
                                        <label htmlFor={'repassword'} className='text-start text-sm ms-1'>Re-type Password</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'repassword'} id={'repassword'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="repassword" component="div" className="error text-red-600 text-start" />
                                    </div></>
                            )
                        }

                        {
                            (step == 2) && (
                                <>
                                    <div className='grid'>
                                        <label htmlFor={'name'} className='text-start text-sm ms-1'>Name</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'name'} id={'name'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="name" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'email'} className='text-start text-sm ms-1'>Email</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'email'} id={'email'} type={'email'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="email" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'mobileNo'} className='text-start text-sm ms-1'>Mobile number</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'mobileNo'} id={'mobileNo'} type={'number'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="mobileNo" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'alternateMobileNo'} className='text-start text-sm ms-1'>Alternate mobile number</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'alternateMobileNo'} id={'alternateMobileNo'} type={'number'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="alternateMobileNo" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'lastFourDigitOfAadharCard'} className='text-start text-sm ms-1'>Last 4 digits of Aadhar</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'lastFourDigitOfAadharCard'} id={'lastFourDigitOfAadharCard'} type={'number'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="lastFourDigitOfAadharCard" component="div" className="error text-red-600 text-start" />
                                    </div>

                                </>
                            )
                        }

                        {
                            (step == 3) && (
                                <>
                                    <div className='grid'>
                                        <label htmlFor={'role'} className='text-start text-sm ms-1'>Role</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'role'} id={'role'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="role" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'companyId'} className='text-start text-sm ms-1'>Company ID</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'companyId'} id={'companyId'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="companyId" component="div" className="error text-red-600 text-start" />
                                    </div>
                                    <div className='grid'>
                                        <label htmlFor={'roleInCompany'} className='text-start text-sm ms-1'>Role in company</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'roleInCompany'} id={'roleInCompany'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="roleInCompany" component="div" className="error text-red-600 text-start" />
                                    </div>

                                    <div className='grid'>
                                        <label htmlFor={'reportTo'} className='text-start text-sm ms-1'>Report to</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'reportTo'} id={'reportTo'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="reportTo" component="div" className="error text-red-600 text-start" />
                                    </div>

                                    <div className='grid'>
                                        <label htmlFor={'imageUrl'} className='text-start text-sm ms-1'>Profile photo</label>
                                        <div className='relative flex items-center'>
                                            <Field name={'imageUrl'} id={'imageUrl'} type={'file'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                        </div>
                                        <ErrorMessage name="imageUrl" component="div" className="error text-red-600 text-start" />
                                    </div>
                                </>
                            )
                        }

                        <div className='pt-5 flex relative'>
                            {
                                (step >= 2 && step <= 3) && (
                                    <button className='capitalize bg-[#F95B15] text-white font-semibold w-40 py-2 rounded-full absolute left-0' type={"button"} onClick={funBtnPrev}>previous</button>
                                )
                            }
                            {
                                (step >= 1 && step <= 2) && (
                                    <button className='capitalize bg-[#F95B15] text-white font-semibold w-40 py-2 rounded-full absolute right-0' type={"button"} onClick={funBtnNext}>next</button>
                                )
                            }
                            {
                                (step == 3) && (
                                    <button className='capitalize bg-[#F95B15] text-white font-semibold w-40 py-2 rounded-full absolute right-0' type={"submit"}>submit</button>
                                )
                            }                            </div>
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
    )
}

export default EmpSignup
