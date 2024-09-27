import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button } from 'antd';
function Login() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-blue-700'>
        <form action="" className='w-[40%] py-[50px] flex justify-center items-center flex-col bg-slate-50 rounded-lg'>
           <div className='w-[80%] gap-[20px] flex justify-center items-center flex-col'>
                <h1 className='text-[25px] font-bold'>REGISTER/SIGN UP</h1>
                <div className='w-[100%] flex flex-col gap-[20px]'>
                   
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[14px] font-semibold'>Email</p>
                        <Input type='email' size="large" placeholder="E.g Chrismibiteso@gmail.com" prefix={<MdOutlineAlternateEmail />} />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[14px] font-semibold'>Password</p>
                        <Input.Password
                            size='large'
                            placeholder="input password"
                            prefix={<FaLock />}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                </div>
                <Button className='w-[100%]' type="primary">Sign In</Button>
                <div className='w-[100%] flex flex-col justify-center gap-[10px] items-center'>
                    <p>Sign In with Google</p>
                    <div className='w-[50%] justify-center items-center flex gap-[20px]'>
                        <AiFillGoogleCircle className='text-[30px]'/>
                        <AiFillGoogleCircle className='text-[30px]'/>
                        <AiFillGoogleCircle className='text-[30px]'/>
                    </div>
                </div>
           </div>
        </form>
    </div>
  )
}

export default Login