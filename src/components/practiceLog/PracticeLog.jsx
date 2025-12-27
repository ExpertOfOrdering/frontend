import Button from '../shared/Button'
import MonthButton from './MonthButton'
import Data from './Data'
import { useEffect, useState } from 'react'
import { getUserLog } from '@/apis/practiceLog'

const PracticeLog = ({ isUserData }) => {
  const [month, setMonth] = useState(12)
  const [userData, setUserData] = useState(null)

  const prev = () => setMonth((m) => (m === 1 ? 12 : m - 1))
  const next = () => setMonth((m) => (m === 12 ? 1 : m + 1))

  useEffect(() => {
    const fetch = async () => {
      try {
        isUserData?.(null)

        const data = await getUserLog(month)
        setUserData(data)
        const hasLog = Number(data?.practiceCount ?? 0) > 0
        isUserData?.(hasLog)
      } catch (e) {
        console.error(e)
        setUserData(null)
        isUserData?.(false)
      }
    }
    fetch()
  }, [month, isUserData])

  return (
    <div className='bg-white w-full flex flex-col gap-13 max-w-full rounded-[1.25rem] px-12 py-10 h-169.75'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start'>
          {month != 1 && <Button label='이전' onClick={prev} />}
        </div>
        <div className='absolute left-[42%]'>
          <MonthButton month={`${month}월`} />
        </div>
        <div className='flex justify-end'>
          {month != 12 && <Button label='다음' onClick={next} />}
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        {userData?.practiceCount && userData.practiceCount !== '0회' ? (
          <div className='flex w-full flex-col gap-y-15'>
            <Data label='이번달 연습 횟수' data={`${userData.practiceCount}`} />
            <Data label='평균 주문 성공률' data={`${userData.avgSuccessRate}`} />
            <Data label='평균 주문 소요시간' data={`${userData.avgDuration}`} />
            <Data label='추천 적정 난이도' data={`${userData.recommendDifficulty}`} />
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <p className='text-[#B7B7B7] text-[2.5rem] font-normal text-center'>
              아직 연습 기록이 없어요
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PracticeLog
