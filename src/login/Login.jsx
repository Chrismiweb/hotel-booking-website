import React, { useState, useContext } from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button } from 'antd';
import { UserContext } from '../context/userContext'; // Import the context

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { setUserInfo } = useContext(UserContext); // Access setUserInfo from context

    async function loginApi(e) {
        e.preventDefault();
        if (!email || !password) {
            return toast.warn("Please fill all credentials to login");
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
            
            if (response.ok) { // Checking if the login is successful
                setIsLoading(false);
                toast.success(data.message);
                
                // Store the token and set user info in context
                localStorage.setItem("token", data.token); // Storing token
                setUserInfo({ userName: data.checkUser.userName }); // Setting the username in context

                window.location.href = "/"; // Redirect to home page
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            toast.error("Unable to login, please check your internet connection");
        }
    }

    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center bg-blue-700'>
            <ToastContainer />
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
                            <input
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                size='large'
                                placeholder="input password"
                            />
                        </div>
                    </div>
                    <Button onClick={loginApi} className='w-[100%] bg-blue-700 text-white'>
                        {isLoading ? "Logging in..." : "Log In"}
                    </Button>

                    <div className='w-[100%] flex flex-col justify-center gap-[10px] items-center'>
                        <p>Sign In with Google</p>
                        <div className='w-[50%] justify-center items-center flex gap-[20px]'>
                            <AiFillGoogleCircle className='text-[30px]' />
                            <AiFillGoogleCircle className='text-[30px]' />
                            <AiFillGoogleCircle className='text-[30px]' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
