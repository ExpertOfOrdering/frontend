import React from 'react'

function OnbBtn({ text, disabled, onClick }) {
  return (
    <div className='flex w-full justify-end py-[5.06rem]'>
      <button
        className='w-42.75 h-[6.99644rem] p-[0.55088rem;] text-white text-[3.30544rem] font-extrabold bg-[#B7B7B7] rounded-[1.10181rem] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mr-6'
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default OnbBtn
