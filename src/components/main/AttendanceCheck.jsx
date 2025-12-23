import React from 'react'
import AttendanceDot from './AttendanceDot'

const attendance = [
  { day: '일', checked: true },
  { day: '월', checked: false },
  { day: '화', checked: false },
  { day: '수', checked: false },
  { day: '목', checked: true },
]

function AttendanceCheck({ day }) {
  return (
    <div className='relative flex flex-col justify-center w-198.5 h-84.75 rounded-[1.25rem] bg-[#F5F5F5] gap-10'>
      <div className='flex w-full justify-center'>
        <span className='flex items-center justify-center w-104 h-25 rounded-[1.25rem] bg-white text-[2.5rem] font-semibold p-2'>
          연속 {day}일째 출석이에요!
        </span>
      </div>
      <div className='absolute left-8 right-8 top-50 left-30 w-[35.49494rem] h-[1.34494rem] bg-[#D9D9D9]' />
      <div className='flex items-center justify-center gap-10'>
        {attendance.map((item) => (
          <AttendanceDot key={item.day} day={item.day} isChecked={item.checked} />
        ))}
      </div>
    </div>
  )
}

export default AttendanceCheck
