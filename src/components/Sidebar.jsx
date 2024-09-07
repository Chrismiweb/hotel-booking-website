import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import profile from '../images/man3.jpg'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='w-[20%] flex flex-col gap-[20px] h-[100vh] bg-white'>
        <div className ='flex w-[100%] bg-black py-[15px] justify-around items-center'>
            <p className='text-white text-[25px]'>CHRISMILUXE</p>
            <CgMenuLeft className='text-white cursor-pointer text-[25px]'/>
        </div>
        <div className ='flex w-[100%] flex-col px-[20px] bg-white py-[15px] justify-around items-center'>
            <div className='w-[100%] gap-[5px] justify-start flex flex-col items-start'>
                <div className='w-[100px] flex justify-center overflow-hidden items-center h-[100px] rounded-[100%]'>
                    <img src={profile} alt="" className='object-fill  h-[100px] w-[100px] rounded-full'/>
                </div>
                <p className='text-[18px] font-semibold'>Chrismi Biteso</p>
                <p className='text-[15px] text-slate-500'>chrismibiteso@gmail.com</p>
            </div>
            <div className='w-[100%] flex flex-col'>
               <Link to='/allHotels'>
               <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
                    <MdOutlineCloudUpload className='text-[20px] font-bold'/>
                    <p className='text-[20px] font-semibold'>All Hotels</p>
                    <IoMdArrowDropright className='text-[20px] font-bold' />
                </div>
               </Link>
               <Link to='/upload'>
               <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
                    <MdOutlineCloudUpload className='text-[20px] font-bold'/>
                    <p className='text-[20px] font-semibold'>Upload Hotel</p>
                    <IoMdArrowDropright className='text-[20px] font-bold' />
                </div>
               </Link>
                <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
                    <MdOutlineCloudUpload className='text-[20px] font-bold'/>
                    <p className='text-[20px] font-semibold'>Upload</p>
                    <IoMdArrowDropright className='text-[20px] font-bold' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
