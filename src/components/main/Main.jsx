import React from 'react'
import WelcomeCard from './WelcomeCard'
import AttendanceCheck from './AttendanceCheck'
import StartBtn from './StartBtn'
import Footer from '@/components/shared/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { saveTodayAttendance } from './attendance'

function Main() {
  const [name, setName] = useState(localStorage.getItem('name') || '')

  useEffect(() => {
    saveTodayAttendance()
    const userId = localStorage.getItem('userId')
    const storedName = localStorage.getItem('name')

    if (storedName) {
      setName(storedName)
      return
    }

    if (userId) {
      axios
        .get(`https://expertofordering.duckdns.org/api/users/${userId}`)
        .then((res) => {
          if (res.data?.name) {
            setName(res.data.name)
            localStorage.setItem('name', res.data.name)
          }
        })
        .catch((err) => {
          console.error('사용자 이름 조회 실패:', err)
        })
    }
  }, [])

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-208.5 h-screen flex flex-col'>
        <div className='flex-1 px-6 pt-6 flex flex-col gap-10'>
          <WelcomeCard name={name} />
          <AttendanceCheck day={1} />
          <StartBtn />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
