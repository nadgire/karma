import React from 'react'
import Signin from './Signin'
import HeroDetails from './HeroDetails'

const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex h-[calc(100vh-52px)] items-center select-none'>
            <HeroDetails />
            <Signin />
        </div>
    )
}

export default Hero
