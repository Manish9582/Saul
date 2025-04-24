import React, { useEffect, useState } from 'react'
import { RiSettings4Fill } from "react-icons/ri";
import { profileIcon } from '../Component/Icon';
import { Link, NavLink } from 'react-router-dom';
import { FaPencil } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import axios from 'axios';


const Profile = () => {
    const [Fetcingdata, setFetcingdata] = useState([])
    const fectchData = async () => {
        const reposnse = await axios.get("https://dummyjson.com/users")
            .then((res) => {
                setFetcingdata(res.data.users)
            })
            .catch((Error) => {
                console.log(Error)
            })
    }
    useEffect(() => {
        fectchData();
    }, [])
    return (
        <div className='grid grid-cols-12 py-10 h-[90vh] bg-white'>
            <div className='col-start-1 col-end-3 grid grid-flow-row grid-rows-12 justify-between pl-4 h-[100%] overflow-hidden bg-gray-100 '>
                <div className='row-start-1 row-end-11'>
                    {profileIcon.map((data, index) => {
                        return (
                            <div key={index} className='mt-4 '>
                                <NavLink to={data.links} >
                                    <div className='flex gap-3 items-center cursor-pointer '>
                                        <p className='text-[25px] font-semibold -translate-z-8 rotate-x-50 rotate-z-45 '>{data.icon}</p>
                                        <p>{data.title}</p>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
                <div className='row-start-11 row-end-13'>
                    <Link to={'/profile'}>
                        <div className='flex items-center gap-3'>
                            <div className='h-[25px] w-[25px] rounded-[50%]'>
                                <img src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/4k-uncropped.jpg" alt=""
                                    className='w-[100%] h-[100%] rounded-[50%] object-cover' />
                            </div>
                            <div>
                                Profile
                            </div>
                        </div>
                    </Link>
                    <Link to={'/profile/setting'}>
                        <div className='flex gap-3 items-center mt-4'>
                            <p className='text-[25px] font-semibold'><RiSettings4Fill /></p>
                            <p>Setting</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='col-start-3 col-end-13 h-[100%] overflow-auto'>

                <div className='h-[300px] w-[100%]   bg-[url(https://wallpapers.com/images/featured/4k-gaming-background-bud9k5ffqi3r2ds9.jpg)]
                bg-cover bg-no-repeat bg-center relative'>
                    <div className='absolute right-0 w-[fit-content] p-3 rounded-[50%] bg-gray-50'>
                        <FaPencil />
                    </div>
                    <div className='absolute top-[70%] left-8 w-[150px] h-[150px] rounded-[50%]'>
                        <img src="https://images8.alphacoders.com/526/thumb-1920-526946.jpg" alt=""
                            className=' w-[100%] h-[100%] rounded-[50%] object-cover' />
                    </div>
                </div>
                <div className='mt-[60px] px-10 bg-pink-100 shadow-ss rounded-ss py-2'>
                    <div className='flex items-center justify-between'>
                        <p>UserName</p>
                        <div className='flex gap-6'>
                            <div className='p-3 rounded-full bg-gray-100'>
                                <FiPlus className='text-[20px] font-bold' />
                            </div>
                            <div className='py-3 px-[15px] rounded-full bg-gray-100'>
                                <FaRegShareFromSquare />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-2'>
                    <div className='text-center border-b border-t py-2'>
                        <strong className='text-[20px]'>Your Post</strong>
                    </div>
                    <div className='grid grid-cols-3 gap-1  max-w-[1000px] mx-auto bg-white my-3'>
                        {Fetcingdata.slice(0, 5).map((data, index) => {
                            return (
                                <div key={index} className='bg-white h-[420px] border-2 border-purple-800'>
                                    <div className='mx-auto h-[100%] w-[100%]'>
                                        <img src={`${data.image}`} alt="" className='h-[100%] w-[100%] object-cover' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile