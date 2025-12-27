import Footer from '@/components/shared/Footer'
import PracticeLog from '@/components/practiceLog/PracticeLog'
import { useState, useEffect } from 'react'
import PracticeLogBubble from '@/assets/PracticeLogBubble.svg?react'

const PracticeLogPage = () => {
  const userName = localStorage.getItem('name')
  const [userData, setUserData] = useState(false)
  const mentList = [
    `${userName}님, 잘하고 있어요!`,
    `${userName}님, 대단해요!`,
    `${userName}님, 훌륭해요!`,
    `${userName}님, 계속 이렇게 가요!`,
  ]
  const [ment, setMent] = useState(`${userName}님, 함께 연습해봐요!`)

  useEffect(() => {
    if (!userData) {
      setMent(`${userName}님, 함께 연습해봐요!`)
      return
    }
    const idx = Math.floor(Math.random() * mentList.length)
    setMent(mentList[idx])
  }, [userData])

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center w-full max-w-208.5 min-h-screen bg-[linear-gradient(180deg,#A6D4FF_0%,#B4F6FD_34.12%,#D7FBFF_85.05%)]'>
        <div className='flex items-center mt-20'>
          <div className='px-12 py-12 bg-white/75 rounded-4xl -mr-[0.05rem]'>
            <p className='font-semibold text-[3.4375rem] text-center'>{ment}</p>
          </div>
          <PracticeLogBubble />
        </div>
        <div className='px-5 w-full flex flex-col mt-13'>
          <div className='w-full'>
            <PracticeLog isUserData={setUserData} />
          </div>
        </div>
        <Footer selectedMenu='practiceLog' />
      </div>
    </div>
  )
}

export default PracticeLogPage
