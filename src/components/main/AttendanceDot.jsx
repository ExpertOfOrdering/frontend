import React from 'react'
import CheckImg from '@/assets/Check.svg'
import XImg from '@/assets/XImg.svg'

function AttendanceDot({ day, isChecked }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img
        src={isChecked ? CheckImg : XImg}
        alt={isChecked ? '출석' : '미출석'}
        className='w-27.5 h-27.5'
      />
      <span className='text-[#717171] text-[2.03356rem] font-medium'>{day}</span>
    </div>
  )
}

export default AttendanceDot
