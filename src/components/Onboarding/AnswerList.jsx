import React from 'react'
import Answer from '@/components/Onboarding/Answer.jsx'

function AnswerList({ options, selectedOption, onSelect }) {
  return (
    <div>
      {options.map((option) => (
        <Answer
          key={option.id}
          option={option}
          isSelected={selectedOption?.id === option.id}
          onSelect={() => onSelect(option)}
        />
      ))}
    </div>
  )
}

export default AnswerList
