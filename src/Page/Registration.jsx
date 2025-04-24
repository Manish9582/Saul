import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiInstagram } from "react-icons/si";
import axios from 'axios';

const Registration = () => {
  const [formdata, setformdata] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    password: ''
  })

  const sendData = (e) => {
    const { value, name } = e.target;
    setformdata({
      ...formdata,
      [name]: value
    })
  }

  const [confirmpass, setconfirmpass] = useState()
  const submitData = async (e) => {
    e.preventDefault()
    try {
      const reposnce = await axios.post('', formdata);
      console.log(reposnce.data)
    } catch (error) {
      console.log(error)
    }
    setformdata({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      dob: '',
      email: '',
      phone: '',
      password: ''
    })
    setconfirmpass('')
  }


  return (
    <>
      <div className="bg-[url('/assets/rose.jpg')] h-[100%] w-[100%] bg-no-repeat bg-cover bg-center my-8 py-16">
        <div className='max-w-[600px] mx-auto  bg-[rgba(0,0,0,0.5)] p-16 rounded-lg h-[100%]'>
          <form action="" className='text-white h-[100%]' onSubmit={submitData}>

            <div>
              <label htmlFor="name" className='text-[19px]'>Name</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' value={formdata.firstName}
                  onInput={sendData} name='firstName'
                />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="last" className='text-[19px]'>Last Name</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' name='lastName' value={formdata.lastName}
                  onInput={sendData}
                />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="age" className='text-[19px]'>Age</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' name='age' value={formdata.age}
                  onInput={sendData} />
              </div>
            </div>

            <div className='my-2 border-white'>
              <label htmlFor="gender" className='text-[19px]'>Gender</label>
              <div className='w-[100%]'>
                <div className='flex items-center gap-2 justify-between'>
                  <p>Male</p><input type="radio" name='gender' value="male" className='w-[17px] h-[17px]' onClick={sendData} />
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <p>Female</p><input type="radio" name='gender' value="female" className='w-[17px] h-[17px]' onClick={sendData} />
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <p>Other</p><input type="radio" name='gender' value="other" className='w-[17px] h-[17px]' onClick={sendData} />
                </div>
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="alst" className='text-[19px]'>DOB</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="date" className='w-[100%] h-[100%] outline-none rounded-sm' name='dob' value={formdata.dob}
                  onInput={sendData} />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="alst" className='text-[19px]'>Email</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' name='email' value={formdata.email}
                  onInput={sendData} />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="alst" className='text-[19px]'>Phone Number</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' name='phone' value={formdata.phone}
                  onInput={sendData} />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="alst" className='text-[19px]'>Password</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' name='password' value={formdata.password}
                  onInput={sendData} />
              </div>
            </div>

            <div className='my-2'>
              <label htmlFor="alst" className='text-[19px]'>Confirm Password</label>
              <div className='w-[100%] h-[35px] text-[black]'>
                <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm' value={confirmpass}
                  onInput={(e) => setconfirmpass(e.target.value)} />
              </div>
            </div>

            <div className='mt-9 text-center bg-gradient-to-r from-pink-600 to-pink-300 rounded-2xl py-2'>
              <input type="submit" value={"Sign"} className='text-[20px]' />
            </div>


            <div className='w-[fit-content] mx-auto text-center my-[10px]'>
              <div>
                <p className='text-white font-medium text-[19px]'>Or Sign Up Using</p>
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
    </>
  )
}

export default Registration