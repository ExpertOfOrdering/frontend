import React from 'react'
import Minus from '@/assets/Minus.png'
import Plus from '@/assets/Plus.png'
import { useOrderStore } from '@/store/orderStore'

function AddMenu({ menuImg, menuName, menuPrice }) {
  const { quantity, increaseQty, decreaseQty } = useOrderStore()

  return (
    <div className='flex items-center w-198.5 h-36.25 bg-white'>
      <div className='flex w-32.5 h-32.5'>
        <img className='w-32.5 h-32.5' src={menuImg} />
      </div>
      <div className='flex flex-col'>
        <span className='font-medium text-[2.01813rem] w-80'>{menuName}</span>
        <span className='font-medium text-[2.01813rem] text-[#B01414]'>{menuPrice}원</span>
      </div>
      <div className='flex gap-6 justify-end w-80 items-center'>
        <img onClick={decreaseQty} className='w-11.25 h-11.25 cursor-pointer' src={Minus} />
        <span className='font-bold text-[1.875rem] text-[#F49229] w-17 text-center'>
          {quantity}개
        </span>
        <img onClick={increaseQty} className='w-11.25 h-11.25 cursor-pointer' src={Plus} />
      </div>
    </div>
  )
}

export default AddMenu
