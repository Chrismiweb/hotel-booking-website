import React from 'react'
import img1 from '../images/gallani1.png';
import img2 from '../images/gallani2.png';
import img3 from '../images/gallani3.png';
import Navbar from '../components/Navbar';
import HotelDetail from './HotelDetail';

function Gallani() {
    const hotelData = {
        hotelName: 'Gallani Hotel',
        hotelAddress: "57 Joel Ogunnaike Street, 101233 Lagos, Nigeria",
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

export default Gallani
