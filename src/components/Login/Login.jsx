import React from 'react'
import AuthTitle from '@/components/shared/AuthTitle.jsx'
import AuthInput from '@/components/shared/AuthInput.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/main')
  }

  return (
    <>
      <AuthTitle title='계정 로그인하기' />
      <AuthInput
        label='계정의 아이디'
        placeholder='아이디를 입력해 주세요'
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <AuthInput
        label='계정의 비밀번호'
        placeholder='비밀번호를 입력해 주세요'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton text='로그인하기' onClick={handleLogin} disabled={!id || !password} />
      <Link to='/signup'>
        <span className='underline cursor-pointer'>회원가입하기</span>
      </Link>
    </>
  )
}

export default Login
