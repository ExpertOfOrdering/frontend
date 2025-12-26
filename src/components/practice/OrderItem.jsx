import React from 'react'
import Minus from '@/assets/Minus.png'
import Plus from '@/assets/Plus.png'
import DelMenu from '@/assets/DelMenu.png'

function OrderItem() {
  return (
    <div className='flex text-[1.375rem] justify-between items-center w-120.5 h-12 px-2'>
      <div className='flex items-center gap-2'>
        <img className='w-[1.19169rem] h-[1.19169rem]' src={DelMenu} />
        <span className=' font-medium'>캐모마일</span>
      </div>
      <div className='flex items-center gap-2'>
        <img className='w-[1.19169rem] h-[1.19169rem]' src={Minus} />
        <span className='text-[#F49229] font-bold'>1개</span>
        <img className='w-[1.19169rem] h-[1.19169rem]' src={Plus} />
      </div>
      <div className='flex items-center'>
        <span className='text-[#B01414] font-medium'>3000원</span>
      </div>
    </div>
  )
}

export default OrderItem
