import React from 'react'
import PracticeSetupTitle from './PracticeSetupTitle'
import ModeBox from './ModeBox'
import { categoryData } from './categoryData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ModeSelect({ selectedCategory, onSelect }) {
  return (
    <div className='w-full max-w-208.5 flex flex-col items-center gap-5'>
      <PracticeSetupTitle text='연습 모드를 선택하세요' />
      <div className='grid grid-cols-2 gap-[1.88rem]'>
        {categoryData.map((category, index) => (
          <ModeBox
            key={index}
            img={category.img}
            name={category.label}
            bgColor={category.bgColor}
            textColor={category.textColor}
            isSelected={selectedCategory === category.id}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ModeSelect
