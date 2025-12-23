import React from 'react'
import Star from '@/assets/Star.svg'

function MissionOverlay({ mission }) {
  return (
    <div className='absolute h-screen max-w-208.5 w-full overflow-hidden inset-0 z-50 flex items-center justify-center bg-[rgba(8,8,8,0.84)]'>
      <div className='flex flex-col items-center justify-center w-198.5 h-77.5 bg-white rounded-[1.5625rem] gap-5'>
        <span className='flex text-[2.8125rem] font-semibold text-[#707070]'>
          <img src={Star} />
          도전 과제
          <img src={Star} />
        </span>
        <span className='flex items-center justify-center w-3xl h-41.75 text-[2.8125rem] font-semibold text-[#3474D3] bg-[#F2F2F2] rounded-[1.5625rem]'>
          {mission}
        </span>
      </div>
    </div>
  )
}

export default MissionOverlay
