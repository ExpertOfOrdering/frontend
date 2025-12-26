import React from 'react'

function PaymentOption2({ img, text }) {
  return (
    <div className='relative flex flex-col w-58 h-46.25 rounded-[0.625rem] items-center bg-white'>
      <img className='absoulte pt-2 w-34 h-34' src={img} />
      <span className='absolute text-[2.1875rem] font-medium pt-26'>{text}</span>
    </div>
  )
}

export default PaymentOption2
