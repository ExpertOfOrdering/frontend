import React from 'react'

function CheckCard({ img, title, bgColor, textColor }) {
  return (
    <div>
      <div
        className={`flex flex-col w-89.75 h-[17.8175rem] items-center justify-center rounded-[1.5625rem] text-[3.125rem] font-semibold ${bgColor} ${textColor}`}
      >
        <img src={img} alt='' className='' />
        <span className=''>{title}</span>
      </div>
    </div>
  )
}

export default CheckCard
