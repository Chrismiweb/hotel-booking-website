// pages/Presken.jsx or another hotel page
import React from 'react';
import img1 from '../images/Presken.png';
import img2 from '../images/Presken1.png';
import img3 from '../images/Presken2.jpg';
import Navbar from '../components/Navbar';
import HotelDetail from './HotelDetail';

function Presken() {
  const hotelData = {
    hotelName: 'Presken Hotel',
    hotelAddress: "3 Ikeja, Lagos, Nigeria 3, 100211 Lagos, Nigeria",
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
  );
}

export default Presken;
