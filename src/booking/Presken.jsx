import React from 'react'
import img1 from '../images/Presken.png'
import img2 from '../images/Presken1.png'
import img3 from '../images/Presken2.jpg'
import Navbar from '../components/Navbar'
import { IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Facilities from './Facilities'
import BookForm from './BookForm'


function Presken() {
  return (
    <div>
        <Navbar/>
        <div className='w-[100%] justify-center gap-[20px] flex items-center flex-col py-[50px] bg-white'>
            <div className='w-[80%] flex gap-[10px] flex-col justify-start items-start'>
                <h1 className='text-[50px] font-bold text-blue-700'>Presken Hotel</h1>
                <div className='flex gap-1'>
                  <IoStar className='text-orange-600'/>
                  <IoStar className='text-orange-600'/>
                  <IoStar className='text-orange-600'/>
                  <IoStar className='text-orange-600'/>
                  <IoStar className='text-orange-600'/>
                </div>
                <p className='underline flex justify-center text-[16px] items-center gap-2 text-blue-700'><FaLocationDot /> 3 Ikeja, Lagos, Nigeria 3, 100211 Lagos, Nigeria </p>
            </div>
            <div className='w-[80%] h-[400px] flex gap-3 overflow-hidden'>
                <div className='w-[35%] flex flex-col justify-between'>
                    <img src={img1} alt="" />
                    <img src={img3} alt="" />
                </div>
                <div className=''>
                    <img src={img2} alt="" />
                </div>
            </div>
            <Facilities/>
            <BookForm/>
        </div>
    </div>
  )
}

export default Presken