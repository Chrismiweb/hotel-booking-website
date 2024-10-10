import React, { useState } from 'react'
import { CgMenuLeft } from "react-icons/cg";
import Sidebar from './Sidebar';


function DashDropdown() {
    const [dropdown, setDropdown] = useState(false)
    function handledropdown(){
        setDropdown(!dropdown)
    }
  return (
    <div className='lg:w-[80%] w-[100%] bg-slate-300 px-[20px] flex flex-col'>
         {/* <div className='p-[20px] w-[100%] flex justify-end items-end lg:hidden'>
            <button onClick={handledropdown} className='text-[40px]'><CgMenuLeft/></button>
        </div>
       {
        dropdown ? <Sidebar/> : null
       }
         */}
    </div>
  )
}

export default DashDropdown