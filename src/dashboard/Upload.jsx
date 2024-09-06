import React, { useState } from 'react'




function Uploa() {
    const [image, setImage] = useState()
    const [hotelName, setHotelName] = useState("")
    const [imagePreview, setImagePreview] = useState("")

    const [price, setPrice] = useState("")
    const [address, setAddres] = useState("")

    async function uploadHotel(e){
        e.preventDefault();
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
                <img src={imagePreview} alt="" />
            }
            <input onChange={(e)=>setHotelName(e.target.value)}  placeholder='hotelName' type="text" />
            <input onChange={(e)=>setPrice(e.target.value)}   placeholder='price' type="number" />
            <input onChange={(e)=>setAddres(e.target.value)}   placeholder='address' type="text" />
            <button >Upload</button>
        </form>
    </div>
  )
}

export default Uploa



// import React, { useState } from 'react';

// function Uploa() {
//     const [image, setImage] = useState(null); // Image file
//     const [hotelName, setHotelName] = useState("");
//     const [imagePreview, setImagePreview] = useState("");
//     const [addhotel, setAddHotel] = useState([]); // List of uploaded hotels
//     const [price, setPrice] = useState("");
//     const [address, setAddres] = useState("");

//     function add(e) {
//         e.preventDefault();
        
//         // Create a new hotel object
//         const newHotel = {
//             hotelName,
//             price,
//             address,
//             imageUrl: imagePreview // Store the image preview URL
//         };

//         // Add the new hotel to the list
//         setAddHotel([...addhotel, newHotel]);

//         // Reset form fields
//         setHotelName("");
//         setPrice("");
//         setAddres("");
//         setImage(null);
//         setImagePreview("");
//     }

//     const handleImagePreview = (e) => {
//         const file = e.target.files[0];
//         setImage(file); // Set the selected image file
//         setImagePreview(URL.createObjectURL(file)); // Create preview URL
//     }

//     return (
//         <div>
//             <form className='flex flex-col' onSubmit={add}>
//                 <input onChange={handleImagePreview} placeholder='image' type="file" />
//                 {imagePreview && <img src={imagePreview} alt="Hotel Preview" width="200" />}
//                 <input value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder='hotelName' type="text" />
//                 <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' type="number" />
//                 <input value={address} onChange={(e) => setAddres(e.target.value)} placeholder='address' type="text" />
//                 <button type="submit">Upload</button>
//             </form>

//             {/* Display all uploaded hotels */}
//             <div>
//                 {addhotel.map((hotel, index) => (
//                     <div key={index}>
//                         <h3>{hotel.hotelName}</h3>
//                         <p>{hotel.price}</p>
//                         <p>{hotel.address}</p>
//                         <img src={hotel.imageUrl} alt={hotel.hotelName} width="100" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Uploa;
