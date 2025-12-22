import React from 'react'
import { useState } from 'react'
import AuthLayout from '@/components/Signup/SignupLayout.jsx'
import SignupForm from '@/components/Signup/SignupForm.jsx'
import SignupInfoBox from '@/components/Signup/SignupInfoBox.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [step, setStep] = useState('form')
  const isFormStep = step === 'form'

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleButtonClick = () => {
    console.log('clicked', step)
    if (isFormStep) {
      setStep('complete')
    } else {
      console.log('로그인 페이지로 이동')
      navigate('/login')
    }
  }

  return (
    <AuthLayout>
      {isFormStep ? (
        <SignupForm formData={formData} onChange={handleInputChange} />
      ) : (
        <SignupInfoBox formData={formData} />
      )}
      <AuthButton
        text={isFormStep ? '회원가입하기' : '로그인하러 가기'}
        onClick={handleButtonClick}
        disabled={!formData.name || !formData.id || !formData.password}
      />
    </AuthLayout>
  )
}
export default Signup
