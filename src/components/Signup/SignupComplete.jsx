import React from 'react'
import SignupInfoBox from '@/components/Signup/SignupInfoBox.jsx'
import AuthTitle from '@/components/shared/AuthTitle.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'

function SignupComplete() {
  return (
    <>
      <AuthTitle title='계정 회원가입' />
      <SignupInfoBox />
      <AuthButton text='로그인하러 가기' />
    </>
  )
}

export default SignupComplete
