import React from 'react'
import AiBtn from '@/assets/AiBtn.png'
import { useOrderStore } from '@/store/orderStore'

export default function AiButtonFixed({ onClick }) {
  const { showAiButton, practiceStep } = useOrderStore()

  if (!showAiButton) return null

  return (
    <img
      src={AiBtn}
      className='fixed top-51 right-139 z-9999 w-34 h-34 cursor-pointer'
      onClick={() => onClick?.(practiceStep)}
    />
  )
}
