import React from 'react'
import { profileIcon } from '../Component/Icon';
import { Link, NavLink } from 'react-router-dom';
import { RiSettings4Fill } from "react-icons/ri";

const ProfileUser = () => {
    return (
        <div className='h-[100%] grid grid-flow-row grid-rows-12 justify-between p-4  overflow-hidden bg-white'>
            <div className='row-start-1 row-end-11'>
                {profileIcon.map((data, index) => {
                    return (
                        <div key={index} className=' hover:bg-white w-full'>
                            <NavLink to={data.links}>
                                <div className='mt-3'>
                                    <p className='text-[25px] font-semibold'>{data.icon}</p>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <div className='row-start-11 row-end-13'>
                <div className='mt-5'>
                <Link to={'/profile'} >
                    <div className='h-[25px] w-[25px] rounded-[50%]'>
                        <img src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/4k-uncropped.jpg" alt=""
                            className='w-[100%] h-[100%] rounded-[50%] object-cover' />
                    </div>
                </Link>
                </div>
                <div className='mt-5'>
                    <Link to={'/profile/setting'}>
                        <p className='text-[25px] font-semibold'><RiSettings4Fill /></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser