import React, { useState } from 'react'
import presken from '../images/Presken1.png'
import hotelList  from './hotelList'

function AvailableHotels() {
    const [search, setSearch] = useState('')
    
   const filterSearch = hotelList.filter(hotel => 
    hotel.location.toLowerCase().includes(search.toLowerCase())
   )

   function searchBtn(){ 
    if(!filterSearch){
        return alert("no hotel available in this location")
    }
   }
    
  return (
    <div className='w-[100%]  flex flex-col'>
      <div className='w-[100%] bg-slate-100 justify-center py-[60px] gap-[40px] flex-col items-center flex'>
        <div className='w-[100%] px-[10px] md:px-0 md:w-[50%] gap-[5px] flex justify-center items-center'>
            <input type="text" 
            className='md:w-[60%] w-[100%] rounded-l-full border-blue-700  text-black px-[30px] h-[35px] border-2'
            onChange={(e)=>setSearch(e.target.value)} 
            value={search}
            placeholder='Search Location, Hotel Name, and so on...'
            />
            <button className='bg-blue-700 px-[30px] text-white rounded-r-full h-[35px]' onClick={searchBtn}>Search</button>
        </div>
        <div className='md:grid flex flex-col w-[90%] md:grid-cols-2 lg:grid-cols-3 md:w-[90%] lg:w-[80%] gap-[30px]'>
            {filterSearch.map((h, index)=>(
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
                            <a href={`${h.link}/${h.hotelName}`}>
                            <button className='bg-blue-700 py-[8px] text-white font-bold px-[20px]'>{h.bookBtn}</button>

                            </a>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>

    </div>
  )
}

export default AvailableHotels
