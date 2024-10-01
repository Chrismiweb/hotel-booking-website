// import React, { useState } from 'react'
// import { useEffect } from 'react'
// // import { ThemeContext } from '../context/ThemeContext'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   const [user, setUser] = useState({})
//   const token = localStorage.getItem("token")

//   async function handleUser(){
//       const baseUrl = 'http://localhost:1000/login'
//       const response = await fetch(baseUrl,{
//         headers:{
//           Authorization : "Bearer " + token
//         }
//       })
//       const userdata = response.json()
//       if(userdata){
//         setUser(response.checkUser.userName)
//         // console.log(response.checkUser.userName)
//       }
//   }

//   useEffect(()=>{
//     handleUser()
//   },[])
//   return (
//     <div className='w-[100%] bg-black flex items-center py-[10px] justify-between px-[50px] pr-[100px]'>
//       <p className='text-white text-[30px]'>CHRISMILUXE</p>
//       <div className='text-white flex gap-[20px]'>
//         <a href='/'><p className='cursor-pointer font-bold text-[15px]'>Home</p></a>
//         <a href="/booking"><p className='cursor-pointer font-bold text-[15px]'>Booking</p></a>
//         <p className='cursor-pointer font-bold text-[15px]'>Contact</p>
//         <a href="/allHotels"><p className='cursor-pointer font-bold text-[15px]'>Dashboard</p></a>

//       </div>
//       {/* <Link to='/register'>
//         <button className='bg-blue-800 py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>Sign Up</button>
//       </Link> */}
//       <Link to='/login'>
//         <button className='bg-blue-800 py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>{user ? `welcome ${user.checkUser.userName}` : "Login"}</button>
//       </Link>

//       {/* <button onClick={changeColor}>change color</button> */}
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext'; // Import the context
import { Link } from 'react-router-dom';

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext); // Access the user info from context

  useEffect(() => {
    if (userInfo) {
      console.log("Logged in as:", userInfo.userName); // Check the user info in console
    }
  }, [userInfo]);

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
      <Link to='/login'>
        <button className='bg-blue-800 py-[7px] border-2 border-blue-700 hover:bg-white hover:text-blue-700 rounded-[20px] px-[30px] text-white font-bold text-[15px]'>
          {userInfo ? `Welcome ${userInfo.userName}` : "Login"}
        </button>
      </Link>
    </div>
  );
}

export default Navbar;

