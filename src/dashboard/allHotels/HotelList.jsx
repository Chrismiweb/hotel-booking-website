import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function HotelList() {
    const [hotelList, setHotelList] = useState([]);

    // Fetch all hotels
    async function UploadedHotel() {
        try {
            const baseUrl = 'https://hotel-booking-backend-g6je.onrender.com/api/v1/get-All-Hotel';
            const response = await fetch(baseUrl);
            const result = await response.json();
            const allHotel = result.getAllHotel;
            setHotelList(allHotel);
            console.log(allHotel);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        UploadedHotel();
    }, []);

    // Delete a hotel by name
    async function deleteHotel(hotelName) {
        const deleteUrl = `https://hotel-booking-backend-g6je.onrender.com/api/v1/delete-one-hotel/${hotelName}`;
        try {
            const responseDelete = await fetch(deleteUrl, {
                method: "DELETE"
            });
            
            if (responseDelete.ok) {
                console.log("Hotel was deleted successfully");
                // Update the hotel list after deletion
                setHotelList(hotelList.filter(hotel => hotel.hotelName !== hotelName));
                toast.warning("Hotel was deleted successfully")

            } else {
                console.error("Failed to delete hotel");
            }
        } catch (error) {
            console.error("Error occurred while deleting the hotel:", error);
        }
    }

    return (
        <div className='w-[80%] bg-slate-100 px-[50px] flex flex-col'>
            <ToastContainer/>
            <div className='w-[100%] text-start pt-[20px]'>
                <h1 className='text-[40px] text-blue-700 font-semibold'>All Uploaded Hotels</h1>
            </div>
            {hotelList.length > 0 ? (
                <div className='w-[100%] grid grid-cols-3 gap-[20px]'>
                    {hotelList.map((a, index) => (
                        <div className='bg-blue-400 p-4' key={index}>
                            {a.image && <img src={a.image} alt={a.hotelName} />}
                            <p>{a.hotelName}</p>
                            <p>{a.address}</p>
                            <p>${a.price}</p>
                            <div className='flex justify-between items-center'>
                                <button>Edit</button>
                                <button onClick={() => deleteHotel(a.hotelName)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='w-[100%] py-[100px] flex flex-col gap-[20px]'>
                    <p className='text-black font-bold text-[18px]'>No hotels have been uploaded</p>
                   <Link to='/upload'> <button className='bg-blue-700 text-white font-bold py-[10px] px-[20px]'>Upload Hotel Now</button></Link>
                </div>
            )}
        </div>
    );
}

export default HotelList;
