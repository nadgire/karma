import React from 'react'
import Logo from '../../assets/Images/KarmaLogo.jpg'
import { useNavigate } from 'react-router';

const Navbar = () => {

    const menuItems = ["Home", "About Us", "Contact Us"];
    const navigate = useNavigate();

    function funMenuSelection(event) {
        
        console.log(event.currentTarget.textContent);
        if (event.currentTarget.textContent == "About Us") {
            navigate("/about-us");
        }
        if (event.currentTarget.textContent == "Contact Us") {
            navigate("/contact-us");
        }
        if (event.currentTarget.textContent == "Home") {
            navigate("/");
        }
    }

    return (
        <>
            <div className='shadow-xl select-none'>
                <div className='max-w-[1280px] px-10 xl:px-0 flex items-center justify-between mx-auto'>
                    <div className='py-3'>
                        <img src={Logo} alt="" className='w-36' />
                    </div>

                    <div className='whitespace-nowrap'>
                        <ul className='flex space-x-10'>
                            {
                                menuItems.map((x) => {
                                    return (
                                        <li key={x} onClick={funMenuSelection}>{x}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar
