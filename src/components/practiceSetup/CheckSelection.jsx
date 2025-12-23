import React from 'react'
import PracticeSetupTitle from './PracticeSetupTitle'
import CheckCard from './CheckCard'
import { categoryData } from './categoryData'
import { levelData } from './levelData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckSelection({ selectedCategory, selectedLevel, onReset, onStart }) {
  // 선택된 카테고리 찾기
  const category = categoryData.find((item) => item.id === selectedCategory)

  // 선택된 난이도 찾기
  const level = levelData.find((item) => item.id === selectedLevel)
  return (
    <div className='w-full max-w-208.5 flex flex-col items-center gap-10'>
      <PracticeSetupTitle text='이 설정으로 연습을 시작할까요?' />
      <div className='flex gap-9'>
        <div className='flex justify-center items-center w-89.75 h-23 p-2.5 bg-[#F3F3F3] rounded-[1.25rem] text-[2.5rem] font-semibold'>
          연습 모드
        </div>
        <div className='flex justify-center items-center w-89.75 h-23 p-2.5 bg-[#F3F3F3] rounded-[1.25rem] text-[2.5rem] font-semibold'>
          연습 난이도
        </div>
      </div>
      <div className='flex gap-9'>
        <CheckCard
          img={category?.img}
          title={category?.label}
          bgColor={category?.bgColor}
          textColor={category?.textColor}
        />
        <CheckCard
          img={level?.img}
          title={level?.label}
          bgColor={level?.bgColor}
          textColor={level?.textColor}
        />
      </div>
      <div className='flex gap-9 pt-3'>
        <button
          className='w-76.75 h-31.75 p-2.5 bg-[#B7B7B7] rounded-[1.25rem] text-white text-[3.75rem] font-extrabold cursor-pointer hover:opacity-85'
          onClick={onReset}
        >
          다시 설정
        </button>
        <button
          className='w-102.75 h-31.75 p-2.5 bg-[#58AFFF] rounded-[1.25rem] text-white text-[3.75rem] font-extrabold cursor-pointer hover:opacity-85'
          onClick={onStart}
        >
          연습 시작하기
        </button>
      </div>
    </div>
  )
}

export default CheckSelection
