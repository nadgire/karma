import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import EmpSignup from './EmpSignup';
import OrgSignup from './OrgSignup';

const Signup = () => {

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
        <div className='flex flex-col w-full text-center'>
            <span className='mt-10 mb-10 text-xl capitalize'>
                Start building your KARMA
            </span>
            <div className='flex items-center justify-center gap-2'>
                <span> Employee </span>
                <div className='bg-gray-500 min-w-14 h-8 rounded-full relative' onClick={typeToggle}>
                    <div id={'typeToggle'} className='bg-[#F95B15] w-8 h-8 rounded-full absolute left-0'></div>
                </div>
                <span> Organization </span>
            </div>
            {
                (type === 'Employee') ? (
                    <EmpSignup />
                ) : (<OrgSignup />)
            }
        </div >
    )
}

export default Signup
