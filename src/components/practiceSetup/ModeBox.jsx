import React from 'react'

function ModeBox({ img, name, bgColor, textColor, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col w-89.75 h-[17.8175rem] items-center justify-center rounded-[1.5625rem] text-[3.125rem] font-semibold hover:scale-[1.03] cursor-pointer
        ${bgColor}
        ${textColor}
        ${isSelected ? 'ring-4 ring-blue-500' : 'ring-0'}
      `}
    >
      <img className='w-35 h-35' src={img} alt='Mode Icon' />
      <span>{name}</span>
    </button>
  )
}

export default ModeBox
