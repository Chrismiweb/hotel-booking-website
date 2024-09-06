import React, { useState } from 'react'




function Uploa() {
    const [image, setImage] = useState("")
    const [hotelName, setHotelName] = useState("")
    const [price, setPrice] = useState("")
    const [address, setAddres] = useState("")

    async function uploadHotel(e){
        e.preventDefault();
        const baseUrl = "https://hotel-booking-backend-g6je.onrender.com"
        const response = await fetch(baseUrl,{
            method: "POST",
            body: JSON.stringify({
                image,
                hotelName,
                price,
                address
              }),
              headers: {
                "Content-type": "application/json"
              }})

        .then(res =>res.json())
        if(response){
            console.log(response)

        }
    }

  return (
    <div>
        <form action="" className='flex flex-col'>
            <input onChange={(e)=>setImage(e.target.value)} placeholder='image' type="file" />
            <input onChange={(e)=>setHotelName(e.target.value)}  placeholder='hotelName' type="text" />
            <input onChange={(e)=>setPrice(e.target.value)}   placeholder='price' type="text" />
            <input onChange={(e)=>setAddres(e.target.value)}   placeholder='address' type="text" />
            <button onClick={uploadHotel}>Upload</button>
        </form>
    </div>
  )
}

export default Uploa