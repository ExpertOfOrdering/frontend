import React from 'react'

function MenuOption({ img, name, onClick, selected, selectedImg }) {
  return (
    <div
      className={`flex flex-col w-[9.90075rem] h-[9.26881rem] items-center justify-center gap-3 rounded-[0.52663rem] cursor-pointer ${selected ? 'bg-[#E97800] text-white' : 'bg-white text-black'}
      `}
      onClick={onClick}
    >
      <img className='w-16.5 h-16.5' src={selected ? selectedImg : img} />
      <span className='text-[1.57994rem] font-semibold'>{name}</span>
    </div>
  )
}

export default MenuOption
