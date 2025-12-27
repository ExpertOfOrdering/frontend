import React from 'react'
import ModalX from '@/assets/ModalX.svg'

function ModalHeader({ text, onClose }) {
  return (
    <div className='flex w-198.5 h-[6.88369rem] items-center justify-between bg-[#F49229] rounded-t-[0.62581rem] px-5'>
      <span className='text-[1.875rem] font-semibold'>{text}</span>
      <img
        onClick={() => {
          console.log('X 클릭됨')
          onClose()
        }}
        className='w-14 h-14 cursor-pointer'
        src={ModalX}
      />
    </div>
  )
}

export default ModalHeader
