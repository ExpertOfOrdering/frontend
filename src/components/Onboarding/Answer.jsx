import React from 'react'

function Answer({ option, onSelect, isSelected }) {
  return (
    <>
      <button
        className={`
        ${option.color}
        ${isSelected ? 'border-4 border-black' : 'border-2 border-transparent'}
      `}
        onClick={onSelect}
      >
        {option.label}
      </button>
    </>
  )
}

export default Answer
