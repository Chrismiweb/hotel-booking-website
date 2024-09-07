import React from 'react'
import Sidebar from '../components/Sidebar'
import Uploa from './uploadHotel/Upload'
import AllHotels from './allHotels/AllHotels'

function Dashboard() {
  return (
    <div className='bg-slate-100 flex'>
        <Sidebar/>
        <Uploa/>
        <AllHotels/>
    </div>
  )
}

export default Dashboard