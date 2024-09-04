import React from 'react'
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100%] bg-black flex items-center py-[10px] justify-between px-[50px] pr-[100px]'>
      <p className='text-white text-[30px]'>CHRISMILUXE</p>
      <div className='text-white flex gap-[20px]'>
        <a href='/'><p className='cursor-pointer font-bold text-[15px]'>Home</p></a>
        <a href="/booking"><p className='cursor-pointer font-bold text-[15px]'>Booking</p></a>
        <p className='cursor-pointer font-bold text-[15px]'>Contact</p>
        <a href="/booking"><p className='cursor-pointer font-bold text-[15px]'>Dashboard</p></a>

      </div>
      <button className='bg-blue-800 py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>About</button>
    </div>
  )
}

export default Navbar
