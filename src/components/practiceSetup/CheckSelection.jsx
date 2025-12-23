import React from 'react'
import PracticeSetupTitle from './PracticeSetupTitle'
import LevelCard from './LevelCard'
import { levelData } from './levelData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckSelection() {
  return (
    <div className='w-full h-screen max-w-208.5 flex flex-col items-center gap-5'>
      <PracticeSetupTitle text='이 설정으로 연습을 시작할까요?' />
      <div>
        <div>연습 모드</div>
        <div>연습 난이도</div>
      </div>
      <div>
        <LevelCard />
        <LevelCard />
      </div>
      <button>다시 설정</button>
      <button>다시 선택하기</button>
    </div>
  )
}

export default CheckSelection
