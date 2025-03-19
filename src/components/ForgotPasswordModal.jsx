import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router';

const ForgotPasswordModal = (props) => {

    const [isDialogOpen, setIsDialogOpen] = useState(true);

    // Function to close the dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
        props.modalOff(false);
    };

    return (
        <div>
            {isDialogOpen && (
                <div

                    className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                >
                    {/* Dialog content */}
                    <div className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm">
                        <div className="relative flex flex-col bg-white">
                            {/* Dialog header */}
                            <div className="relative m-2.5 items-center flex justify-center text-white mt-4 h-16 rounded-md bg-slate-800">
                                <h3 className="text-2xl">Forgot Password?</h3>
                                <IoIosCloseCircleOutline className='absolute top-2 right-2 text-3xl' onClick={closeDialog} />

                            </div>

                            {/* Dialog body */}
                            <div className="flex flex-col gap-4 p-6">
                                <div className="w-full max-w-sm min-w-[200px]">
                                    <label className="block mb-2 text-sm text-slate-600">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="w-full max-w-sm min-w-[200px]">
                                    <label className="block mb-2 text-sm text-slate-600">Password</label>
                                    <input
                                        type="password"
                                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                        placeholder="Your Password"
                                    />
                                </div>


                            </div>

                            {/* Dialog footer */}
                            <div className="p-6 pt-0">
                                <button
                                    className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                                <p className="flex justify-center mt-6 text-sm text-slate-600">
                                    Already have an account?
                                    <Link to="/" className="ml-1 text-sm font-semibold text-slate-700 underline" onClick={closeDialog}>
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ForgotPasswordModal
