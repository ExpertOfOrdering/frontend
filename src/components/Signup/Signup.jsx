import React from 'react'
import AuthTitle from '@/components/shared/AuthTitle.jsx'
import AuthInput from '@/components/shared/AuthInput.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'

function Signup() {
  return (
    <>
      <AuthTitle title='계정 회원가입' />
      <AuthInput label='사용자 이름' type='name' placeholder='이름을 입력해 주세요' />
      <AuthInput label='계정의 아이디' type='id' placeholder='아이디를 입력해 주세요' />
      <AuthInput label='계정의 비밀번호' type='password' placeholder='비밀번호를 입력해 주세요' />
      <AuthButton text='회원가입하기' />
    </>
  )
}

export default Signup
