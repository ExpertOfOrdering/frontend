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
        absolute
        top-[15%] right-[5%]
        w-34 h-34
        z-[9999]
        cursor-pointer
      '
    />
  )
}
