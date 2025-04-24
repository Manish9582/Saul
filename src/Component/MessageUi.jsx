import React, { useEffect, useState } from 'react'
import ProfileUser from './ProfileUser'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import axios from 'axios';
import { Link } from 'react-router-dom';

const MessageUi = () => {
    const [resiveData, setresiveData] = useState([])
    useEffect(() => {
        let urlData = 'https://dummyjson.com/users';
        const fetchData = async () => {
            const response = await axios.get(urlData)
                .then((res) => {
                    setresiveData(res.data.users)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='py-10'>
                <div className='flex h-[84.50vh] w-[100%] overflow-y-auto'>
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
                        <div className='col-start-4 col-end-13 h-[100%] bg-white'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageUi