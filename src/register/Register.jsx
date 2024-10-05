import React, { useState } from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button, Spin, message } from 'antd';
import {Link} from 'react-router-dom'

function Register() {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function registerApi(e) {
        e.preventDefault();
        if (!userName || !email || !password) {
            return message.error("Please input all credentials");
        }
        setIsLoading(true);
        const baseUrl = 'http://localhost:1000/register'

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, userName, password })
            })
            const data = await response.json()
            if (response) {
                message.success("Registration successful");
                window.location.href = '/login'
                console.log(data);
            } else {
                message.error(data.error || "Registration failed");
            }
        } catch (error) {
            console.error(error);
            message.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='w-[100%] md:h-[100vh]  pb-[300px] md:pb-0 gap-[50px] flex flex-col justify-center items-center bg-blue-600'>
            <div className='w-[100%] mt-[50px] md:mt-[10px] flex justify-between px-[20px] md:px-[80px] items-center'>
                <Link to = '/'>
                    <p className='text-white cursor-pointer text-[20px] md:text-[30px]'>CHRISMILUXE</p>
                </Link>
                <Link to = '/login'>
                    <button className='border border-white px-[20px] rounded-md py-[10px] font-bold hover:text-blue-600 hover:bg-white duration-300 ease-in text-white'>Log In</button>
                </Link>
            </div>
            <form onSubmit={registerApi} className='w-[90%] md:w-[50%] lg:w-[40%] py-[50px] flex justify-center items-center flex-col bg-slate-50 rounded-lg'>
                <div className='w-[80%] gap-[20px] flex justify-center items-center flex-col'>
                    <h1 className='text-[25px] font-bold'>REGISTER/SIGN UP</h1>
                    <div className='w-[100%] flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] font-semibold'>Username</p>
                            <Input
                                name='userName'
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                                size="large"
                                placeholder="E.g Chrismi Bitero..."
                                prefix={<UserOutlined />}
                            />
                        </div>
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
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className='w-[100%] bg-blue-700 text-white' 
                        disabled={isLoading}
                    >
                        {isLoading ? <Spin /> : "Sign Up"}
                    </Button>
                    
                    {/* <div className='w-[100%] flex flex-col justify-center gap-[10px] items-center'>
                        <p>Sign Up with Google</p>
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

export default Register;
