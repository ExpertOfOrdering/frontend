import React from 'react'
import { motion } from 'framer-motion'
import OnbTitle from '@/components/onboarding/OnbTitle.jsx'
import AnswerList from '@/components/onboarding/AnswerList.jsx'
import OnbBtn from '@/components/onboarding/OnbBtn'
import { onboardingData } from '@/components/onboarding/onboardingData.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Onboarding2() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])

  const current = onboardingData[step]

  const navigate = useNavigate()

  // 답변 버튼을 클릭했을 때 실행되는 함수
  const handleSelect = (option) => {
    const next = [...answers] // 기존 answers 배열 복사
    next[step] = option // 현재 질문(step)에 해당하는 위치에 선택한 답 저장
    setAnswers(next) // 수정된 배열을 state로 업데이트
  }

  // '다음 / 완료' 버튼을 눌렀을 때 실행되는 함수
  const handleNext = () => {
    if (step < onboardingData.length - 1) {
      // 아직 마지막 질문이 아니라면
      setStep(step + 1) // 다음 질문으로 이동
    } else {
      // 마지막 질문이라면, 점수 계산
      const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0)
      console.log('총 점수:', totalScore) // 계산된 총 점수 출력
      navigate('/main') // 로그인 페이지로 이동
    }
  }

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full min-h-screen max-w-208.5 flex flex-col items-center justify-center'
      >
        <OnbTitle title={current.question} />
        <AnswerList
          options={current.options}
          selectedOption={answers[step]}
          onSelect={handleSelect}
        />

        <OnbBtn text={current.buttonText} disabled={!answers[step]} onClick={handleNext} />
      </motion.div>
    </div>
  )
}

export default Onboarding2
