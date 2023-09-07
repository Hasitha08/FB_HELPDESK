import React from 'react'

const Delete = () => {
  return (
    <div className='w-full h-screen bg-[#1877F2] flex justify-center items-center flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-1/2 bg-white p-6 rounded'>
      <p className='text-center my-4 font-bold'>Facebook Page Integration</p>
      <p className='mb-4 '>Integrated Page: <span className='font-bold'>Amazon Business</span></p>
      
      <button className='w-full my-4 rounded p-3 bg-red-600 text-white'>Delete Integration</button>
      <button className='w-full mb-2 rounded p-3 bg-[#1877F2] text-white'>Connect Page</button>
      </div>
    </div>
  )
}

export default Delete
