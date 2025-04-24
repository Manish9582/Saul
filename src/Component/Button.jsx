import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='w-[fit-content] relative text-white bg-gradient-to-r from-rose-400 to-rose-500 h-[100%] px-3 py-2 rounded-3xl cursor-pointer'>
      <Link to='/sign'>
        <div>
          Registation Now
        </div>
        <div className='h-[20px] w-[20px] absolute top-0 right-[-10px] image'>
          <img src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png" alt=""
            className='h-[100%] w-[100%] ' />
        </div>
      </Link>
    </div>
  )
}

export default Button