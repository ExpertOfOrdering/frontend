import React from 'react'
import OnbTitle from '@/components/Onboarding/OnbTitle.jsx'
import AnswerList from '@/components/Onboarding/AnswerList.jsx'
import OnbBtn from '@/components/Onboarding/OnbBtn'
import { onboardingData } from './onboardingData'
import { useState } from 'react'

function Onboarding2() {
  const [step, setStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  const current = onboardingData[step]

  return (
    <div>
      <OnbTitle title={current.question} />
      <AnswerList
        options={current.options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />

      <OnbBtn
        text={current.buttonText}
        disabled={!selectedOption}
        onClick={() => setStep(step + 1)}
      />
    </div>
  )
}

export default Onboarding2
