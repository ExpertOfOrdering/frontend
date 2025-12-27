import React from 'react'
import PracticeSetupTitle from './PracticeSetupTitle'
import LevelCard from './LevelCard'
import { levelData } from './levelData'
import { useState, useEffect } from 'react'
import { getCurrentDifficulty } from '@/apis/level'

function LevelSelect({ selectedLevel, onSelect }) {
  const [recommended, setRecommended] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (!userId) return

    getCurrentDifficulty(userId).then((levelText) => {
      const map = { 초보: 1, 중수: 2, 달인: 3 }
      setRecommended(map[levelText])
    })
  }, [])

  return (
    <div className='w-full max-w-208.5 flex flex-col items-center gap-10'>
      <PracticeSetupTitle text='연습 난이도를 선택하세요' />
      <div className='flex flex-col gap-10'>
        {levelData.map((level, index) => (
          <LevelCard
            key={index}
            label={level.label}
            bgColor={level.bgColor}
            textColor={level.textColor}
            isSelected={selectedLevel === level.id}
            isRecommended={recommended === level.id}
            onClick={() => onSelect(level.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default LevelSelect
