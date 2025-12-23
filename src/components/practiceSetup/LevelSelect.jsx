import React from 'react'
import PracticeSetupTitle from './PracticeSetupTitle'
import LevelCard from './LevelCard'
import { levelData } from './levelData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LevelSelect() {
  const [selectedLevel, setSelectedLevel] = useState(null)
  const navigate = useNavigate()

  const handleSelect = (level) => {
    setSelectedLevel(level)
    navigate('/login', {
      state: { level },
    })
  }

  return (
    <div className='w-full h-screen max-w-208.5 flex flex-col items-center gap-5'>
      <PracticeSetupTitle text='연습 난이도를 선택하세요' />
      <div className='flex flex-col gap-5'>
        {levelData.map((level, index) => (
          <LevelCard
            key={index}
            label={level.label}
            bgColor={level.bgColor}
            textColor={level.textColor}
            isSelected={selectedLevel?.id === level.id}
            onClick={() => handleSelect(level)}
          />
        ))}
      </div>
    </div>
  )
}

export default LevelSelect
