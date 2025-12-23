import React from 'react'

function AuthButton({ text, onClick, disabled }) {
  return (
    <>
      <button
        className='w-109.5 h-31.75 p-2.5 text-center text-white bg-[#58AFFF] rounded-[1.25rem] text-[3.75rem] font-extrabold cursor-pointer hover:opacity-85'
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  )
}

export default AuthButton
