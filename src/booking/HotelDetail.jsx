// components/HotelDetail.jsx
import React from 'react';
import { IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Facilities from './Facilities';
import BookForm from './BookForm';
import Footer from '../footer/Footer';

function HotelDetail({ hotel }) {
  return (
    <div className='w-full pt-12 bg-white flex flex-col items-center'>
      <div className='w-4/5 flex flex-col items-start'>
        <h1 className='text-4xl font-bold text-blue-700'>{hotel.hotelName}</h1>
        <div className='flex gap-1 mt-2'>
          {[...Array(hotel.rating)].map((_, i) => (
            <IoStar key={i} className='text-orange-600' />
          ))}
        </div>
        <p className='underline flex items-center gap-2 mt-2 text-blue-700'>
          <FaLocationDot /> {hotel.hotelAddress}
        </p>
      </div>
      <div className='md:w-4/5 w-[95%]  h-96 flex gap-3 mt-8 overflow-hidden'>
        <div className='w-1/3 flex flex-col'>
          <img src={hotel.img1} alt="Hotel view 1" className='w-full h-1/2 object-cover' />
          <img src={hotel.img3} alt="Hotel view 2" className='w-full h-1/2 object-cover mt-2' />
        </div>
        <div className='w-2/3'>
          <img src={hotel.img2} alt="Hotel main view" className='w-full h-full object-cover' />
        </div>
      </div>
      <Facilities />
      <BookForm/>
      <Footer/>
    </div>
  );
}

export default HotelDetail;
