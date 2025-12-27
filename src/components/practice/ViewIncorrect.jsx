import React from 'react'
import X from '@/assets/ResultX.svg'
import { useOrderStore } from '@/store/orderStore'

function ViewIncorrect({ onClose }) {
  const { mission, orders, orderType } = useOrderStore()
  const order = orders[0]

  return (
    <>
      <div className='flex flex-col justify-center w-196.5 h-85 rounded-[0.625rem] bg-white'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center w-187.25 border-b-2'>
            <span className='flex justify-center font-semibold text-[2.8125rem] pl-74 pr-60 py-3'>
              오답보기
            </span>
            <button className='cursor-pointer' onClick={onClose}>
              <img className='w-14 h-14' src={X} />
            </button>
          </div>
        </div>
        <div className='flex flex-col text-[2.5rem] font-semibold gap-8 px-8 py-8'>
          <div className='flex items-center gap-5'>
            <span className='px-6 py-2 bg-[#E9E9E9] rounded-[0.625rem]'>미션</span>
            <span>{mission}</span>
          </div>
          <div className='flex items-center gap-5'>
            <span className='px-6 py-2 bg-[#F7CCCC] rounded-[0.625rem]'>결과</span>
            <span>
              {order.hotIce} [{order.name}] {order.quantity}개{' '}
              {orderType === 'takeout' ? '포장주문' : '매장주문'}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewIncorrect
