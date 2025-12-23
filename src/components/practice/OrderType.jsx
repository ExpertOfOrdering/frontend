import React from 'react'
import Header from './practiceHeader'
import Footer from './PracticeBottom'
import Takeout from '@/assets/Takeout.svg'
import Hall from '@/assets/Hall.svg'
import { useState, useEffect } from 'react'
import MissionOverlay from './MissionOverlay'

function OrderType() {
  const [showMission, setShowMission] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMission(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className='h-screen w-full flex justify-center items-start overflow-hidden'>
        <div className='relative w-full max-w-208.5 flex flex-col'>
          {showMission && <MissionOverlay mission='캐모마일 차갑게 주문' />}
          <div className='flex-1 bg-[#F49229]'>
            <Header misson='캐모마일' />
            <div className='flex justify-center items-center gap-10 p-18.5'>
              <div className='flex flex-col items-center justify-center w-88.25 h-141.75 bg-white rounded-[1.75rem] cursor-pointer gap-10'>
                <img className='h-50' src={Takeout} />
                <span className='text-[3rem] font-medium'>포장주문</span>
              </div>
              <div className='flex flex-col items-center justify-center w-88.25 h-141.75 bg-white rounded-[1.75rem] cursor-pointer gap-10'>
                <img className='h-50' src={Hall} />
                <span className='text-[3rem] font-medium'>매장주문</span>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderType
