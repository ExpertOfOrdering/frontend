import React from 'react'
import AuthLayout from '@/components/shared/Auth/AuthLayout.jsx'
import AuthTitle from '@/components/shared/Auth/AuthTitle.jsx'
import AuthInput from '@/components/shared/Auth/AuthInput.jsx'
import AuthButton from '@/components/shared/Auth/AuthButton.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { login } from '@/apis/auth.js'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await login({
        username,
        password,
      })

      console.log('로그인 성공', response)

      localStorage.setItem('userId', String(response.userId))
      localStorage.setItem('username', response.username ?? '')
      localStorage.setItem('name', response.name ?? '')

      navigate('/onb')
    } catch (err) {
      console.error('로그인 실패:', err)
      setError(err.response?.data?.message || '로그인에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AuthLayout title='계정 로그인하기'>
        <AuthInput
          label='계정의 아이디'
          placeholder='아이디를 입력해 주세요'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          label='계정의 비밀번호'
          placeholder='비밀번호를 입력해 주세요'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className='text-red-500 text-[2.5rem] mt-2'>{error}</p>}
        <AuthButton
          text={loading ? '로그인 중...' : '로그인하기'}
          onClick={handleLogin}
          disabled={loading || !username || !password}
        />
        <Link to='/signup'>
          <span className='text-[#58AFFF] text-[3.125rem] font-semibold underline underline-offset-5'>
            회원가입하기
          </span>
        </Link>
      </AuthLayout>
    </>
  )
}

export default Login
