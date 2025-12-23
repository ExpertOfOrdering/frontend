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
    <>
      <div>
        <span>연속 {day}일째 출석이에요!</span>
      </div>

      <div className=''>
        {attendance.map((item) => (
          <AttendanceDot key={item.day} day={item.day} isChecked={item.checked} />
        ))}
      </div>
    </>
  )
}

export default AttendanceCheck
