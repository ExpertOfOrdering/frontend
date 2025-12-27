import React from 'react'
import BackImg from '@/assets/Back.svg'

function BackBtn({ onClick }) {
  return (
    <div className='flex flex-col justify-center items-center w-47.25 h-42.25 bg-[#9F9F9F] rounded-[0.6995rem] cursor-pointer'>
      <img className='w-16.25 h-16.25' onClick={onClick} src={BackImg} />
      <span className='text-[1.875rem] font-white font-semibold text-white'>돌아가기</span>
    </div>
  )
}

export default BackBtn
