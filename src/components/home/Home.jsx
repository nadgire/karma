import React, { useState } from 'react'
import { RxTriangleLeft } from "react-icons/rx";
import Signin from './Signin';
import Signup from './Signup';

const Home = () => {

  const [formFlag, setFormFlag] = useState("login");

  function handleClick(event) {
    if (event.currentTarget.id === 'loginDiv') {
      setFormFlag("login");
    }
    if (event.currentTarget.id === 'signupDiv') {
      setFormFlag("signup");
    }

  }

  return (
    <div className='flex h-[100vh] whitespace-nowrap'>
      <div className='flex flex-col w-[50%] uppercase font-[900]'>
        <div id={'loginDiv'} className='bg-white h-[50%] relative' onClick={handleClick}>
          <div className='flex items-center justify-center h-full gap-6'>
            <div className='bg-[#F95B15] h-28 w-4'>

            </div>
            <div className='flex flex-col text-6xl text-[#F95B15]'>
              <span>log</span>
              <span>in</span>
            </div>
          </div>
          {
            formFlag === 'login' && (
              <div id={'triangle'}>
                <RxTriangleLeft className='text-[#F1F2ED] text-[300px] absolute right-0 translate-x-[120px] top-1/2 -translate-y-1/2' />
              </div>
            )
          }
        </div>
        <div id={'signupDiv'} className='bg-[#F95B15] h-[50%] relative' onClick={handleClick}>
          <div className='flex items-center justify-center h-full gap-6'>
            <div className='bg-white h-28 w-4'>

            </div>
            <div className='flex flex-col text-6xl text-white'>
              <span>sign</span>
              <span>up</span>
            </div>

            {
              formFlag === 'signup' && (
                <div id={'triangle'}>
                  <RxTriangleLeft className='text-[#F1F2ED] text-[300px] absolute right-0 translate-x-[120px] top-1/2 -translate-y-1/2' />
                </div>
              )
            }

          </div>
        </div>
      </div>

      <div className='w-[50%] bg-[#F1F2ED]'>
        {
          formFlag === 'signin' && (<Signin />)
        }
        {
          formFlag === 'signup' && (<Signup />)
        }
      </div>
    </div>
  )
}

export default Home
