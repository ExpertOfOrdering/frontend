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
import ChatModal from '../aiChat/ChatModal'

function OrderType() {
  useInactivityTimer()

  const [showMission, setShowMission] = useState(true)
  const [open, setOpen] = useState(false)

  const { mission, setMission, setOrderType, startPracticeTimer, setPracticeStep, level } =
    useOrderStore()
  const numericLevel = Number(level)

  const levelTextMap = {
    1: '초보',
    2: '중수',
    3: '달인',
  }
  const levelKey = levelTextMap[numericLevel]

  const navigate = useNavigate()

  useEffect(() => {
    setPracticeStep(1)
    startPracticeTimer()
    if (!mission && missionData[levelKey]) {
      const options = missionData[levelKey]
      const pick = options[Math.floor(Math.random() * options.length)]
      setMission(pick)
    }

    const timer = setTimeout(() => setShowMission(false), 5000)
    return () => clearTimeout(timer)
  }, [numericLevel])

  const handleOrderSelect = (type) => {
    setOrderType(type)
    console.log('저장됨:', type)
    navigate('/order')
  }
  return (
    <>
      <div className='min-h-screen w-full flex justify-center'>
        <div className='relative w-full max-w-208.5 flex flex-col min-h-screen'>
          {showMission && mission && <MissionOverlay mission={mission} />}

          <div className='flex-1 bg-[#F49229] flex-col items-center '>
            <Header />
            <div className='flex justify-center items-center gap-10 py-27'>
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
      <AiButtonFixed
        onClick={() => {
          setOpen(true)
          console.log(open)
        }}
      />
      <ChatModal step={1} open={open} closeModal={() => setOpen(false)} />
    </>
  )
}

export default OrderType
