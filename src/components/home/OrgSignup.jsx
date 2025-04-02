import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const OrgSignup = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        repassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please retype your password"),
        mobileNo: Yup.string()
            .matches(
                /^[0-9]{10}$/,
                "Mobile number must be exactly 10 digits"
            )
            .required("Mobile number is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        alternateEmail: Yup.string()
            .email("Invalid email address"),
        industry: Yup.string()
            .min(3, "Industry name must be at least 3 characters")
            .required("Industry name is required"),
        website: Yup.string()
            .url("Invalid URL format")
            .required("Website URL is required"),
    });

    return (
        <div className='mt-10 mx-20'>
            <Formik className={'overflow-auto'} initialValues={{ username: '', password: '', rememberCheck: false }} validationSchema={validationSchema} onSubmit={(values) => {
                console.log(values)
            }}>
                {({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit} className=''>

                        <div className='flex gap-10 w-full'>
                            <div className='space-y-5 w-1/2'>
                                <div className='grid'>
                                    <label htmlFor={'name'} className='text-start text-sm ms-1'>Name of the organization</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'name'} id={'name'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} autoFocus={true} />
                                    </div>
                                    <ErrorMessage name="name" component="div" className="error text-red-600 text-start" />
                                </div>
                                <div className='grid'>
                                    <label htmlFor={'password'} className='text-start text-sm ms-1'>Password</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'password'} id={'password'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="password" component="div" className="error text-red-600 text-start" />
                                </div>
                                <div className='grid'>
                                    <label htmlFor={'repassword'} className='text-start text-sm ms-1'>Re-type password</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'repassword'} id={'repassword'} type={'password'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="repassword" component="div" className="error text-red-600 text-start" />
                                </div>
                                <div className='grid'>
                                    <label htmlFor={'mobileNo'} className='text-start text-sm ms-1'>Contact number</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'mobileNo'} id={'mobileNo'} type={'number'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="mobileNo" component="div" className="error text-red-600 text-start" />
                                </div>
                            </div>

                            <div className='space-y-5 w-1/2'>

                                <div className='grid'>
                                    <label htmlFor={'email'} className='text-start text-sm ms-1'>Email</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'email'} id={'email'} type={'email'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="email" component="div" className="error text-red-600 text-start" />
                                </div>

                                <div className='grid'>
                                    <label htmlFor={'alternateEmail'} className='text-start text-sm ms-1'>Alternate email</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'alternateEmail'} id={'alternateEmail'} type={'email'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="alternateEmail" component="div" className="error text-red-600 text-start" />
                                </div>

                                <div className='grid'>
                                    <label htmlFor={'industry'} className='text-start text-sm ms-1'>Industry</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'industry'} id={'industry'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="industry" component="div" className="error text-red-600 text-start" />
                                </div>
                                <div className='grid'>
                                    <label htmlFor={'website'} className='text-start text-sm ms-1'>Website</label>
                                    <div className='relative flex items-center'>
                                        <Field name={'website'} id={'website'} type={'text'} className={'border-b-2 py-2 pl-2 pr-8 border-b-[#F95B15] text-xl text-[#F95B15] w-full focus:border-b-[#F95B15] focus:outline-0'} onChange={handleChange} />
                                    </div>
                                    <ErrorMessage name="website" component="div" className="error text-red-600 text-start" />
                                </div>
                            </div>
                        </div>

                        <div className='pt-10 flex relative'>
                            <button className='capitalize bg-[#F95B15] text-white font-semibold w-40 py-2 rounded-full absolute right-0' type={"submit"}>Register</button>
                        </div>

                    </form>
                )}

            </Formik>
        </div>
    )
}

export default OrgSignup
