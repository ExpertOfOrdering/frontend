import React from 'react'
import { useState } from 'react'
import AuthLayout from '@/components/shared/Auth/AuthLayout.jsx'
import SignupForm from '@/components/signup/SignupForm.jsx'
import SignupInfoBox from '@/components/signup/SignupInfoBox.jsx'
import AuthButton from '@/components/shared/Auth/AuthButton.jsx'
import { useNavigate } from 'react-router-dom'

import { signup } from '@/apis/auth.js'

function Signup() {
  const [step, setStep] = useState('form')
  const isFormStep = step === 'form'

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleButtonClick = async () => {
    console.log('버튼 클릭됨')
    if (isFormStep) {
      try {
        setLoading(true)
        setError(null)

        const response = await signup(formData)

        console.log('회원가입 성공 응답:', response)

        setStep('complete')
      } catch (err) {
        console.error('회원가입 실패:', err)
        setError(err.response?.data?.message || '회원가입 실패')
      } finally {
        setLoading(false)
      }
    } else {
      navigate('/login')
    }
  }

  return (
    <AuthLayout title='계정 회원가입'>
      {isFormStep ? (
        <SignupForm formData={formData} onChange={handleInputChange} />
      ) : (
        <SignupInfoBox formData={formData} />
      )}
      <AuthButton
        text={loading ? '회원가입 중...' : isFormStep ? '회원가입하기' : '로그인하러 가기'}
        onClick={handleButtonClick}
        disabled={loading || !formData.name || !formData.username || !formData.password}
      />
    </AuthLayout>
  )
}
export default Signup
