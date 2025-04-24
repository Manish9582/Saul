import React, { useState } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import { arrImage, arrImage2, choosePartner } from '../Component/Image';
import Button from '../Component/Button';
import { arrIcon } from '../Component/Icon';
import { FaArrowRight } from "react-icons/fa6";
import { ArrQues } from '../Component/Questoin';



const About = () => {
  let showUser = 8;
  const [faquestion, setfaquestion] = useState([])
  
  const SetFunfaq = (id) => {
    setfaquestion((preValue)=>{
      const values={...preValue}
      values[id] = !values[id];
      return values;
    })
  }


  return (
    <>
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


      <div className='grid grid-cols-12 w-[1300px] mx-auto h-[350px] items-center'>
        <div className='col-start-1 col-end-7'>
          <div className='w-[100%] h-[350px]'>
            <img src="assets/chattingGrir.png" alt="" className='h-[100%] w-[100%] object-cover rounded-xl shadow-md' />
          </div>
        </div>
        <div className='col-start-8 col-end-12'>
          <p className='text-rose-700 font-black'>How Does</p>
          <p className='text-[35px] font-semibold'>Chat Work</p>
          <p className='text-[14px] text-gray-400'>
            This site lets you choose a partner and easily start chatting or building a connection with them.
          </p>
          <hr className='my-2 border-2' />
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>Simple to use</p>
              <p>Just send a friend request first, and once they accept, you can start chatting</p>
            </div>
            <div className='bg-rose-500 p-3 rounded-[50%]'>
              <FaArrowRight className='-rotate-45' />
            </div>
          </div>
          <hr className='my-2 border-2' />
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>Samrt Matching</p>
              <p> based on their interests and preferences</p>
            </div>
            <div className='bg-rose-500 p-3 rounded-[50%]'>
              <FaArrowRight className='-rotate-45' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-16'>
        <div className='max-w-[1400px] grid grid-cols-12 mx-auto items-center h-[100%] px-8'>
          <div className='col-start-1 col-end-5'>
            <div>
              <p className='text-rose-500 font-medium'>Chat Love Dating</p>
              <p className='text-[45px]'>Where Love Begins, One Match At A Time</p>
              <p className='my-2'>
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point using Lorem ipsum.
              </p>
            </div>
            <div className='mt-5'>
              <Button />
            </div>
          </div>
          <div className='relative col-start-6 col-end-13'>
            <div className='grid grid-cols-2 gap-10'>
              <div className='bg-gradient-to-r from-purple-300 to-pink-200 h-[100%] rounded-lg'>
                <img src="/assets/oneman.png" alt="" className='w-[100%] h-[100%] object-cover' />
              </div>
              <div className='bg-gradient-to-r from-pink-300 to-purple-200 rounded-lg'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/039/855/156/small/ai-generated-side-view-of-spain-model-with-tablet-png.png" alt=""
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
            </div>
            <div className='w-[100px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/008/508/754/small_2x/3d-chat-mail-message-notification-chatting-illustration-png.png" alt="" className='w-[100%] h-[100%]' />
            </div>
          </div>
        </div>
      </div>

      <div className='pb-8'>
        <div className='grid grid-cols-12 max-w-[1400px] mx-auto items-center bg-white rounded-xl'>
          <div className='col-start-2 col-end-9'>
            <h2 className='text-[32px] font-medium'>FAQ?</h2>
            <div>
              {ArrQues.map((data, index) => {
                return (
                  <div className='border-b-2 pb-2 pt-1 px-1' key={index}>
                    <div className='flex items-center justify-between'>
                      <p className='my-2 text-red-600 font-medium'>{data.question}</p>
                      <div className='text-[20px] font-bold' onClick={() => SetFunfaq(index)}>{data.Iconlpus}</div>
                    </div>
                    <div className={`${faquestion[index] ? 'block' : 'hidden'}`}>
                      <p>{data.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-start-10 col-end-13 h-auto'>
            <img src="https://i.pinimg.com/736x/31/15/a4/3115a4d003d756c460d3020a7c562fb8.jpg" alt="" className='rounded-xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About