import React from 'react'

function MenuOption({ img, name }) {
  return (
    <div className='flex flex-col w-[9.90075rem] h-[9.26881rem] items-center justify-center gap-3 bg-white rounded-[0.52663rem]'>
      <img className='w-16.5 h-16.5' src={img} />
      <span className='text-[1.57994rem] font-semibold'>{name}</span>
    </div>
  )
}

export default MenuOption
