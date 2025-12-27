import React from 'react'
import Minus from '@/assets/Minus.png'
import Plus from '@/assets/Plus.png'
import DelMenu from '@/assets/DelMenu.png'
import { useOrderStore } from '@/store/orderStore'

function OrderItem({ index, name, quantity, price }) {
  const { removeOrder, updateOrderQuantity } = useOrderStore()
  return (
    <div className='flex text-[1.375rem] items-center w-120.5 h-12'>
      <div className='flex items-center gap-2 cursor-pointer w-67 pl-2'>
        <img
          className='w-[1.19169rem] h-[1.19169rem]'
          src={DelMenu}
          onClick={() => removeOrder(index)}
        />
        <span className='font-medium'>{name}</span>
      </div>
      <div className='flex justify-center items-center gap-2 w-26'>
        <img
          className='w-[1.19169rem] h-[1.19169rem] cursor-pointer'
          onClick={() => updateOrderQuantity(index, -1)}
          src={Minus}
        />
        <span className='text-[#F49229] font-bold'>{quantity}개</span>
        <img
          className='w-[1.19169rem] h-[1.19169rem] cursor-pointer'
          onClick={() => updateOrderQuantity(index, 1)}
          src={Plus}
        />
      </div>
      <div className='flex items-center w-23 justify-end'>
        <span className='text-[#B01414] font-medium'>{quantity * price}원</span>
      </div>
    </div>
  )
}

export default OrderItem
