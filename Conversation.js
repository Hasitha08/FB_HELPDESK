import React from 'react'
import pic1 from '../assets/p1.jpg'
import pic2 from '../assets/p2.jpg'

const Conversation = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='bg-white p-3 font-semibold text-xl'>
        Amit RG
      </div>
      <div className='flex my-2'>
        <img src={pic1} alt="" className='w-[40px] h-[40px] rounded-full'/>
        <div className='p-2 ml-2 bg-white text-black rounded shadow'>Is it in stock right now?</div>
      </div>
      <div className='flex my-2 absolute right-0'>
        <div>
        <div className='p-2 mr-2 bg-white text-black rounded shadow my-1 inline-block'>We've 3 left in stock</div>
        <div className='p-2 mr-2 bg-white text-black rounded shadow'>If you order between 8PM today, we can ship it today.</div>
        </div>
        <img src={pic2} alt="img" className='w-[40px] h-[40px] rounded-full'/>
      </div>
      <form action="#" className='absolute bottom-5 left-4 w-11/12'>
          <input type="text" placeholder='Type something...' className='w-full p-2 outline-none'/>
      </form>
    </div>
  )
}

export default Conversation
