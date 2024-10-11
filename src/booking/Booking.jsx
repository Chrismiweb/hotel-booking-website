import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import AvailableHotels from './AvailableHotels'
import Footer from '../footer/Footer'

function Booking() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AvailableHotels/>
      <Footer/>
      
    </div>
  )
}

export default Booking
