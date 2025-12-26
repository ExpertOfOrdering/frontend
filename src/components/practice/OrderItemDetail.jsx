import React from 'react'

function OrderItemDetail() {
  return (
    <div>
      <div className='flex justify-content py-4'>
        <div className='flex gap-5 pr-50 items-center'>
          <div className='flex px-3.5 text-[1.70769rem] font-bold text-white bg-[rgb(244,146,41)] text-center rounded-[100rem]'>
            1
          </div>
          <span className='font-medium text-[2.01813rem]'>캐모마일</span>
          <span className='text-[#8C8C8C] font-medium text-[2.01813rem]'>· HOT · 기본</span>
        </div>
        <div className='flex gap-10 '>
          <span className='text-[#F49229] font-bold text-[2rem]'>1개</span>
          <span className='text-[#B01414] font-medium text-[2.01813rem]'>3000원</span>
        </div>
      </div>
    </div>
  )
}

export default OrderItemDetail
