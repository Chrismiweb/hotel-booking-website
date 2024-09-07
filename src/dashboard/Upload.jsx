import React, { useState } from 'react'




function Uploa() {
    const [image, setImage] = useState()
    const [hotelName, setHotelName] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [price, setPrice] = useState("")
    const [address, setAddres] = useState("")
    const [addHotel, setAddHotel] = useState([])

    async function uploadHotel(){
        // e.preventDefault()
        // setImage(URL.createObjectURL(e.target.value[0]))
       try {
        const baseUrl = "https://hotel-booking-backend-g6je.onrender.com/api/v1/create-hotel"
        const response = await fetch(baseUrl,{
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                image,
                hotelName,
                price,
                address
              }),
              headers: {
                "Content-type": "application/json",
              }})

        .then(res =>res.json())
        if(response){
            console.log(response)

        }

       } catch (error) {
            console.log(error.message)
       }
    }

    function handleAddHotel(e){
      e.preventDefault()
      uploadHotel()
      const newHotel = {
        image: imagePreview, 
        hotelName, 
        price, 
        address
      }
      setAddHotel([...addHotel, newHotel])
    }
    
    const handleImagePreview =(e)=>{
        const file = e.target.files[0];
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
  return (
    <div>
        <form action="" className='flex flex-col'>
          
            <input  onChange={handleImagePreview} placeholder='image' type="file" />
            {
                imagePreview &&
                <img className='w-[20%] h-[200px]' src={imagePreview} alt="" />
            }
            <input onChange={(e)=>setHotelName(e.target.value)}  placeholder='hotelName' type="text" />
            <input onChange={(e)=>setPrice(e.target.value)}   placeholder='price' type="number" />
            <input onChange={(e)=>setAddres(e.target.value)}   placeholder='address' type="text" />
            <button onClick={handleAddHotel}>Upload</button>
        </form>
       {addHotel.map((n, index)=>(
          <div key={index}>
            <img src={n.image} alt="" />
           <p>{n.hotelName}</p>
           <p>{n.price}</p>
           <p>{n.address}</p>


          </div>
       ))}
    </div>
  )
}

export default Uploa

