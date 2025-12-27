import React from 'react'

function LevelCard({ label, bgColor, textColor, isSelected, onClick, isRecommended }) {
  return (
    <div className='relative w-fit'>
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

        ${isSelected ? 'opacity-100' : 'opacity-100'}`}
      >
        {label}
      </button>
      {isRecommended && (
        <span className='absolute -right-8 -top-3 bg-red-500 text-white text-[2rem] px-4 py-1 rounded-full font-bold'>
          추천
        </span>
      )}
    </div>
  )
}

export default LevelCard
