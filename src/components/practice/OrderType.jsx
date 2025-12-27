import React from 'react'
import Header from './practiceHeader'
import Footer from './PracticeBottom'
import Takeout from '@/assets/Takeout.svg'
import Hall from '@/assets/Hall.svg'
import AiButtonFixed from './AiButtonFixed'
import { missionData } from './missionData'
import { useState, useEffect } from 'react'
import MissionOverlay from './MissionOverlay'
import { useOrderStore } from '@/store/orderStore'
import { useNavigate } from 'react-router-dom'
import { useInactivityTimer } from './useInactivityTimer'

function OrderType({ level = '초보' }) {
  useInactivityTimer()

  const [showMission, setShowMission] = useState(true)

  const { mission, setMission, setOrderType, startPracticeTimer, setPracticeStep, showAiButton } =
    useOrderStore()

  const navigate = useNavigate()

  useEffect(() => {
    setPracticeStep(1)
    startPracticeTimer()
    if (!mission) {
      const pick = missionData[level][Math.floor(Math.random() * missionData[level].length)]
      setMission(pick)
    }

    const timer = setTimeout(() => setShowMission(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleOrderSelect = (type) => {
    setOrderType(type)
    console.log('저장됨:', type)
    navigate('/order')
  }
  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-start overflow-hidden'>
        <div className='relative w-full max-w-208.5 flex flex-col min-h-screen'>
          {showMission && mission && <MissionOverlay mission={mission} />}

          <div className='flex-1 bg-[#F49229] flex-col'>
            <Header />
            <div className='flex justify-center items-center gap-10 p-18.5'>
              <div
                onClick={() => handleOrderSelect('takeout')}
                className='flex flex-col items-center justify-center w-88.25 h-141.75 bg-white rounded-[1.75rem] cursor-pointer gap-10'
              >
                <img className='h-50' src={Takeout} />
                <span className='text-[3rem] font-medium'>포장주문</span>
              </div>
              <div
                onClick={() => handleOrderSelect('hall')}
                className='flex flex-col items-center justify-center w-88.25 h-141.75 bg-white rounded-[1.75rem] cursor-pointer gap-10'
              >
                <img className='h-50' src={Hall} />
                <span className='text-[3rem] font-medium'>매장주문</span>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {showAiButton && (
        <AiButtonFixed
          onClick={(step) => {
            console.log('현재 STEP:', step)
          }}
        />
      )}
    </>
  )
}

export default OrderType
