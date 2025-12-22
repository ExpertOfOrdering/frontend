import React from 'react'
import AuthInput from '@/components/shared/AuthInput.jsx'

function SignupForm({ formData, onChange }) {
  return (
    <>
      <AuthInput
        label='사용자 이름'
        type='text'
        placeholder='이름을 입력해 주세요'
        value={formData.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
      <AuthInput
        label='계정의 아이디'
        type='text'
        placeholder='아이디를 입력해 주세요'
        value={formData.id}
        onChange={(e) => onChange('id', e.target.value)}
      />
      <AuthInput
        label='계정의 비밀번호'
        type='password'
        placeholder='비밀번호를 입력해 주세요'
        value={formData.password}
        onChange={(e) => onChange('password', e.target.value)}
      />
    </>
  )
}

export default SignupForm
