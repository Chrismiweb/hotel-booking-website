import React from 'react'
import './Hero.css'
import hotel1 from '../images/hotel1.png'
import hotel2 from '../images/hotel2.png'
import hotel3 from '../images/hotel3.png'
import hotel4 from '../images/hotel4.png'


function Hero() {
  return (
    <div className='bg-img w-[100%] py-[10px] flex justify-around items-center'>
        <div className='w-[50%] items-start flex flex-col gap-[20px]'>
            <h1 className='text-white font-bold font-sans text-[40px]'>Book Your Stay Today</h1>
            <p className='text-white text-start'>Unwind in style with our premium accommodations and exceptional service. Whether you're planning a romantic getaway, a family vacation, or a business trip, CHRISMILUXE offers a range of rooms and suites designed to meet your every need.</p>
            <button className='bg-blue-800 font-bold text-white w-[100%] py-[10px]'>Book Now</button>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                <img src={hotel1} className='contain ' alt="" />
            </div>
            <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                <img src={hotel2} className='contain ' alt="" />
            </div>
            <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                <img src={hotel3} className='contain ' alt="" />
            </div>
            <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                <img src={hotel4} className='contain ' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
