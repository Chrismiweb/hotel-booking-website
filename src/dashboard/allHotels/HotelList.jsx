import React,{useEffect, useState} from 'react'


function HotelList() {
    const [hotelList, setHotelList] = useState([])


    async function UploadedHotel(){
        const baseUrl = 'https://hotel-booking-backend-g6je.onrender.com/api/v1/get-All-Hotel'
        const response = await fetch(baseUrl)
        const result = await response.json()
        const allHotel = result.getAllHotel
        setHotelList(allHotel)
       console.log(allHotel)
    }
    useEffect(() => {
     UploadedHotel()
    },[])
    
  return (
    <div>
       {hotelList.length > 0 ?  ( 
            hotelList.map((a, index)=> (
             <div key={index}>
                {a.image && <img src={a.image} alt="" />}
                <p>{a.hotelName}</p>
                <p>{a.price}</p>
             </div>
            )))
         : (<p>chjkl</p>)
       }
       
    </div>
  )
}

export default HotelList