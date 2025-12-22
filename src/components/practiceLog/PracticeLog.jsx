import Button from '../shared/Button'
import MonthButton from './MonthButton'
import Data from './Data'

const PracticeLog = () => {
  return (
    <div className='bg-white w-full flex flex-col gap-13 max-w-full rounded-[1.25rem] px-12 py-10'>
      <div className='flex justify-between items-center'>
        <Button label='이전' />
        <MonthButton month='10월' />
        <Button label='다음' />
      </div>
      <div className='flex flex-col gap-y-15'>
        <Data label='이번달 연습 횟수' data='12회' />
        <Data label='평균 주문 성공률' data='85%' />
        <Data label='평균 주문 소요시간' data='약 2분 30초' />
        <Data label='추천 적정 난이도' data='초보' />
      </div>
    </div>
  )
}

export default PracticeLog
