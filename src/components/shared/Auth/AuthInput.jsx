import React from 'react'

function AuthInput({ label, type, placeholder, value, onChange }) {
  return (
    <>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <label className='text-[3.125rem] font-semibold'>{label}</label>
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className='flex justify-center items-center w-196.5 h-25.5 placeholder-[#6E6E6E] text-center text-[2.25rem] font-medium bg-[#EAEAEA] rounded-[0.9375rem]'
        />
      </div>
    </>
  )
}

export default AuthInput
