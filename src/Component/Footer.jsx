import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='pt-8'>
        <div className='grid grid-cols-8 max-w-[1300px] mx-auto items-center pb-3'>
          <div className='col-start-1 col-span-3 px-10'>
            <p className='text-[40px]'>
              Are You For In The Gossipe ?
            </p>
            <div className='flex items-center my-4'>
              <div className='font-bold font-mono '>
                <p>First And</p>
                <p>Last Date</p>
              </div>
              <div className='h-[20px] w-[20px]'>
                <img src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png" alt=""
                  className='rotate-90 h-[100%] w-[100%] ' />
              </div>
            </div>
            <p className='text-[13px] text-gray-500 font-light'>
              This site is for individuals who live alone and are looking for meaningful ways to spend their time.
              A space for solo souls to connect, unwind, and make the most of their alone time          </p>
          </div>
          <div className='col-start-4 col-span-9 px-10'>
            <div>
              <form action="">
                <div className=' w-[100%] flex border-b-2 border-rose-800 py-2 px-3'>
                  <input type="text" className='w-[100%] outline-none' placeholder='Enter Your email' />
                  <input type="submit" value="Login" className='bg-rose-600 text-white px-3 py-1 rounded-md' />
                </div>
              </form>
            </div>
            <div className='flex justify-between mt-3'>
              <div>
                <strong>Community</strong>
                <div>Guidelines</div>
                <div>Success Stories</div>
                <div>The Blog</div>
              </div>

              <div>
                <strong>Contact</strong>
                <div>Support</div>
                <div>Secuirty</div>
                <div>Safty Tips</div>
              </div>

              <div>
                <strong>Legal & Privacy </strong>
                <div>Terms & Service</div>
                <div>Privacy Policy</div>
                <div>Cookies Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3 text-center py-2 bg-black text-white'>
          © 2025 Manish. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer