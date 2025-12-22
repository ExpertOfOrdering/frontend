import React from 'react'

function AuthTitle({ title }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-[#58AFFF] font-[SBAggro] text-[3.87994rem]'> 주문의 달인</span>
        <span className='font-bold text-[4.375rem]'>{title}</span>
      </div>
    </>
  )
}

export default AuthTitle
