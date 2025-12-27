import AiBtn from '@/assets/AiBtn.png'
import { useOrderStore } from '@/store/orderStore'

export default function AiButtonFixed({ onClick }) {
  const { showAiButton, practiceStep } = useOrderStore()

  if (!showAiButton) return null

  return (
    <img
      src={AiBtn}
      onClick={() => onClick?.(practiceStep)}
      className='
      ai-btn
        absolute
        top-[10%] right-[5%]
        w-34 h-34
        z-[9999]
        cursor-pointer
      '
    />
  )
}
