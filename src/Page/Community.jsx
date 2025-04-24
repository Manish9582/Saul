import React from 'react'
import AddPersion from '../Component/AddPersion'
import { FaArrowRight } from "react-icons/fa6";
import Button from '../Component/Button';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Community = () => {
  let showUser = 8;
  return (
    <>
      <div>
        <AddPersion user={showUser} />
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

      {/* map */}

      <div className='pb-16'>
        <div className='grid grid-cols-12 gap-10 items-center bg-white'>
          <div className='col-start-2 col-end-6'>
            <p className='text-[45px]'>What Says Costumer About Us</p>
            <p className='text-[13px] text-gray-500'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
              looked up one of the more obscure Latin words, consectetur.</p>
          </div>
          <div className='col-start-7 col-end-13 h-[70vh]'>
            <img src="/assets/map.avif" alt="" className='h-[100%] w-[100%] object-cover' />
          </div>
        </div>
      </div>

       {/* Send massage of website woner */}

       <div className='pb-16'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-12 px-8'>
          <div className='col-start-1 col-end-6'>
            <div>
              <p className='text-[40px]'>Support When You Need It Most</p>
              <p className='mt-2'>Integer sodales auctor nibh, ultricies auctor massa rhoncus sed.</p>
            </div>
            <div className='flex gap-1 items-center my-5'>
              <div className='bg-red-600 text-white p-3 rounded-xl'>
                <CiLocationOn className='text-[30px]' />
              </div>
              <div>
                <p>Location Us</p>
                <p>B-45 Rani Garden Delhi 31</p>
              </div>
            </div>
            <div className='flex gap-1 items-center my-5'>
              <div className='bg-red-600 text-white p-3 rounded-xl'>
                <HiOutlineMailOpen className='text-[30px]' />
              </div>
              <div>
                <p>Mail any Time</p>
                <p>soulsathi654@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-red-600 text-white p-3 rounded-xl'>
                <FaPhoneAlt className='text-[27px]' />
              </div>
              <div>
                <p>Contact Number</p>
                <p><strong>+91</strong>9582747332</p>
              </div>
            </div>
          </div>
          <div className='col-start-8 col-end-12 p-7 bg-white rounded-lg'>
            <form action="" className=''>
              <div className='my-2'>
                <label htmlFor="alst" className='text-[19px]'>Name</label>
                <div className='w-[100%] h-[35px]'>
                  <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm border' />
                </div>
              </div>

              <div className='my-2'>
                <label htmlFor="alst" className='text-[19px]'>Phone</label>
                <div className='w-[100%] h-[35px]'>
                  <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm border' />
                </div>
              </div>

              <div className='my-2'>
                <label htmlFor="alst" className='text-[19px]'>Type of service required</label>
                <div className='w-[100%] h-[35px]'>
                  <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm border' />
                </div>
              </div>

              <div className='my-2'>
                <label htmlFor="alst" className='text-[19px]'>Emial</label>
                <div className='w-[100%] h-[35px]'>
                  <input type="text" className='w-[100%] h-[100%] outline-none rounded-sm border' />
                </div>
              </div>

              <div className='mt-9 text-center bg-gradient-to-r from-pink-600 to-pink-300 rounded-2xl py-2'>
                <input type="submit" value={"Send massage"} className='text-[20px]' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Community