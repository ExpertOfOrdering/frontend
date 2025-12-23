import AIBubbleTail from '@/assets/AIBubbleTail.svg?react'
const AIChatBubble = ({ text }) => {
  return (
    <div className='flex items-center max-w-[80%]'>
      <AIBubbleTail />
      <div className=' bg-white/75 rounded-2xl px-[1.94rem] py-7 -ml-[0.05rem]'>
        <p className='relative z-20 text-[1.625rem] font-normal tracking-[-0.02em]'>{text}</p>
      </div>
    </div>
  )
}

export default AIChatBubble
