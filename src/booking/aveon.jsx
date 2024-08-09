import React from 'react'
import img1 from '../images/ave.png';
import img2 from '../images/ave2.png';
import img3 from '../images/ave3.png';
import Navbar from '../components/Navbar';
import HotelDetail from './HotelDetail';

function Aveon() {
    const hotelData = {
        hotelName: 'Aveon Hotel',
        hotelAddress: "Ihechukwu Madubuike Street, Guzape, Abuja. Plot 473, 900110 Abuja, Nigeria",
        img1: img1,
        img2: img2,
        img3: img3,
        rating: 5 // Example rating out of 5
      };
  return (
    <div>
        <Navbar/>
        <HotelDetail hotel={hotelData}/>  
    </div>
  )
}

export default Aveon
