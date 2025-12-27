import React from 'react'
import OrderResult from '@/assets/OrderResult.png'
import ViewIncorrect from './ViewIncorrect'
import { useNavigate } from 'react-router-dom'
import { useOrderStore } from '@/store/orderStore'
import { useState } from 'react'

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

  const hasMistake = accuracy < 100

  return (
    <div className='absolute top-0 left-0 w-full h-full z-999 flex items-center justify-center bg-[rgba(8,8,8,0.84)]'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex pb-[3.31rem]'>
          <img src={OrderResult} />
        </div>
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
              useOrderStore.getState().reset()
              navigate('/main')
            }}
          >
            초기화면으로
          </button>
        </div>
        {showIncorrect && <ViewIncorrect onClose={() => setShowIncorrect(false)} />}
      </div>
    </div>
  )
}

export default Result
