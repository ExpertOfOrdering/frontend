import AiBtn from '@/assets/AiBtn.png'
import { useOrderStore } from '@/store/orderStore'

export default function AiButtonFixed({ onClick }) {
  const { showAiButton, practiceStep } = useOrderStore()

  if (!showAiButton) return null

  return (
    <img
      src={AiBtn}
      className='ai-btn fixed top-51 right-139 z-999 w-34 h-34 cursor-pointer pointer-events-auto'
      onClick={() => onClick?.(practiceStep)}
    />
  )
}
