import React from 'react'
import AttendanceDot from './AttendanceDot'
import { getStreak } from './attendance'

function AttendanceCheck({ day = 0 }) {
  const today = new Date()
  const streak = getStreak()
  const saved = JSON.parse(localStorage.getItem('attendanceDates') || '[]')

  const recentFiveDays = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - (4 - i))
    return date
  })

  const attendance = recentFiveDays.map((date) => {
    const dateStr = date.toISOString().split('T')[0]
    const week = ['일', '월', '화', '수', '목', '금', '토']
    return {
      label: `${week[date.getDay()]}요일`,
      checked: saved.includes(dateStr),
    }
  })

  return (
    <div className='relative flex flex-col justify-center w-198.5 h-84.75 rounded-[1.25rem] bg-[#F5F5F5] gap-10'>
      <div className='flex w-full justify-center'>
        <span className='flex items-center justify-center w-104 h-25 rounded-[1.25rem] bg-white text-[2.5rem] font-semibold p-2'>
          연속 {streak}일째 출석이에요!
        </span>
      </div>
      <div className='absolute right-8 top-50 left-30 w-[35.49494rem] h-[1.34494rem] bg-[#D9D9D9]' />
      <div className='flex items-center justify-center gap-10'>
        {attendance.map((item, i) => (
          <AttendanceDot key={i} day={item.label} isChecked={item.checked} />
        ))}
      </div>
    </div>
  )
}

export default AttendanceCheck
