import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import Button from './Button';
const Header = () => {
  const [profileBtn, setprofileBtn] = useState(1)

  return (
    <>
      <div className='grid grid-cols-12 max-w-[1400px] mx-auto items-center'>
        <div className='col-span-1'>
          <div className='flex items-center'>
            <div className='font-bold font-mono '>
              <p>First And</p>
              <p>Last Date</p>
            </div>
            <div className='h-[20px] w-[20px]'>
              <img src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png" alt=""
                className='rotate-90 h-[100%] w-[100%] ' />
            </div>
          </div>
        </div>
        <nav className='border-r-2 col-start-7 col-end-11 flex justify-evenly'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/community'>Community</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </nav>
        <div className='col-start-11 col-end-13 flex justify-evenly items-center'>
          <div className=''>
            <FiSearch />
          </div>
          <div>
            {profileBtn > 0 ? (
                <Link to={'profile'} className='text-[20px] font-medium'>
                  Account
                </Link>
            ) : (
              <Button />
            )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header