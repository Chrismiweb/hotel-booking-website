import React, { useState } from 'react'
// import DatePicker from 'react-datepicker';
import { DatePicker } from "antd";
import 'react-datepicker/dist/react-datepicker.css';
function BookForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setnumber] = useState('')
    const [hotelName, sethotelName] = useState('')

    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)


    async function BookingForm(e){
        if(!name || !email || !number || !hotelName ){
           return alert('Please Fill Form')
        }
        e.preventDefault()

        const baseUrl = 'https://forms-io.onrender.com/submit-form/b97a2c41-8d81-49ed-9225-cc5843527090';
        try {
            const response = await fetch (baseUrl,{
                method: 'POST',
                headers: {
                    'content-type': 'Application/json'
                },
                body : JSON.stringify({name, email,  number, checkIn, checkOut, hotelName})
            })
            .then(res=>res.json())
            if(response){
                alert("form submitted sucessfully")
                // setName(response)
                // setEmail(response)
                // setnumber(response)
            }
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div className='w-[50%] bg-white shadow-2xl mt-[50px] shadow-gray-400 '>
        <form action="" className='flex gap-3 flex-col justify-start items-start py-[40px] px-[40px]'>
            <h1 className='text-black font-bold text-[30px]'>Hotel Booking Form</h1>
            <div className='w-[100%] flex flex-col items-start gap-2'>
                <p className='text-[15px] font-semibold'>Name</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} name='name' className='w-[100%] border-x-gray-400 border-2 py-[5px] px-[20px]' type="text" placeholder='E.g Chrismi Biteso' />
            </div>
            <div className='w-[100%] flex flex-col items-start gap-2'>
                <p>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} name='email' className='w-[100%] border-x-gray-400 border-2 py-[5px] px-[20px]' type="email" placeholder='E.g chrismibiteso@gmail.com' />
            </div>
            <div className='w-[100%] flex flex-col items-start gap-2'>
                <p>Phone Number</p>
                <input onChange={(e)=>setnumber(e.target.value)} value={number} name='phoneNumber' className='w-[100%] border-x-gray-400 border-2 py-[5px] px-[20px]' type="text" placeholder='E.g +2348106794406' />
            </div>
            <div className='w-[100%] flex flex-col items-start gap-2'>
                <p>Hotel Name</p>
                <input onChange={(e)=>sethotelName(e.target.value)} value={hotelName} name='hotelName' className='w-[100%] border-x-gray-400 border-2 py-[5px] px-[20px]' type="text" placeholder='E.g Eko Hotel' />
            </div>
            <div className='w-[100%] flex justify-between items-start gap-2'>
                <div className='w-[45%] flex flex-col items-start gap-2'>
                    <p>Check In Date</p>
                    <DatePicker 
                    type = 'date' 
                    onChange={setCheckIn} 
                    selected={checkIn} 
                    name='checkIn Date' 
                    className='w-[100%] cursor-pointer border-x-gray-400 border-2 py-[5px] px-[20px]' 
                    placeholderText='Check In Date'/>
                </div>
                <div className='w-[45%] flex flex-col items-start gap-2'>
                    <p>Check Out Date</p>
                    <DatePicker 
                    type="date"
                    onChange={setCheckOut} 
                    selected={checkOut} 
                    name='checkOut Date' 
                    className='w-[100%] cursor-pointer border-x-gray-400 border-2 py-[5px] px-[20px]' 
                    placeholderText='Check Out Date'/>
                </div>
            </div>
            <div className='items-end w-full justify-end flex'>
                <button onClick={BookingForm} type="submit" className='bg-blue-700 text-white font-bold py-[10px] px-[20px]'>Book Hotel</button>
            </div>
            

        </form>
    </div>
  )
}

export default BookForm