import React from 'react'
import img1 from '../images/dabras1.png';
import img2 from '../images/dabras2.png';
import img3 from '../images/dabras3.png';
import Navbar from '../components/Navbar';
import HotelDetail from './HotelDetail';

function Debras() {
    const hotelData = {
        hotelName: 'Dabras Hotel',
        hotelAddress: "Bayajidda Road, 802125 Kaduna, Nigeria ",
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

export default Debras
