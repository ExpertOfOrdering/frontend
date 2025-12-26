import React from 'react'
import OrderResult from '@/assets/OrderResult.png'
import ViewIncorrect from './ViewIncorrect'

function Result() {
  return (
    <div className='absolute h-screen max-w-208.5 w-full overflow-hidden inset-0 z-50 flex items-center justify-center bg-[rgba(8,8,8,0.84)]'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex pb-[3.31rem]'>
          <img src={OrderResult} />
        </div>
        <div className='flex flex-col w-150.5 h-58 rounded-[0.625rem] bg-white justify-center items-center'>
          <span className='flex font-semibold text-[2.8125rem] gap-[1.88rem]'>
            소요시간<span className='font-semibold text-[2.8125rem] text-[#909090]'>02:12</span>
          </span>
          <span className='flex font-semibold text-[2.8125rem] gap-[1.88rem]'>
            주문 정확도<span className='font-semibold text-[2.8125rem] text-[#3474D3]'>100%</span>
          </span>
        </div>
        <div className='flex gap-7 font-semibold text-[2.1875rem] py-5'>
          <button className='w-71.75 h-20.5 rounded-[0.625rem] bg-[#CCC]'>오답보기</button>
          <button className='w-71.75 h-20.5 text-[2.1875rem] rounded-[0.625rem] bg-[#CCC]'>
            초기화면으로
          </button>
        </div>
        <div>{/* <ViewIncorrect /> */}</div>
      </div>
    </div>
  )
}

export default Result
