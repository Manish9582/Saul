import React from 'react'
import { Link, Links } from 'react-router-dom'
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiInstagram } from "react-icons/si";

const Login = () => {
    return (
        <div className="bg-[url('/assets/rose.jpg')] h-[100%] w-[100%] bg-no-repeat bg-cover bg-center my-8 py-16">
            <div className='max-w-[600px] mx-auto  bg-[rgba(0,0,0,0.5)] p-16 rounded-lg h-[100%]'>
                <form action="" className='text-white h-[100%]'>

                    <div className='my-2'>
                        <label htmlFor="alst" className='text-[19px]'>Email</label>
                        <div className='w-[100%] h-[35px]'>
                            <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' />
                        </div>
                    </div>

                    <div className='my-2'>
                        <label htmlFor="alst" className='text-[19px]'>Password</label>
                        <div className='w-[100%] h-[35px]'>
                            <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' />
                        </div>
                    </div>
                    <div className='flex justify-end '>
                        <Link className='text-[20px] underline'>
                            Forget password
                        </Link>
                    </div>
                    <div className='mt-3 text-center bg-gradient-to-r from-pink-600 to-pink-300 rounded-2xl py-2'>
                        <input type="submit" value="Login" className='text-[20px]' />
                    </div>


                    <div className='w-[fit-content] mx-auto text-center my-[10px]'>
                        <div>
                            <p className='text-white font-medium text-[19px]'>Or Login Up Using</p>
                        </div>
                        <div className='flex gap-4 text-[25px] mt-3'>
                            <div className='bg-white p-2 rounded-[50%]'>
                                <IoLogoApple className='text-black' />
                            </div>
                            <div className='bg-white p-2 rounded-[50%]'>
                                < FcGoogle />
                            </div>
                            <div className='bg-white p-2 rounded-[50%]'>
                                <SiInstagram className='text-black' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login