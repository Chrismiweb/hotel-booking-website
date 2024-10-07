import React from 'react'
import { FaSwimmer } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { IoRestaurant } from "react-icons/io5";
import { CiParking1 } from "react-icons/ci";
import { MdFreeBreakfast } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
// facility page

function Facility() {
    const facilities = [
        {
            icon: <FaSwimmer/>,
            text: "Indoor Swimming Pool",
        },
        {
            icon: <FaWifi/>,
            text: "Free Wifi",
        }, {
            icon: <IoIosFitness/>,
            text: "Fitness Center",
        }, {
            icon: <IoRestaurant/>,
            text: "Restaurant",
        }, {
            icon: <CiParking1/>,
            text: "Free Parking",
        }, {
            icon: <MdFreeBreakfast/>,
            text: "Free Breakfast",
        },
        {
            icon: <MdRoomService/>,
            text: "Room Service",
        },
        {
            icon: <PiTelevisionSimpleFill/>,
            text: "Free Cinema",
        },
        {
            icon: <FaLightbulb/>,
            text: "24/7 Electricity",
        },
    ]
  return (
    <div className='w-[100%] py-[50px] flex flex-col bg-slate-100 gap-[20px] justify-center items-center'>
        <h1 className='text-[40px] font-bold '>Our Facilities</h1>
        <p className='text-center text[16px] px-[20px] font-semibold'>We provide contemporary 5-star hotel facilities designed for your ultimate comfort.</p>
        <div className='grid w-[90%] md:w-[80%] grid-cols-2 md:grid-cols-3  gap-5'>
            {facilities.map((f, index)=>(
                <div className='w-[90%] gap-[10px] py-[50px] px-[10px] justify-center items-center flex flex-col bg-gray-100 shadow-lg shadow-slate-200' key={index}>
                    <p className='text-blue-700 text-[40px]'>{f.icon}</p>
                    <p className='font-bold text-blue-700 text-center'>{f.text}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Facility