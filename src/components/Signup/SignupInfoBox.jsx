import React from 'react'
import SignupInfo from '@/components/signup/SignupInfo.jsx'

function SignupInfoBox({ formData }) {
  return (
    <>
      <div className='flex flex-col w-196.5 h-135.75 mt-[5.06rem] mb-14 justify-center items-center bg-[#F5F5F5] rounded-[1.25rem]'>
        <span className='w-[98.75] pt-2.5 pb-2.5 pl-10 pr-10 mb-12 bg-white rounded-[1.25rem] text-[3.75rem] font-semibold'>
          회원가입 완료
        </span>
        <SignupInfo label='이름' info={formData.name} />
        <SignupInfo label='아이디' info={formData.id} />
        <SignupInfo label='비밀번호' info={formData.password} />
      </div>
    </>
  )
}

export default SignupInfoBox
