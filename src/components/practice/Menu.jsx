import React from 'react'

function Menu({ img, name, price, onClick }) {
  return (
    <div
      className='flex flex-col w-47 h-60.75 bg-white justify-center items-center rounded-[0.625rem] cursor-pointer'
      onClick={() => onClick && onClick({ img, name, price })}
    >
      <img className='w-40 h-40' src={img} />
      <span className='text-[1.625rem] font-medium'>{name}</span>
      <span className='text-[1.625rem] font-medium text-[#B01414]'>{price}</span>
    </div>
  )
}

export default Menu
