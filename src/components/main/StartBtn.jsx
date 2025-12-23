import React from 'react'
import { useNavigate } from 'react-router-dom'

function StartBtn() {
  const navigate = useNavigate()

  const handleBtn = () => {
    navigate('/practiceSetup')
  }

  return (
    <div className='flex justify-center'>
      <button
        className='flex justify-center items-center w-109.5 h-31.75 p-2.5 bg-[#58AFFF] rounded-[1.25rem] text-white text-[3.75rem] font-extrabold cursor-pointer hover:opacity-85'
        onClick={handleBtn}
      >
        주문 연습 시작
      </button>
    </div>
  )
}

export default StartBtn
