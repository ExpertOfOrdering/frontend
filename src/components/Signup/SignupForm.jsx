import React from 'react'
import AuthInput from '@/components/shared/AuthInput.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'

function SignupForm() {
  return (
    <>
      <AuthInput label='사용자 이름' type='text' placeholder='이름을 입력해 주세요' />
      <AuthInput label='계정의 아이디' type='text' placeholder='아이디를 입력해 주세요' />
      <AuthInput label='계정의 비밀번호' type='password' placeholder='비밀번호를 입력해 주세요' />
    </>
  )
}

export default SignupForm
