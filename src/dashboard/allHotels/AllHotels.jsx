import React from 'react'
import Sidebar from '../../components/Sidebar'
import Uploa from '../uploadHotel/Upload'
import HotelList from './HotelList'

function AllHotels() {
  return (
    <div className='bg-slate-100 flex'>
        <Sidebar/>
        <HotelList/>

    </div>
  )
}

export default AllHotels