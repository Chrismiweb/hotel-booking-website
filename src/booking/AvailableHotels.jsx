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
    <div>
      <div className='w-[100%] bg-slate-100 justify-center py-[60px] flex-col items-center flex'>
        <div>
            <input type="text" 
            onChange={(e)=>setSearch(e.target.value)} 
            value={search}
            />
            <button onClick={searchBtn}>search</button>
        </div>
        <div className='grid grid-cols-3 w-[80%] gap-[30px]'>
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
