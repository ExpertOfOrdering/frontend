import MyBubbleTail from '@/assets/MyBubbleTail.svg?react'
const MyChatBubble = ({ text }) => {
  return (
    <div className='flex items-center max-w-[80%]'>
      <div className=' bg-[#58AFFF]/75 rounded-2xl px-[1.94rem] py-7 -mr-[0.05rem]'>
        <p className='relative z-20 text-[1.625rem] font-normal tracking-[-0.02em]'>{text}</p>
      </div>
      <MyBubbleTail />
    </div>
  )
}

export default MyChatBubble
