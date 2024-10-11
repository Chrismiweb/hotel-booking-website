import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='bg-img-book w-[100%] gap-[20px] py-[150px] flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-center font-sans text-[45px]'>Your Perfect Getaway Awaits</h1>
            <p className='text-white w-[80%] md:w-[60%] text-[14px] font-semibold text-center'>Relax in elegance with our first-rate lodging and first-rate assistance. Whether you're traveling for business, a family holiday, or a romantic retreat, CHRISMILUXE has a variety of rooms and suites to fit your needs.</p>       
    </div>
  )
}

export default Hero
