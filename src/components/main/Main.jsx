import React from 'react'
import WelcomeCard from './WelcomeCard'
import AttendanceCheck from './AttendanceCheck'
import StartBtn from './StartBtn'
import Footer from '@/components/shared/Footer'

function Main() {
  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-208.5 h-screen flex flex-col'>
        <div className='flex-1 px-6 pt-6 flex flex-col gap-10'>
          <WelcomeCard name='정순자' />
          <AttendanceCheck day={1} />
          <StartBtn />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
