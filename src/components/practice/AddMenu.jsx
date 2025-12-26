import React from 'react'
import Minus from '@/assets/Minus.png'
import Plus from '@/assets/Plus.png'

function AddMenu({ menuImg, menuName, menuPrice }) {
  return (
    <div className='flex items-center w-198.5 h-36.25'>
      <div className='flex'>
        <img className='w-32.5 h-32.5' src={menuImg} />
      </div>
      <div className='flex flex-col'>
        <span className='font-medium text-[2.01813rem]'>{menuName}</span>
        <span className='font-medium text-[2.01813rem] text-[#B01414]'>{menuPrice}</span>
      </div>
      <div className='flex gap-6 items-center pl-90'>
        <img className='w-11.25 h-11.25' src={Minus} />
        <span className='font-bold text-[1.875rem] text-[#F49229]'>1개</span>
        <img className='w-11.25 h-11.25' src={Plus} />
      </div>
    </div>
  )
}

export default AddMenu
