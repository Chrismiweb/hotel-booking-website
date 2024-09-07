import React, { useState } from 'react'
import { Button } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Uploa() {
    const [image, setImage] = useState()
    const [hotelName, setHotelName] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [price, setPrice] = useState("")
    const [address, setAddres] = useState("")
    const [addHotel, setAddHotel] = useState([])

    async function uploadHotel(){
      if(!image || !price || !address || hotelName){
          return toast.error("Please fill all input before uploading")
      }
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
    <div className='w-[80%] bg-slate-100 pr-[150px] pl-[50px] flex flex-col'>
      <ToastContainer/>
      <div className='w-[100%] text-start pt-[20px]'>
        <h1 className='text-[40px] text-blue-700 font-semibold'>Hotel Information</h1>
      </div>
        <form action="" className='flex gap-[20px] flex-col'>
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Hotel Name</p>
              <input className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setHotelName(e.target.value)}  placeholder='E.g EKO Hotel' type="text" />
            </div>
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Hotel Address</p>
              <input className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setAddres(e.target.value)}   placeholder='E.g Lekki Phase, Lagos Island' type="text" />
            </div>
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Hotel Price</p>
              <input className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setPrice(e.target.value)}   placeholder='E.g $500 Per night' type="number" />
            </div>
           
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Upload Image</p>
              <input  onChange={handleImagePreview} placeholder='image' type="file" />
            </div>

            {
                imagePreview &&
                <img className='w-[20%] h-[200px]' src={imagePreview} alt="" />
            }
            <Button type="primary" className='bg-blue-700 text-white' onClick={handleAddHotel} ghost>UPLOAD</Button>
        </form>
        <div>
            {addHotel.map((n, index)=>(
            <div key={index}>
              <img src={n.image} alt="" />
            <p>{n.hotelName}</p>
            <p>{n.price}</p>
            <p>{n.address}</p>


            </div>
        ))}
        </div>
    </div>
  )
}

export default Uploa

