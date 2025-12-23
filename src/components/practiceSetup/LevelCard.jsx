import React from 'react'

function LevelCard({ label, bgColor, textColor, isSelected, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`
        w-130.25 h-38.75
        rounded-[1.25rem]
        text-[3.75rem] font-semibold
        cursor-pointer
        hover:scale-[1.03]
        ${bgColor}
        ${textColor}

        ${isSelected ? 'opacity-100' : 'opacity-60'}`}
      >
        {label}
      </button>
    </div>
  )
}

export default LevelCard
