import React from 'react'
import { motion } from 'framer-motion'
import OnbTitle from '@/components/onboarding/OnbTitle.jsx'
import AnswerList from '@/components/onboarding/AnswerList.jsx'
import OnbBtn from '@/components/onboarding/OnbBtn'
import { onboardingData } from '@/components/onboarding/onboardingData.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setInitialDifficulty, getCurrentDifficulty } from '@/apis/level'

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
  const handleNext = async () => {
    if (step < onboardingData.length - 1) {
      // 아직 마지막 질문이 아니라면
      setStep(step + 1) // 다음 질문으로 이동
    } else {
      // 마지막 질문이라면, 점수 계산
      const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0)
      console.log('총 점수:', totalScore) // 계산된 총 점수 출력

      const userId = localStorage.getItem('userId')

      try {
        // 먼저 난이도 생성
        await setInitialDifficulty({ userId, score: totalScore })
        console.log('최초 난이도 저장 성공')
      } catch (err) {
        if (err.response?.status === 409) {
          console.log('이미 난이도 설정된 유저 → GET으로 확인')
        } else {
          console.error('예상치 못한 오류', err)
          return
        }
      }

      // 현재 난이도 확인
      try {
        const difficulty = await getCurrentDifficulty(userId)
        console.log('현재 난이도:', difficulty)
      } catch (err) {
        console.log('난이도 조회 실패', err)
      }

      navigate('/main')
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
