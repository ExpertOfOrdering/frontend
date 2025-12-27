import React from 'react'
import OrderResult from '@/assets/OrderResult.png'
import ViewIncorrect from './ViewIncorrect'
import { useNavigate } from 'react-router-dom'
import { useOrderStore } from '@/store/orderStore'
import { useState, useEffect } from 'react'
import resultSound from '@/audio/success.mp3'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

function Result() {
  const [showIncorrect, setShowIncorrect] = useState(false)
  const { practiceTime } = useOrderStore()
  const { accuracy } = useOrderStore()

  const navigate = useNavigate()

  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000)
    const min = Math.floor(sec / 60)
    return `${min}분 ${sec % 60}초`
  }

  useEffect(() => {
    const sound = new Audio(resultSound)
    sound.play().catch((err) => console.log('오디오 재생 실패:', err))
  }, [])

  const savePracticeLog = async () => {
    const userId = localStorage.getItem('userId')
    const month = new Date().getMonth() + 1
    const durationSec = Math.floor(practiceTime / 1000)

    try {
      await axios.post(`${baseURL}/api/practice-logs`, {
        userId: Number(userId),
        month,
        durationSec,
        accuracy,
      })
      console.log('연습 기록 저장 완료!')
    } catch (error) {
      console.error('연습 저장 실패:', error)
    }
  }

  const hasMistake = accuracy < 100

  return (
    <div className='absolute w-208.5 h-full z-999 flex items-center justify-center bg-[rgba(8,8,8,0.84)]'>
      <div className=''>
        <div className='flex pb-[3.31rem] justify-center'>
          <img src={OrderResult} />
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col w-150.5 h-58 rounded-[0.625rem] bg-white justify-center items-center'>
            <span className='flex font-semibold text-[2.8125rem] gap-[1.88rem]'>
              소요시간
              <span className='font-semibold text-[2.8125rem] text-[#909090]'>
                {practiceTime ? formatTime(practiceTime) : ''}
              </span>
            </span>
            <span className='flex font-semibold text-[2.8125rem] gap-[1.88rem]'>
              주문 정확도
              <span className='font-semibold text-[2.8125rem] text-[#3474D3]'>{accuracy}%</span>
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex gap-7 font-semibold text-[2.1875rem] py-5'>
            <button
              disabled={!hasMistake}
              onClick={() => hasMistake && setShowIncorrect(true)}
              className={`w-71.75 h-20.5 rounded-[0.625rem]
             ${hasMistake ? 'bg-[#CCCCCC] cursor-pointer' : 'bg-[#CCCCCC] text-[949494] cursor-not-allowed'}
           `}
            >
              오답보기
            </button>
            <button
              className='w-71.75 h-20.5 text-[2.1875rem] rounded-[0.625rem] bg-[#CCC] cursor-pointer'
              onClick={() => {
                savePracticeLog()
                useOrderStore.getState().reset()
                navigate('/main')
              }}
            >
              초기화면으로
            </button>
          </div>
        </div>
        {showIncorrect && <ViewIncorrect onClose={() => setShowIncorrect(false)} />}
      </div>
    </div>
  )
}

export default Result
