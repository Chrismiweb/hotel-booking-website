import React, { useState, useContext } from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
import { Input, Button, Spin, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FaLock } from "react-icons/fa";
import { UserContext } from '../context/userContext'; // Import the context
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { setUserInfo } = useContext(UserContext); // Access setUserInfo from context

    async function loginApi(e) {
        e.preventDefault();
        if (!email || !password) {
            return message.error("Please fill all credentials to login");
        }
        setIsLoading(true);
        const baseUrl = 'http://localhost:1000/login';
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json(); // Parsing the response to JSON
            
            if (response) { // Checking if the login is successful
                setIsLoading(false);
                message.success(data.message);
                
                // Store the token and set user info in context
                localStorage.setItem("token", data.token); // Storing token
                setUserInfo({ userName: data.checkUser.userName }); // Setting the username in context

                window.location.href = "/allHotels"; // Redirect to home page
            } else {
                message.error(data.error);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            message.error("Unable to login, please check your internet connection");
        }
    }

    return (
        <div className='w-[100%] md:h-[100vh]  pb-[300px] md:pb-0 gap-[50px] flex flex-col justify-center items-center bg-blue-600'>
            {/* <ToastContainer /> */}
            <div className='w-[100%] mt-[50px] md:mt-[10px] flex justify-between px-[20px] md:px-[80px] items-center'>
                <Link to = '/'>
                    <p className='text-white cursor-pointer text-[20px] md:text-[30px]'>CHRISMILUXE</p>
                </Link>
                <Link to = '/register'>
                    <button className='border border-white px-[20px] rounded-md py-[10px] font-bold hover:text-blue-600 hover:bg-white duration-300 ease-in text-white'>Sign Up</button>
                </Link>
            </div>
            <form action="" className='w-[90%] md:w-[50%] lg:w-[40%] py-[50px] flex justify-center items-center flex-col bg-slate-50 rounded-lg'>
                <div className='w-[80%] gap-[20px] flex justify-center items-center flex-col'>
                    <h1 className='text-[25px] font-bold'>LOGIN/SIGN IN</h1>
                    <div className='w-[100%] flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] font-semibold'>Email</p>
                            <Input
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                size="large"
                                placeholder="E.g Chrismibiteso@gmail.com"
                                prefix={<MdOutlineAlternateEmail />}
                            />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] font-semibold'>Password</p>
                            <Input.Password
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                size="large"
                                placeholder="Input password"
                                prefix={<FaLock />}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                            />
                        </div>
                    </div>
                    <Button onClick={loginApi} className='w-[100%] bg-blue-700 text-white'>
                        {isLoading ? <Spin/>: "Log In"}
                    </Button>

                    {/* <div className='w-[100%] flex flex-col justify-center gap-[10px] items-center'>
                        <p>Sign In with Google</p>
                        <div className='w-[50%] justify-center items-center flex gap-[20px]'>
                            <AiFillGoogleCircle className='text-[30px]' />
                            <AiFillGoogleCircle className='text-[30px]' />
                            <AiFillGoogleCircle className='text-[30px]' />
                        </div>
                    </div> */}
                </div>
            </form>
        </div>
    );
}

export default Login;


// import React, { useState } from 'react'

// function Login() {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit =async(e)=>{
//         e.preventDefault()
//         const response = await fetch('http://localhost:1000/login', {
//             method: 'POST',
//             headers: {
//             'Content-type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         })
//         .then(res=>res.json())
//         if(response){
//             console.log(response)
//         }
//     }


//   return (
//     <div>
//         <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" id="" placeholder='email'/>
//         <input type="text"  onChange={(e)=>setPassword(e.target.value)} name="password" id="" placeholder='password'/>
//         <button onClick={handleSubmit}>submit</button>
//     </div>
//   )
// }

// export default Login