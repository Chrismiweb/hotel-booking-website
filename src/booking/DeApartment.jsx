import React from 'react'
import img1 from '../images/De1.png';
import img2 from '../images/De2.png';
import img3 from '../images/De3.png';
import Navbar from '../components/Navbar';
import HotelDetail from './HotelDetail';

function DeApartment() {
    const hotelData = {
        hotelName: 'De Apartment Hotel',
        hotelAddress: "Grape Road, CBN Quaters Agba-Dam around G.R.A, Ilorin, Nigeria",
        img1: img1,
        img2: img2,
        img3: img3,
        rating: 5 // Example rating out of 5
      };
    
  return (
    <div>
      <Navbar />
      <HotelDetail hotel={hotelData} />
    </div>
  )
}

export default DeApartment
