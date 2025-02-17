import React from 'react'
import Signin from './Signin'
import HeroDetails from './HeroDetails'

const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex h-screen items-center'>
            <HeroDetails />
            <Signin />
        </div>
    )
}

export default Hero
