import React from 'react'
import AuthTitle from '@/components/shared/AuthTitle.jsx'
import AuthInput from '@/components/shared/AuthInput.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'

function Signup() {
  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-full min-h-screen max-w-208.5 flex flex-col items-center justify-center gap-10'>
        <AuthTitle title='계정 회원가입' />
        <AuthInput label='사용자 이름' type='text' placeholder='이름을 입력해 주세요' />
        <AuthInput label='계정의 아이디' type='text' placeholder='아이디를 입력해 주세요' />
        <AuthInput label='계정의 비밀번호' type='password' placeholder='비밀번호를 입력해 주세요' />
        <AuthButton text='회원가입하기' />
      </div>
    </div>
  )
}

export default Signup
