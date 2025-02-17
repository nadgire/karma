import React from 'react'
import Logo from '../../assets/Images/KarmaLogo.jpg'

const Navbar = () => {

    const menuItems = ["Home", "About Us", "Contact Us"];

    function funMenuSelection(event){
        console.log(event.target.value);
    }

    return (
        <>
            <div className='shadow-xl select-none'>
                <div className='w-[1200px] flex items-center justify-between mx-auto'>
                    <div className='py-3'>
                        <img src={Logo} alt="" className='w-36' />
                    </div>

                    <div className='whitespace-nowrap'>
                        <ul className='flex space-x-10'>
                            {
                                menuItems.map((x) => {
                                    return <li key={x} value={x}>{x}</li>
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
