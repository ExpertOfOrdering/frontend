import React from 'react'

function StepItem({ icon, label }) {
  return (
    <div
      className={`
        flex flex-col items-center text-xs
      `}
    >
      <img src={icon} />
      <span className='text-white text-[1.95581rem] font-bold mt-1 '>{label}</span>
    </div>
  )
}

export default StepItem
