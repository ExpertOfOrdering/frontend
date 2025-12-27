import React from 'react'

function OrderItemDetail({ item, index }) {
  return (
    <div>
      <div className='flex py-4 gap-4'>
        <div className='flex w-130 items-center gap-3'>
          <div className='flex px-3.5 text-[1.70769rem] font-bold text-white bg-[rgb(244,146,41)] rounded-[100rem]'>
            {index + 1}
          </div>
          <span className='font-medium text-[2.01813rem]'>{item.name}</span>
          <span className='text-[#8C8C8C] font-medium text-[2.01813rem]'>
            · {item.hotIce} · {item.taste}
          </span>
        </div>
        <div className='flex items-center'>
          <span className='text-[#F49229] font-bold text-[2rem] w-15 text-right'>
            {item.quantity}개
          </span>
          <span className='text-[#B01414] font-medium text-[2.01813rem] text-right w-40'>
            {item.quantity * item.price}원
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderItemDetail
