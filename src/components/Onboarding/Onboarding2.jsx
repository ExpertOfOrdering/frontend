import React from 'react'
import OnbTitle from '@/components/Onboarding/OnbTitle.jsx'
import AnswerList from '@/components/Onboarding/AnswerList.jsx'
import onbBtn from '@/components/Onboarding/OnbBtn'
import { onboardingData } from './onboardingData'
import { useState } from 'react'

function Onboarding2() {
  const [step, setStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  const current = onboardingData[step]

  return (
    <div>
      <OnbTitle option={current.options} />
      <AnswerList
        options={current.options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />

      <button disabled={!selectedOption} onClick={() => setStep(step + 1)}>
        {current.buttonText}
      </button>
    </div>
  )
}

export default Onboarding2
