import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrderStore } from '@/store/orderStore'

function PracticeHeader() {
  const { mission, isFinished } = useOrderStore()
  const navigate = useNavigate()

  if (isFinished) return null

  return (
    <div className='flex flex-col items-center z-9999'>
      <div
        className='
          relative
          z-80
          w-full max-w-208.5 h-48.25
          bg-white
          rounded-b-[1.5625rem]
          shadow-[0_0_17.6px_0_rgba(0,0,0,0.25)]
          flex items-start justify-center pt-5
        '
      >
        <span className='text-[2.8125rem] font-semibold'>연습 중</span>

        <button
          className='
          z-80
            absolute right-6
            text-[2.1875rem] font-semibold
            text-white bg-[#CE574C]
            px-4 py-2 rounded-[0.625rem] cursor-pointer
          '
          onClick={() => navigate('/main')}
        >
          종료
        </button>
      </div>

      <div
        className='
        z-80
          w-full max-w-204 h-20.75
          bg-[#F2F2F2]
          flex items-center justify-center
          rounded-b-[1.5625rem]
          -mt-[5.8rem]
        '
      >
        <span className='text-[2.1875rem] font-bold text-[#3474D3]'>{mission}</span>
      </div>
    </div>
  )
}

export default PracticeHeader
