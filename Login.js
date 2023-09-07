import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-screen bg-[#1877F2] flex justify-center items-center'>
      <div className='w-1/2 md:w-1/2 bg-white text-black p-6 rounded'>
        <h1 className='text-xl font-semibold my-2 text-center'>Login to your account</h1>
        <div className='my-4'>
        <h2 className='font-semibold'>Email</h2>
        <input type="email" placeholder='Email Address...' className='p-3 border-2 border-gray-300 w-full outline-none rounded'/>
        </div>
        <div className='my-4'>
        <h2 className='font-semibold'>Password</h2>
        <input type="password" placeholder='Password...' className='p-3 border-2 border-gray-300 w-full outline-none rounded'/>
        </div>
        <div className='my-4'>
        <input type="checkbox" id='remember'/>
        <label htmlFor='remember' className='ml-2 font-semibold text-gray-400'>Remember Me</label>
        </div>

        <button className='w-full bg-[#1877F2] p-3 font-semibold text-white rounded'>Sign Up</button>

        <p className='text-center mt-6 text-sm'>New to MyApp? <Link to={'/register'} className='font-semibold text-[#1877F2]'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
