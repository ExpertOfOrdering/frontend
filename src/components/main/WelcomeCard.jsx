import React from 'react'

function WelcomeCard({ name }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-198.5 h-69.5 bg-linear-to-b from-[#58AFFF] to-[#22C4FF] rounded-[1.25rem]'>
        <span className='text-white text-[3.4375rem] font-bold'>{name}님, 환영합니다!</span>
        <span className='text-white text-[2.1735rem] font-medium'>
          오늘도 함께 즐겁게 주문해봐요
        </span>
      </div>
    </div>
  )
}

export default WelcomeCard
