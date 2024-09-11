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
    const [uploading, setUploading] = useState(false)
    // const [addHotel, setAddHotel] = useState([])

    async function uploadHotel(e){
      if(!image || !price || !address || !hotelName){
            return toast.error("Please fill all input before uploading")
      }
        setUploading(true)
        e.preventDefault()
        // setImage(URL.createObjectURL(e.target.value[0]))
        
        // i am using formData because json does not support image
        const formData = new FormData()
        formData.append('image', image);
        formData.append('hotelName', hotelName);
        formData.append('price', price);
        formData.append('address', address);

       try {
        const baseUrl = "https://hotel-booking-backend-g6je.onrender.com/api/v1/create-hotel"
        const response = await fetch(baseUrl,{
            method: "POST",
            body: formData,
              // headers: {
              //   "Content-type": "application/json",
              // }
            })
              const result = await response.json()
              if (response.ok) {
                 // redirect to all hotel page
                window.location.href ="/allHotels";
                console.log(result);
                toast.success("Hotel uploaded successfully");
                setUploading(false)
               

            } else {
                toast.error(result.message || "Failed to upload hotel");
            }

        // .then(res =>res.json())
        // if(response){
        //     console.log(response)
        //     // setAddHotel([...addHotel])
        // }

       } catch (error) {
            console.log(error)
       }
    }

    // function handleAddHotel(e){
    //   e.preventDefault()
    // //   if(!image || !price || !address || hotelName){
    // //     return toast.error("Please fill all input before uploading")
    // // }
    //   uploadHotel()
    //   const newHotel = {
    //     image: imagePreview, 
    //     hotelName, 
    //     price, 
    //     address
    //   }
    //   setAddHotel([...addHotel, newHotel])
    // }
    
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
              <input name='hotelName' value={hotelName} className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setHotelName(e.target.value)}  placeholder='E.g EKO Hotel' type="text" />
            </div>
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Hotel Address</p>
              <input name='address' value={address} className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setAddres(e.target.value)}   placeholder='E.g Lekki Phase, Lagos Island' type="text" />
            </div>
            <div className='w-[100%] gap-1  flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Hotel Price</p>
              <input name='price' value={price} className='w-[100%] py-[8px] px-[20px]' onChange={(e)=>setPrice(e.target.value)}   placeholder='E.g $500 Per night' type="text" />
            </div>
           
            <div className='w-[100%] gap-1 flex flex-col justify-start items-start'>
              <p className='text-[15px] font-semibold'>Upload Image</p>
              <input name='image' alt='image' onChange={handleImagePreview} placeholder='image' type="file" />
            </div>

            {
                imagePreview &&
                <img className='w-[20%] h-[200px]' src={imagePreview} alt="" />
            }
            <Button type="primary" className='bg-blue-700 text-white' onClick={uploadHotel} ghost>{uploading ? "Uploading" : "Upload"}</Button>
        </form>
    </div>
  )
}

export default Uploa

