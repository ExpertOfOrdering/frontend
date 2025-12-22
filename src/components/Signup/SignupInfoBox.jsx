import React from 'react'
import SignupInfo from '@/components/Signup/SignupInfo.jsx'

function SignupInfoBox() {
  return (
    <>
      <div>
        <span>회원가입 정보</span>
        <SignupInfo label='이름' info='정순자' />
        <SignupInfo label='아이디' info='userid111' />
        <SignupInfo label='비밀번호' info='userpassword1' />
      </div>
    </>
  )
}

export default SignupInfoBox
