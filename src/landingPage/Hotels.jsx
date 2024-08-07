import React from 'react'
import presken from '../images/Presken1.png'
function Hotels() {
    const hotelList = [
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        },
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        },
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        },
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        },
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        },
        {
            image: presken,
            location: 'Ikeja, Lagos, Nigeria',
            hotelName: "Presken Hotel",
            price:"₦30,000 Per Night",
            available: "Yes",
            bookBtn: "Book Now"
        }
    ]
  return (
    <div className='w-[100%] bg-slate-100 justify-center py-[60px] items-center flex'>
        <div className='grid grid-cols-3 w-[80%] gap-[30px]'>
            {hotelList.map((h, index)=>(
                <div className='w-[100%] shadow-lg shadow-gray-400 rounded-[5px] bg-slate-100' key={index}>
                    <div className='w-[100%] bg-blue-700 overflow-hidden h-[200px]'>
                        <img className='object-cover w-full bg-cover h-full' src={h.image} alt="" />
                    </div>
                    <div className='py-[20px] gap-[10px] px-[20px] items-start flex flex-col'>
                        <div className='flex justify-between items-center w-[100%]'>
                            <h1 className='font-bold text-[20px] text-blue-700'>{h.hotelName}</h1>
                            <p className='text-[10px] font-bold text-blue-700'>Availability: {h.available}</p>
                        </div>
                        <p className='text-[13px] text-blue-700 font-semibold'>{h.price}</p>
                        <div className='w-[100%] flex justify-between items-center'>
                            <p className='underline text-blue-700 font-semibold text-[13px]'>{h.location}</p>
                            <button className='bg-blue-700 py-[8px] text-white font-bold px-[20px]'>{h.bookBtn}</button>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default Hotels
