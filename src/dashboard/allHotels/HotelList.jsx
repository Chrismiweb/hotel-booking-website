import React, { useEffect, useState } from 'react';
// import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function HotelList() {
    const [hotelList, setHotelList] = useState([]);
    const [name, setName] = useState("");     // State for hotel name
    const [price, setPrice] = useState("");   // State for hotel price
    const [address, setAddress] = useState(""); // State for hotel address
    const [edit, setEdit] = useState(false);  // Edit mode flag
    const [currentHotel, setCurrentHotel] = useState(null); // Currently selected hotel for editing

    // Fetch all hotels
    async function UploadedHotel() {
        try {
            const baseUrl = 'https://hotel-booking-backend-g6je.onrender.com/api/v1/get-All-Hotel';
            const response = await fetch(baseUrl);
            const result = await response.json();
            const allHotel = result.getAllHotel;
            setHotelList(allHotel);
        } catch (error) {
            console.error("Error fetching hotels:", error);
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
                toast.warning("Hotel was deleted successfully");
            } else {
                console.error("Failed to delete hotel");
            }
        } catch (error) {
            console.error("Error occurred while deleting the hotel:", error);
            toast.error("Unable to delete hotel, please check internet connection");
        }
    }

    // Edit a hotel (PATCH http request)
    async function editHotel(hotelName) {
        // const editUrl = `https://hotel-booking-backend-g6je.onrender.com/api/v1/update-hotel/${hotelName}`;
        const editUrl = `https://hotel-booking-backend-g6je.onrender.com/api/v1/update-hotel/${hotelName}`;

        try {
            const responseEdit = await fetch(editUrl, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
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
                console.error("Failed to update hotel");
                toast.error("Failed to update hotel");
            }
        } catch (error) {
            console.error("Error occurred while updating the hotel:", error);
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
        <div className='w-[80%] bg-slate-100 px-[50px] flex flex-col'>
            <ToastContainer />
            <div className='w-[100%] text-start pt-[20px]'>
                <h1 className='text-[40px] text-blue-700 font-semibold'>All Uploaded Hotels</h1>
            </div>
            {/* If there are hotels, display them. If not, show "No hotels have been uploaded" */}
            {hotelList.length > 0 ? (
                <div className='w-[100%] grid grid-cols-3 gap-[20px]'>
                    {hotelList.map((a, index) => (
                        <div className='bg-blue-400 p-4' key={index}>
                            {a.image && <img src={a.image} alt={a.hotelName} />}
                            <p>{a.hotelName}</p>
                            <p>{a.address}</p>
                            <p>${a.price}</p>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => handleEdit(a)}>Edit</button>
                                <button onClick={() => deleteHotel(a.hotelName)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='w-[100%] py-[100px] justify-center items-center flex flex-col gap-[20px]'>
                    <p className='text-black font-bold text-[18px]'>No hotels have been uploaded</p>
                    <Link to='/upload'>
                        <button className='bg-blue-700 text-white font-bold py-[10px] px-[20px]'>Upload Hotel Now</button>
                    </Link>
                </div>
            )}

            <div>
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
        </div>
    );
}

export default HotelList;
