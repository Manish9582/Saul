import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Component/Footer'
import './App.css'
import Button from './Component/Button'
const App = () => {
  let storeLoc = useLocation();
  const [searchLoaction, setsearchLoaction] = useState()
  const segments = location.pathname.split('/')
 let IdStore=segments[2]

  useEffect(() => {
    setsearchLoaction(storeLoc.pathname)
  }, [storeLoc.pathname])

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className='select-none'>
        {searchLoaction == '/' || searchLoaction == '/profile' || searchLoaction == '/profile/message' || searchLoaction == '/profile/setting' || searchLoaction == '/profile/notification' || searchLoaction == '/profile/secuirty' || searchLoaction == '/profile/profile'  || searchLoaction == `/message/${IdStore}`? (
          <div className={`shadow-lg py-3 
            ${searchLoaction == '/' && searchLoaction == '/profile' && searchLoaction == '/profile/message' && searchLoaction == '/profile/setting' && searchLoaction == '/profile/notification' && searchLoaction == '/profile/secuirty' && searchLoaction == '/profile/profile' && searchLoaction ==searchLoaction == `/message/${IdStore}`              ?
              isScrolled ? 'text-black bg-white' : 'text-white bg-transparent' : 'text-black bg-white'} }
            ${searchLoaction == '/profile' || searchLoaction == '/profile/message' || searchLoaction == '/profile/setting' || searchLoaction == '/profile/notification' || searchLoaction == '/profile/secuirty' || searchLoaction == '/profile/profile' || searchLoaction == `/message/${IdStore}`? 'sticky' : 'fixed'} 
              right-0 left-0 top-0 z-20`}>
            <Header />
          </div>
        ) : (
          <div className='relative'>
            <div className={`shadow-lg py-3 fixed right-0 left-0 top-0 z-10 text-black bg-white`}>
              <Header />
            </div>
            <div className='relative bg-[url(https://c0.wallpaperflare.com/preview/41/401/219/beach-couple-dawn-girl.jpg)] bg-[rgba(0,0,0,0.5)] h-[70vh] bg-no-repeat w-[100%]  
                bg-cover'>
              <div className='bg-[rgba(0,0,0,0.6)] h-[100%]'>
                <div className='absolute top-[50%] left-[30%] transform translate-x-[-50%] translate-y-[-50%]'>
                  <p className='font-bold text-white'>
                    Find Your clarity
                  </p>
                  <p className='text-[45px] text-white'>
                    Take A Chance  <br />To Love and Be
                  </p>
                  <div className='my-3'>
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='bg-pink-50 h-[auto]'>
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App