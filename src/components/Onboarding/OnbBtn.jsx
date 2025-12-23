import React from 'react'

function OnbBtn({ text, disabled, onClick }) {
  return (
    <button
      className='w-42.75 h-[6.99644rem] p-[0.55088rem;] text-white text-[3.30544rem] font-extrabold bg-[#B7B7B7] rounded-[1.10181rem] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default OnbBtn
