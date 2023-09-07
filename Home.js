import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1877F2] flex justify-center items-center'>
      <Link to={'/login'} className='bg-white p-3 text-[#1877F2] ml-2 rounded font-semibold text-xl'>Login</Link>
      <Link to={'/register'} className='bg-white p-3 text-[#1877F2] ml-2 rounded font-semibold text-xl'>Register</Link>
    </div>
  )
}

export default Home
