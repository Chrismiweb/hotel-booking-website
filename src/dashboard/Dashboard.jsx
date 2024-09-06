import React from 'react'
import Sidebar from './Sidebar'
import Uploa from './Upload'

function Dashboard() {
  return (
    <div className='bg-slate-100 flex'>
        <Sidebar/>
        <Uploa/>
    </div>
  )
}

export default Dashboard