import React, { useEffect, useState } from 'react';
// import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { Button } from 'antd';
import DashDropdown from '../../components/dashDropdown';
import Sidebar from '../../components/Sidebar';


function HotelList() {
    const [hotelList, setHotelList] = useState([]);
    const [name, setName] = useState("");     // State for hotel name
    const [price, setPrice] = useState("");   // State for hotel price
    const [address, setAddress] = useState(""); // State for hotel address
    const [edit, setEdit] = useState(false);  // Edit mode flag
    const [currentHotel, setCurrentHotel] = useState(null); // Currently selected hotel for editing
    const [dropdown, setDropdown] = useState(null)
    const token = localStorage.getItem("token")

    // edit and delete drop down
    function handleDropdown(index){
        setDropdown(dropdown === index ? null : index)
    }

    // Fetch all hotels
    async function UploadedHotel() {
        try {
            const token = localStorage.getItem("token")
            console.log("this is d " + token);
            
            const baseUrl = 'https://chrismiluxe-backend.onrender.com/api/v1/get-All-Hotel';
            const response = await fetch(baseUrl, {
                headers: {
                    Authorization : "Bearer " + token
                }
            });
            const result = await response.json();
            const allHotel = result.getAllHotel;
            setHotelList(allHotel);
        } catch (error) {
            console.log("Error fetching hotels:", error);
        }
    }

    useEffect(() => {
        UploadedHotel();
    }, [name, price, address]);

    // Delete a hotel by name
    async function deleteHotel(hotelName) {
        const deleteUrl = `https://chrismiluxe-backend.onrender.com/${hotelName}`;
        try {
            const responseDelete = await fetch(deleteUrl, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token  
                }
            });

            if (responseDelete.ok) {
                console.log("Hotel was deleted successfully");
                // Update the hotel list after deletion
                setHotelList(hotelList.filter(hotel => hotel.hotelName !== hotelName));
                toast.warning("Hotel was deleted successfully");
            } else {
                console.log("Failed to delete hotel");
            }
        } catch (error) {
            console.log("Error occurred while deleting the hotel:", error);
            toast.error("Unable to delete hotel, please check internet connection");
        }
    }

    // Edit a hotel (PATCH http request)
    async function editHotel(hotelName) {
        // const editUrl = `https://hotel-booking-backend-g6je.onrender.com/api/v1/update-hotel/${hotelName}`;
        const editUrl = `https://chrismiluxe-backend.onrender.com/${hotelName}`;

        try {
            const responseEdit = await fetch(editUrl, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify({
                    hotelName: name,
                    price,
                    address
                })
            })
            .then(res=>res.json())
            // const editResult = await responseEdit.json();

            if (responseEdit) {
                console.log("Hotel updated successfully");
                toast.success("Hotel updated successfully");
                // Optionally refresh the list after editing
                UploadedHotel();
                setEdit(false); // Close the edit form after successful edit
            } else {
                console.log("Failed to update hotel");
                toast.error("Failed to update hotel");
            }
        } catch (error) {
            console.log("Error occurred while updating the hotel:", error);
            toast.error("Failed to update hotel");
        }
    }

    // Handle edit
    function handleEdit(hotel) {
        setCurrentHotel(hotel.hotelName);  // Set the current hotel being edited
        setAddress(hotel.address);         // Pre-fill the form with hotel details
        setName(hotel.hotelName);          // Pre-fill with hotel name
        setPrice(hotel.price);             // Pre-fill with hotel price
        setEdit(true);                     // Enable edit mode
    }

    return (
        <div className='bg-slate-300 pb-[30px] justify-end flex w-[100%]'>
            <div className='lg:w-[80%] w-[100%] bg-slate-300 px-[20px] flex flex-col'>
            <ToastContainer />
            {/* side bar btn */}
            
            <div className='w-[100%] text-start pt-[70px] lg:pt-[20px]'>
                <h1 className='text-[40px] text-blue-700 font-semibold'>All Uploaded Hotels</h1>
            </div>
            <div className='mb-[30px]'>
                {edit && (
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            await editHotel(currentHotel);
                        } catch (error) {
                            console.error("Failed to edit hotel", error);
                        }
                    }}>
                        <div className='mb-4'>
                            <label>Hotel Name</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                className='block border border-gray-300 p-2 w-full'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Price</label>
                            <input 
                                type="number" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} 
                                className='block border border-gray-300 p-2 w-full'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Address</label>
                            <input 
                                type="text" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} 
                                className='block border border-gray-300 p-2 w-full'
                                required
                            />
                        </div>
                        <button type='submit' className='bg-blue-700 text-white px-4 py-2'>Save Changes</button>
                    </form>
                )}
            </div>
            {/* if there is an hotel or not */}
            {hotelList && hotelList.length > 0 ? (
                <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    {hotelList.map((a, index) => (
                        <div className='bg-slate-100 p-[10px] rounded-lg flex flex-col gap-[10px] w-[95%]' key={index}>
                            <div className='w-[100%] h-[250px] overflow-hidden  '>
                                
                               
                                {a.image && <img src={a.image} className='h-full w-full object-fill' alt={a.hotelName} />}
                            </div>
                            <div className='flex gap-[5px] flex-col'>
                                <p className='bg-green-600 py-[10px] w-[100px] rounded-[10px] text-white font-bold text-[11px] flex justify-center items-center'>AVAILABLE</p>
                                <p className='text-[16px] text-blue-600'><b>Hotel Name</b>: {a.hotelName}</p>
                                <p className='text-[15px] text-red-500'><b>Address</b>: {a.address}</p>
                                <p><b>Price</b>: ${a.price}</p>
                            </div>
                            {/* <div className='w-[100%] gap-2 flex  flex-col justify-end items-end relative'>
                                <button onClick={()=>handleDropdown(index)} className='w-[40px] h-[40px] flex justify-center border-[2px] border-white items-center rounded-full text-white bg-black'><CiMenuKebab /></button>
                                {
                                    dropdown === index &&  */}
                                <div className='flex rounded-[20px] w-[100%] py-[10px] justify-between items-center'>
                                    <Button type="primary" ghost className='' onClick={() => handleEdit(a)}>Edit</Button>
                                    <Button type="primary" ghost className='bg-red-600' onClick={() => deleteHotel(a.hotelName)}>Delete</Button>
                                    
                                </div>
                                {/* }
                            </div> */}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='w-[100%] md:h-[90vh] h-[80vh] justify-center items-center flex flex-col gap-[20px]'>
                    <p className='text-black font-bold text-[18px]'>No hotels have been uploaded</p>
                    <Link to='/upload'>
                        <button className='bg-blue-700 text-white font-bold py-[10px] px-[20px]'>Upload Hotel Now</button>
                    </Link>
                </div>
            )}

            
        </div>
        </div>
    );
}

export default HotelList;
