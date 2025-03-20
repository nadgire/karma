import React from 'react'
import { Formik, Field } from 'formik'

const ChangePassword = () => {
    return (
        <div className='w-full'>
            <h2 className='text-2xl font-semibold mx-10'>Change Password</h2>
            <div className='m-10'>

                <Formik initialValues={{}} onSubmit={async (values) => {
                    console.log(values);
                    try {
                        if (values.newPassword === values.reNewPassword) {
                            let changePassObj = { username: "", password: values.newPassword }
                            console.log(changePassObj);
                        }
                        else{
                            alert("Password is onot matching")
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}>
                    {({ values, handleChange, handleSubmit, handleReset }) => (
                        <form onSubmit={handleSubmit} className='space-y-3'>
                            <div className='flex flex-col w-[550px]'>
                                <label htmlFor="currentPassword">Current password</label>
                                <Field type="password" name='currentPassword' onChange={handleChange} className="p-1 border rounded-md" />
                            </div><div className='flex flex-col w-[550px]'>
                                <label htmlFor="newPassword">New password</label>
                                <Field type="password" name='newPassword' onChange={handleChange} className="p-1 border rounded-md" />
                            </div><div className='flex flex-col w-[550px]'>
                                <label htmlFor="reNewPassword">Re-type new password</label>
                                <Field type="password" name='reNewPassword' onChange={handleChange} className="p-1 border rounded-md" />
                            </div>
                            <div className='flex flex-row w-[550px] gap-6 justify-center pt-3'>
                                <button type='submit' className='hover:border-green-500 border-2 py-1 w-1/4 rounded-lg'>Submit</button>
                                <button type='reset' onClick={handleReset} className='hover:border-red-600 border-2 py-1 w-1/4 rounded-lg'>Clear</button>
                            </div>
                        </form>
                    )}

                </Formik>
            </div>

        </div>
    )
}

export default ChangePassword
