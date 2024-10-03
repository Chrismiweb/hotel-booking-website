

import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext'; // Import the context
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  // const [logout, setLogout] = useState()
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
  return (
    <div className='w-[100%] bg-black flex items-center py-[10px] justify-between px-[50px] pr-[100px]'>
      <p className='text-white text-[30px]'>CHRISMILUXE</p>
      <div className='text-white flex gap-[20px]'>
        <a href='/'><p className='cursor-pointer font-bold text-[15px]'>Home</p></a>
        <a href="/booking"><p className='cursor-pointer font-bold text-[15px]'>Booking</p></a>
        <p className='cursor-pointer font-bold text-[15px]'>Contact</p>
        <a href="/allHotels"><p className='cursor-pointer font-bold text-[15px]'>Dashboard</p></a>
      </div>
      
      {/* Conditionally display username or login button */}
      {/* <Link to='/login'>
        <button className='bg-blue-800 py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
          {userInfo ? `Welcome ${userInfo.userName}` : "Login"}
        </button>
      </Link> */}
      <div className='flex justify-center items-center '>
        {
          userInfo ? (
            <div className='flex justify-center items-center gap-[20px]'>
                <button onClick={handleLogout} className='py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
                  Log Out
                </button>
                <div className='flex gap-[5px] justify-center items-center'>
                  <CgProfile className='text-white'/>
                  <p className='text-white text-[15px] font-bold '>{userInfo.userName}</p>
                </div>
            </div>
          ) : (
            <div className='flex gap-[10px] justify-center items-center'>
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
    </div>
  );
}

export default Navbar;

