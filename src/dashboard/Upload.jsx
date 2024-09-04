import React, { useState } from 'react'




function Uploa() {
    const [image, setImage] = useState("")
    const [hotelName, setHotelName] = useState("")
    const [price, setPrice] = useState("")
    const [address, setAddres] = useState("")

    async function uploadHotel(){
        const baseUrl = "https://hotel-booking-backend-g6je.onrender.com"
        const response = await fetch(baseUrl,{
            
            

        })
        .then(res =>res.json())
        if(response){
            console.log(response)
        }
    }

  return (
    <div>
        <form action="" className='flex flex-col'>
            <input placeholder='image' type="file" />
            <input  placeholder='hotelName' type="text" />
            <input  placeholder='price' type="text" />
            <input  placeholder='address' type="text" />
            <button>Upload</button>
        </form>
    </div>
  )
}

export default Uploa