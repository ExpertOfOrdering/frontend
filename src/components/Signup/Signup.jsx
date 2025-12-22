import React from 'react'
import { useState } from 'react'
import AuthLayout from '@/components/Signup/SignupLayout.jsx'
import SignupForm from '@/components/Signup/SignupForm.jsx'
import SignupComplete from '@/components/Signup/SignupComplete.jsx'
import AuthButton from '@/components/shared/AuthButton.jsx'

function Signup() {
  const [step, setStep] = useState('form')
  const isFormStep = step === 'form'

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
  })

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
    }
  }

  return (
    <AuthLayout>
      {isFormStep ? (
        <SignupForm formData={formData} onChange={handleInputChange} />
      ) : (
        <SignupComplete />
      )}
      <AuthButton
        text={isFormStep ? '회원가입하기' : '로그인하러 가기'}
        onClick={handleButtonClick}
      />
    </AuthLayout>
  )
}
export default Signup
