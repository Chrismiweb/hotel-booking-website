import React from 'react'
import './Hero.css'
import hotel1 from '../images/hotel1.png'
import hotel2 from '../images/hotel2.png'
import hotel3 from '../images/hotel3.png'
import hotel4 from '../images/hotel4.png'
import vid from '../images/room.mp4'


function Hero() {
  return (
    // <div className='w-[100%] py-[10px] flex justify-around items-center'>
        
    <div className="relative w-full py-[250px] h-[700px] md:h-[450px] flex justify-around items-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className='absolute w-[100%] gap-[30px] md:gap-0  md:h-[450px] flex flex-col md:flex-row justify-around items-center'>
            <div className='w-[80%] text-center md:text-start md:w-[50%] items-start flex flex-col gap-[20px]'>
                <h1 className='text-white font-bold font-sans text-[40px]'>Book Your Stay Today</h1>
                <p className='text-white text-center md:text-start'>Unwind in style with our premium accommodations and exceptional service. Whether you're planning a romantic getaway, a family vacation, or a business trip, CHRISMILUXE offers a range of rooms and suites designed to meet your every need.</p>
                  <a href="/booking" className='bg-blue-800 justify-center items-center flex font-bold text-white w-[100%] py-[10px]'>Book Now</a>
            </div>
            <div className=' grid grid-cols-2 md:flex md:flex-col gap-[10px]'>
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
      
    </div>
    
  )
}

export default Hero
