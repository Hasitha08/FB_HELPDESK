import React from 'react'
import Conversation from '../components/Conversation'
import ProfileCard from '../components/ProfileCard'
import {BsFillBarChartFill} from 'react-icons/bs'
import {MdPeopleAlt} from 'react-icons/md'
import {IoIosChatboxes} from 'react-icons/io'
import {RiRecycleFill} from 'react-icons/ri'
import Chats from '../components/Chats'
const Agent = () => {
  return (
    <div className='grid grid-flow-col h-screen w-screen'>
      <div className='h-full bg-[#1877F2]'>
        <div className='w-full'>
          <div className='text-white hover:text-[#1877F2] hover:bg-white p-4 text-3xl font-semibold flex justify-center items-center h-[100px]'><RiRecycleFill /></div>
          <div className='text-white hover:text-[#1877F2] hover:bg-white p-4 text-3xl font-semibold flex justify-center items-center h-[100px]'><IoIosChatboxes /></div>
          <div className='text-white hover:text-[#1877F2] hover:bg-white p-4 text-3xl font-semibold flex justify-center items-center h-[100px]'><MdPeopleAlt /></div>
          <div className='text-white hover:text-[#1877F2] hover:bg-white p-4 text-3xl font-semibold flex justify-center items-center h-[100px]'><BsFillBarChartFill /></div>
        </div>
      </div>
      <div className='col-span-2 h-full'>
        <Chats />
      </div>
      <div className='col-span-7 h-full bg-gray-200'>
       <Conversation />
      </div>
      <div className='col-span-3 h-full bg-gray-200'>
        <ProfileCard />
      </div>
    </div>
  )
}

export default Agent
