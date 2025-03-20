import React from 'react'

const EmpToCompany = () => {
  return (
    <div className='w-full'>
      <h2 className='text-2xl font-semibold mx-10'>Submit the review</h2>
      <div className='m-10'>
        <form action="" className='flex flex-col gap-3'>
          <select name="" id="" className='w-fit border rounded-sm py-1 px-5'>
            <option value="" selected disabled>Select Company</option>
            <option value="">IBM</option>
            <option value="">TSYS</option>
            <option value="">TCS</option>
          </select>
          <textarea name="" id="" className='border p-1 rounded-sm w-2/3 min-h-56 max-h-56' placeholder='Enter your review here..' ></textarea>
          <div className='flex gap-5 items-center'>
            <span>Ratings out of 10</span> 
            <input type="range" />
          </div>
          <input type="submit" className='border rounded-sm w-fit px-10  py-1' />
        </form>
      </div>
    </div>
  )
}

export default EmpToCompany;  
