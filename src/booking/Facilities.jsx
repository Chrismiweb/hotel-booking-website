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

function Facilities() {
    const facility = [
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
    <div className='w-[100%] justify-center items-center flex'>
        <div className='w-[80%] flex justify-center gap-[20px] flex-col items-start'>
            <h1 className='font-bold text-[20px]  text-black'>Hotel Facilities</h1>
            <div className='w-[80%] flex-wrap flex gap-[30px]'>
                {facility.map((f, index)=>(
                    <div className='flex justify-center items-center gap-2' key={index}>
                        <p className='text-blue-700 text-[20px]'>{f.icon}</p>
                        <p className='text-black font-medium text-[15px]'>{f.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Facilities