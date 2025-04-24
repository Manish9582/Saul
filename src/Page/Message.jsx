import React, { useEffect, useState } from 'react'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import ProfileUser from '../Component/ProfileUser';
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Message = () => {
    const [resiveData, setresiveData] = useState([])
    const [singlstore, setsinglstore] = useState({})
    useEffect(() => {
        let urlData = 'https://dummyjson.com/users';
        const fetchData = async () => {
            const response = await axios.get(urlData)
                .then((response) => {
                    setresiveData(response.data.users)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])
    const SinglData = useLocation();
    const path = SinglData.pathname;
    let dataSingle = path.split('/')
    useEffect(() => {
        let urlData = `https://dummyjson.com/users/${dataSingle[2]}`;
        const fetchData = async () => {
            const response = await axios.get(urlData)
                .then((response) => {
                    setsinglstore(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData()
    }, [singlstore])
    return (
        <>
            <div className='py-10'>
                <div className='flex h-[84.50vh] w-[100%]'>
                    <div className='border-r-2 h-[100%]'>
                        <ProfileUser />
                    </div>
                    <div className='grid grid-cols-12 h-[100%] w-[100%]'>
                        <div className='col-start-1 col-end-4  h-[100%] bg-white border-r-2'>
                            <div className='px-10 py-6 border-b-2'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-lg font-bold'>Among_us_life_9654</h1>
                                    <HiOutlinePencilSquare className='text-[28px] font-bold' />
                                </div>
                            </div>
                            <div className='px-10 h-[73.90vh] overflow-y-auto'>
                                {resiveData.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <Link className='flex gap-3 items-center mt-4' to={`/message/${data.id}`}>
                                                <div className='h-[50px] w-[50px] rounded-[50%]'>
                                                    <img src={data.image} alt="" className='w-[100%] h-[100%] rounded-[50%] object-cover' />
                                                </div>
                                                <div>
                                                    <p className='text-[16px] font-normal'>{data.firstName}</p>
                                                    <p className='text-[12px]'>online</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='col-start-4 col-end-13 h-[100%] bg-white relative overflow-y-auto'>
                            <div className='px-6 py-[13px] border-b-2 sticky top-0 z-20 w-[100%] bg-white'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='h-[50px] w-[50px] rounded-[50%] border-2'>
                                            <img src={singlstore.image} alt="" className='h-[100%] w-[100px] object-cover rounded-full'/>
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-bold'>{singlstore.firstName}</h1>
                                            <p className='text-[12px]'>online</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <MdCall className='text-[25px] font-bold' />
                                        <FaVideo className='text-[25px] font-bold' />
                                        <IoIosInformationCircleOutline className='text-[25px] font-bold' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-6 py-4'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message