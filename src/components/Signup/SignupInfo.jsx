import React from 'react'

function SignupInfo({ label, info }) {
  return (
    <div className='pb-[1.88rem]'>
      <div className='flex items-center gap-[3.44rem]'>
        <span className='w-43.25 h-15 text-left text-[#58AFFF] text-[3.125rem] font-semibold'>
          {label}
        </span>
        <span className='w-88.25 h-15 text-left text-[3.125rem] font-semibold'>{info}</span>
      </div>
    </div>
  )
}

export default SignupInfo
