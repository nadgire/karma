import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='bg-black text-white select-none '>
            <div className='max-w-[1200px] mx-auto py-10 flex gap-28'>
                <ul>
                    <li className='font-bold text-lg'>
                        Home
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>

                <ul>
                    <li className='font-bold text-lg'>
                        About Us
                    </li>
                    <li>
                        
                    </li>
                </ul>

                <ul>
                    <li className='font-bold text-lg'>
                        Contact Us
                    </li>
                    <li>
                        <span className='block'>BitCode, Nalstop, Pune.</span>
                        <span>+91 888 8888 888</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
