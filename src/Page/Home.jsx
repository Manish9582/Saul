import React, { useEffect, useState } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import Button from '../Component/Button';
import { arrImage, arrImage2, choosePartner } from '../Component/Image';
import AddPersion from '../Component/AddPersion';
import { arrIcon } from '../Component/Icon';

const Home = () => {

let showUser=4;
  return (
    <>
      <div className='attchImage'>
        <div className='relative h-[100%] w-full bg-[rgba(0,0,0,0.3)]'>
          <div className='text-center  absolute top-[70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <div>
              <strong className='text-[45px] text-white'>Go On Your First  Last Date</strong>
            </div>
            <div>
              <strong className='text-[22px] text-white'>"Find your perfect match — where connections spark, and love begins."</strong>
            </div>
            <div className='mx-auto mt-10 text-white bg-gradient-to-r from-rose-400 to-rose-500 h-[100%] px-3 py-2 rounded-3xl w-[fit-content]'>
              Registation Now
            </div>
          </div>
        </div>
      </div>


      {/* Emotions */}
      <div className='max-w-[1300px] mx-auto p-20'>
        <div>
          <div className='grid grid-cols-2 items-center gap-10'>
            <div>
              <strong className='text-[50px]'>
                Connecting Hearts, One Swipe  At  A Time
              </strong>
              <p className='text-[13px] font-medium text-gray-400 mb-3'>
                It is a long establish fact at the reader will be distraced  by the readable content of
                a page when looking at its layout. The point of using  lorem ipsum is that it has
              </p>

              <div className='flex items-center gap-4 my-6 font-medium'>
                <FiCheckCircle className='bg-red-600 text-white rounded-[50%] text-[20px]' />
                <p>Provide Deeper Matching Insight</p>
              </ div>
              <div className='flex items-center gap-4 mb-6 font-medium'>
                <FiCheckCircle className='bg-red-600 text-white rounded-[50%] text-[20px]' />
                <p>Verfy to Increase Trust</p>
              </div>

              <div>
                <Button />
              </div>
            </div>

            <div className='relative '>
              <div className='h-[100%] w-[100%]'>
                <img src="/assets/purposeOfgirl2.jpg" alt="" className='rounded-xl h-[100%] w-[100%]' />
              </div>
              <div className='absolute top-[50%] left-[-20%] w-[200px]'>
                <img src="/assets/holdhand.jpeg" alt="" className='rounded-md' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-10 mt-14'>
          {arrIcon.map((data, index) => {
            return (
              <div key={index} className='text-center bg-white py-9 px-6 rounded-xl'>
                <div className=' w-[fit-content] rounded-[50%] mx-auto border-2 p-6 bg-red-500 text-white'>
                  <p className='text-[35px]'>{data.icon}</p>
                </div>
                <div className='text-[22px] font-bold mt-4'>{data.title}</div>
                <div className='text-[13px] text-center mt-2'>
                  {data.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* couple detail */}

      <div className='max-w-[1400px] mx-auto bg-white rounded-2xl'>
        <div className='bg-rose-600 text-white p-5 rounded-t-2xl'>
          <div className='flex justify-between text-[40px]'>
            <p>Purfect Match 🥰</p>
            <p>Love Journy  🥰</p>
            <p>Couple Goal  🥰</p>
          </div>
        </div>
        <div className='py-14'>
          <div className='grid grid-cols-6 gap-10 items-center px-14'>
            <div className='col-span-3'>
              <p className='text-[50px] font-medium'>
                Where Chemistry Meets Compatibility
              </p>
              <div className='my-8'>
                <Button />
              </div>
            </div>
            <div className='col-start-4 col-end-7 grid grid-cols-3 gap-5'>
              {arrImage.map((data, index) => {
                return (
                  <div key={index}>
                    <div className='w-[100%] h-[200px] bg-white border rounded-xl'>
                      <img src={data.image} alt="" className='h-[100%] w-[100%] object-cover rounded-xl' />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='grid grid-cols-6 gap-6 mt-5 px-12'>
            {arrImage2.map((data, index) => (
              <div key={index} className='w-[100%] h-[200px] bg-white overflow-hidden border rounded-xl   bg-transparent relative'>
                {data.image !== '' && (
                  <img src={data.image} alt="" className={`h-[100%] w-[100%] object-cover`} />
                )}
                <div className='p-2 text-black absolute top-[50%] left-[50%] text-center w-[70%] border-none 
                transform translate-x-[-50%] translate-y-[-50%]'>
                  <strong className='text-[32px] font-bold  text-rose-600 bg-transparent'>{data.headig}</strong><br />
                  <p className='text-[25px] bg-transparent'>{data.Subheadig}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* category */}


      <div>
        <AddPersion user={showUser}/>
      </div>

    </>
  )
}

export default Home