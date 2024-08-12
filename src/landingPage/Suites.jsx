import React from 'react'
import img1 from '../images/ave.png';
import img2 from '../images/ave2.png';
import img3 from '../images/ave3.png';

function Suites() {
    const hotels = [
        {
            img: img1,
            name: 'Aveon Hotel',
            price: "₦50,000 Per Night"
        },
        {
            img: img1,
            name: 'Aveon Hotel',
            price: "₦50,000 Per Night"
        },
        {
            img: img1,
            name: 'Aveon Hotel',
            price: "₦50,000 Per Night"
        }
    ]

  return (
    <div className='bg-slate-100 w-[100%] py-[100px] gap-[30px] flex flex-col justify-center items-center'>
        <div  className='w-[80%] flex justify-between items-center'>
            <div className='flex flex-col gap-[7px] justify-start items-start'>
                <div className='bg-blue-700 h-[5px] rounded-2xl w-[70px]'></div>
                <h1 className='text-[30px] font-bold text-black'>Rooms & Suites</h1>
                <p className='font-semibold text-blue-700 text-[14px]'>Experience luxury and comfort with our state-of-the-art 5-star hotel</p>
            </div>
            <div>
                <a href="/booking"><button className='bg-blue-700 border-2 hover:bg-white hover:text-blue-700 border-blue-700 text-white font-semibold rounded-full py-[10px] px-[25px]'>View All</button></a>
            </div>
        </div>
        <div className='flex w-[80%] justify-between items-center'>
            {hotels.map((h, index)=>(
                <div key={index} className='w-[30%] gap-[5px] flex flex-col items-start'>
                    <div className='h-[300px] bg-red-600'>
                        <img className='h-full' src={h.img} alt="" />
                    </div>
                    <h1 className='text-[18px] font-bold'>{h.name}</h1>
                    <p className='text-[14px] font-semibold'>{h.price}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Suites