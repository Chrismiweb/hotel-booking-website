// import React, { useContext, useEffect, useState } from 'react'
// // import { CgMenuLeft } from "react-icons/cg";
// import { IoClose } from "react-icons/io5";

// import { MdOutlineCloudUpload } from "react-icons/md";
// import { IoMdArrowDropright } from "react-icons/io";
// import { MdDashboard } from "react-icons/md";
// import profile from '../images/man3.jpg'
// import { Link } from 'react-router-dom';
// import { UserContext } from '../context/userContext';

// function Sidebar() {
//     const {userInfo, setUserInfo} = useContext(UserContext)
//     const [close, setClose] = useState(false)

//     function handleLogout(){
//         localStorage.removeItem("token")
//         setUserInfo(null)
//         window.location.href = '/'
//     }
  
//     function handleClose(){
//         setClose(true)
//     }


//     // useEffect(() => {
//     //     if(userInfo){
//     //         return console.log(userInfo)
//     //     }
//     // }, [userInfo])
    
//   return (
//     <div className= {`lg:w-[20%] w-[80%] md:w-[50%] ${close ? 'hidden' : 'block'}`}>
//         <div className='flex lg:flex fixed w-[80%] md:w-[50%] lg:w-[20%] flex-col gap-[20px] h-[100vh] bg-white'>
//             <div className ='flex w-[100%] bg-black py-[15px] justify-around items-center'>
//                 <Link to="/"><p className='text-white cursor-pointer text-[25px]'>CHRISMILUXE</p></Link>
//                 {/* for mobile view only */}
//                 <IoClose onClick={handleClose} className='text-white lg:hidden flex cursor-pointer text-[25px]'/>
//             </div>
//             <div className ='flex w-[100%] flex-col px-[20px] bg-white py-[15px] justify-around items-center'>
//                 <div className='w-[100%] gap-[5px] justify-start flex flex-col items-start'>
//                     <div className='w-[100px] flex justify-center overflow-hidden items-center h-[100px] rounded-[100%]'>
//                         <img src={profile} alt="" className='object-fill  h-[100px] w-[100px] rounded-full'/>
//                     </div>
//                     {
//                         userInfo ? (
//                             <div>
//                                 <p className='text-[18px] font-semibold'>Welcome {userInfo.userName}</p>
//                                 <p className='text-[13px] text-slate-500'>Email: {userInfo.email}</p>
//                             </div>
//                         ) : (
//                             undefined
//                         )
//                     }
//                 </div>
//                 <div className='w-[100%] flex flex-col'>
//                 <Link to='/allHotels'>
//                 <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
//                         <MdDashboard className='text-[20px] font-bold'/>
//                         <p className='text-[20px] font-semibold'>All Hotels</p>
//                         <IoMdArrowDropright className='text-[20px] font-bold' />
//                     </div>
//                 </Link>
//                 <Link to='/upload'>
//                 <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
//                         <MdOutlineCloudUpload className='text-[20px] font-bold'/>
//                         <p className='text-[20px] font-semibold'>Upload Hotel</p>
//                         <IoMdArrowDropright className='text-[20px] font-bold' />
//                     </div>
//                 </Link>
//                     <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
//                         <MdOutlineCloudUpload className='text-[20px] font-bold'/>
//                         <p className='text-[20px] font-semibold'>Upload</p>
//                         <IoMdArrowDropright className='text-[20px] font-bold' />
//                     </div>
//                     <button onClick={handleLogout} className='py-[7px] border-2 bg-blue-700 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[20px] text-white font-bold text-[15px]'>
//                         Log Out
//                     </button>
//                 </div>
//             </div>
//         </div>
//         {/* <div className='w-[100%] h-[300px] bg-red-600'>

//         </div> */}
//     </div>
//   )
// }

// export default Sidebar



import React, { useContext, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdOutlineCloudUpload, MdDashboard } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg"; // Menu icon (Hamburger)
import profile from '../images/man3.jpg';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Sidebar() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [close, setClose] = useState(true); // Sidebar closed for mobile initially

    function handleLogout() {
        localStorage.removeItem("token");
        setUserInfo(null);
        window.location.href = '/';
    }

    function handleClose() {
        setClose(true); // Close the sidebar
    }

    function handleOpen() {
        setClose(false); // Open the sidebar
    }

    return (
        <div>
            {/* Menu Icon to open sidebar (visible on mobile only) */}
            <div className='lg:hidden fixed top-0 left-0 m-4'>
                {close && (
                    <CgMenuLeft onClick={handleOpen} className='text-[30px] cursor-pointer' />
                )}
            </div>

            {/* Sidebar for mobile view (when open) and always visible on desktop */}
            <div className={`lg:w-[20%] w-[80%] md:w-[50%] ${close ? 'hidden lg:flex' : 'flex'} fixed h-[100vh] z-50 bg-white flex-col gap-[20px]`}>
                <div className='flex w-[100%] bg-black py-[15px] justify-around items-center'>
                    <Link to="/">
                        <p className='text-white cursor-pointer text-[25px]'>CHRISMILUXE</p>
                    </Link>
                    {/* Close button visible on mobile */}
                    <IoClose onClick={handleClose} className='text-white lg:hidden flex cursor-pointer text-[25px]' />
                </div>

                <div className='flex w-[100%] flex-col px-[20px] bg-white py-[15px] justify-around items-center'>
                    <div className='w-[100%] gap-[5px] justify-start flex flex-col items-start'>
                        <div className='w-[100px] flex justify-center overflow-hidden items-center h-[100px] rounded-full'>
                            <img src={profile} alt="" className='object-fill h-[100px] w-[100px] rounded-full' />
                        </div>
                        {userInfo ? (
                            <div>
                                <p className='text-[18px] font-semibold'>Welcome {userInfo.userName}</p>
                                <p className='text-[13px] text-slate-500'>Email: {userInfo.email}</p>
                            </div>
                        ) : (
                            <div>
                                <p className='text-[18px] font-semibold'>Welcome Guest</p>
                            </div>
                        )}
                    </div>

                    <div className='w-[100%] flex flex-col'>
                        <Link to='/allHotels'>
                            <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
                                <MdDashboard className='text-[20px] font-bold' />
                                <p className='text-[20px] font-semibold'>All Hotels</p>
                                <IoMdArrowDropright className='text-[20px] font-bold' />
                            </div>
                        </Link>

                        <Link to='/upload'>
                            <div className='w-[100%] cursor-pointer bg-white hover:bg-slate-200 py-[10px] flex justify-around items-center'>
                                <MdOutlineCloudUpload className='text-[20px] font-bold' />
                                <p className='text-[20px] font-semibold'>Upload Hotel</p>
                                <IoMdArrowDropright className='text-[20px] font-bold' />
                            </div>
                        </Link>

                        <button onClick={handleLogout} className='py-[7px] border-2 bg-blue-700 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[20px] text-white font-bold text-[15px]'>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

