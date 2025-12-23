import React from 'react'

function Answer({ option, onSelect, isSelected }) {
  return (
    <>
      <button
        className={`
        ${option.color}
        ${option.bgColor}
        ${isSelected ? 'opacity-100' : 'opacity-60'} flex text-left items-center w-196.5 h-35
      px-15 py-10 rounded-[0.9375rem] text-[3.125rem] font-semibold cursor-pointer`}
        onClick={onSelect}
      >
        {option.label}
      </button>
    </>
  )
}

export default Answer
