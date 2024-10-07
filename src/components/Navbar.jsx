

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext'; // Import the context
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";


function Navbar() {
  // const [logout, setLogout] = useState()
  const [dropMenu, setDropMenu] = useState(false)
  const { userInfo, setUserInfo } = useContext(UserContext); // Access the user info from context


  useEffect(() => {
    if (userInfo) {
      console.log("Logged in as:", userInfo.userName); // Check the user info in console
    }
  }, [userInfo]);

  function handleLogout(){
    localStorage.removeItem("token")
    setUserInfo(null)
  }

  function handleDropMenu(){
    setDropMenu(!dropMenu)
  }
  function handleClose(){
     setDropMenu(false)
  }
  return (
    <div className='w-[100%] flex justify-center items-center flex-col'>
      <div className='w-[100%] bg-black flex items-center py-[20px] justify-around lg:justify-between lg:px-[50px] '>
        <p className='text-white text-[30px]'>CHRISMILUXE</p>
        <button onClick={handleDropMenu} className='text-white text-[30px] flex lg:hidden'><CgMenuLeft/></button>
        <div className='text-white hidden lg:flex gap-[20px]'>
          <a href='/'><p className='cursor-pointer font-bold text-[15px]'>Home</p></a>
          <a href="/booking"><p className='cursor-pointer font-bold text-[15px]'>Booking</p></a>
          <p className='cursor-pointer font-bold text-[15px]'>Contact</p>
          {
            userInfo ? (
              <Link to = '/allHotels'>
                  <p className='cursor-pointer font-bold text-[15px]'>Dashboard</p>
              </Link>

            ) : null
          }
          {/* <a href="/allHotels"><p className='cursor-pointer font-bold text-[15px]'>Dashboard</p></a> */}
        </div>
        <div className='lg:flex hidden justify-center items-center '>
          {
            userInfo ? (
              <div className='lg:flex hidden justify-center items-center gap-[20px]'>
                  <button onClick={handleLogout} className='py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
                    Log Out
                  </button>
                  <div className='flex gap-[5px] justify-center items-center'>
                    <CgProfile className='text-white'/>
                    <p className='text-white text-[15px] font-bold '>{userInfo.userName}</p>
                  </div>
              </div>
            ) : (
              <div className='lg:flex hidden gap-[10px] justify-center items-center'>
                <Link to = '/login'>
                <button className='bg-blue-800 py-[5px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
                  Login
                </button>
                </Link>
                <Link to = '/register'>
                  <button className='bg-blue-800 py-[5px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
                    Register
                  </button>
                </Link>
              </div>
            )
          }
        </div>

        {/* mobile view navigation bar */}
      </div>
      {
        dropMenu && 
        <div className={`fixed z-10 h-full top-0 right-0 w-full max-w-[300px] bg-black py-[30px] gap-[10px] flex flex-col pt-[50px] items-center ease-in-out transition-all duration-700 ${dropMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* // <div className={`fixed z-10 h-full top-0 right-0 w-full max-w-[300px] bg-black py-[30px] gap-[10px] flex flex-col pt-[50px] items-center transition-all duration-1000 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${dropMenu ? 'translate-x-0' : 'translate-x-full'}`}> */}

          <div className='w-[100%] px-[30px] text-[30px]'>
            <button onClick={handleClose} className='text-white'><IoClose/></button>

          </div>
          {/* <div className='bg-black py-[30px] gap-[10px] w-[100%] flex flex-col justify-center items-center'> */}
          <div className='text-white flex justify-center items-center flex-col lg:hidden gap-[20px]'>
            <a href='/'><p className='cursor-pointer font-bold text-[20px]'>Home</p></a>
            <a href="/booking"><p className='cursor-pointer font-bold text-[20px]'>Booking</p></a>
            <p className='cursor-pointer font-bold text-[20px]'>Contact</p>
            {
              userInfo ? (
            <Link to = '/allHotels'>
            <p className='cursor-pointer font-bold text-[20px]'>Dashboard</p>
            </Link>
              ) : null
            }
          </div>
          <div className='lg:hidden flex flex-col justify-center items-center '>
            {
              userInfo ? (
                <div className='lg:hidden flex flex-col justify-center items-center gap-[20px]'>
                    <button onClick={handleLogout} className='py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
                      Log Out
                    </button>
                    <div className='flex gap-[5px] justify-center items-center'>
                      <CgProfile className='text-white'/>
                      <p className='text-white text-[15px] font-bold '>{userInfo.userName}</p>
                    </div>
                </div>
              ) : (
                <div className='lg:hidden flex gap-[10px] justify-center items-center'>
                  <Link to = '/login'>
                  <button className='bg-blue-800 py-[5px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[20px]'>
                    Login
                  </button>
                  </Link>
                  <Link to = '/register'>
                    <button className='bg-blue-800 py-[5px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[20px]'>
                      Register
                    </button>
                  </Link>
                </div>
              )
            }
          </div>
          
        </div>

      }
      
    </div>
  );
}

export default Navbar;

