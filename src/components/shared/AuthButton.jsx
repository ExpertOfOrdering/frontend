import React from 'react'

function AuthButton({ text, onClick }) {
  return (
    <>
      <button
        className='w-109.5 h-31.75 p-2.5 text-center text-white bg-[#58AFFF] rounded-[1.25rem] text-[3.75rem] font-extrabold'
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}

export default AuthButton
