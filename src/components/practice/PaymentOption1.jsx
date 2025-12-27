import React from 'react'

function PaymentOption1({ img, text, desc }) {
  return (
    <div className='flex gap-5 w-82 h-46 rounded-[0.625rem] justify-center items-center bg-white'>
      <img className='w-27.75 h-27.75' src={img} />
      <div className='flex flex-col items-center justify-center'>
        <span className='text-[2.1875rem] font-medium'>{text}</span>
        <span className='text-[1.25rem] font-normal text-[#626262]'>{desc}</span>
      </div>
    </div>
  )
}

export default PaymentOption1
