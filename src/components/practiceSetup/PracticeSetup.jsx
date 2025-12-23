import React from 'react'
import PracticeSetupHeader from '@/components/practiceSetup/PracticeSetupHeader'
import ModeSelect from '@/components/practiceSetup/ModeSelect.jsx'
import LevelSelect from './LevelSelect'
import Footer from '@/components/shared/Footer.jsx'
import CheckSelection from '@/components/practiceSetup/CheckSelection.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PracticeSetup() {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null)

  const navigate = useNavigate()

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  // 다시 설정 (처음으로)
  const handleReset = () => {
    setSelectedCategory(null)
    setSelectedLevel(null)
    setStep(1)
  }

  // 연습 시작
  const handleStart = () => {
    navigate('/practice') // 연습 페이지 경로
  }

  return (
    <div className='h-screen w-full flex justify-center overflow-hidden'>
      <div className='w-full max-w-208.5 flex flex-col items-center'>
        <PracticeSetupHeader onBack={step > 1 ? handleBack : undefined} />
        <div className='flex-1 w-full flex justify-center h-[53.31rem]'>
          {step === 1 && (
            <ModeSelect
              selectedCategory={selectedCategory}
              onSelect={(category) => {
                setSelectedCategory(category)
                setStep(2)
              }}
            />
          )}
          {step === 2 && (
            <LevelSelect
              selectedLevel={selectedLevel}
              onSelect={(level) => {
                setSelectedLevel(level)
                setStep(3)
              }}
            />
          )}
          {step === 3 && (
            <CheckSelection
              selectedCategory={selectedCategory}
              selectedLevel={selectedLevel}
              onReset={handleReset}
              onStart={handleStart}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PracticeSetup
