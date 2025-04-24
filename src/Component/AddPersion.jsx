import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {choosePartner } from '../Component/Image';

const AddPersion = ({user=[]}) => {
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


    <div className='py-16'>
      <div className='w-[1300px] mx-auto'>
        <div className='w-[fit-content] mx-auto text-center'>
          <p className='text-[40px]'>Find Your Match</p>
          <p className='font-medium'>Here find your perfect parnter that you like</p>
          <div className='flex gap-12 py-5'>
            {choosePartner.map((data, index) => {
              return (
                <div key={index} className=''>
                  <div className='relative w-[100px] h-[100px] border-4 border-rose-600 rounded-[50%]'>
                    <img src={`${data.image}`} alt="" className='w-[100%] h-[100%] object-cover rounded-[50%]' />
                    <p className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[red] font-bold'>
                      {data.cate}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='grid grid-cols-4 gap-6 px-14 mt-5'>
          {Fetcingdata.slice(0, user).map((data, index) => {
            return (
              <div key={index} className='bg-white rounded-t-xl'>
                <div className='mx-auto h-[240px] w-[100%]'>
                  <img src={`${data.image}`} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className='p-6'>
                  <p>{data.firstName}</p>
                  <p className='text-[13px] font-semibold text-grey-200'>{data.university}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AddPersion