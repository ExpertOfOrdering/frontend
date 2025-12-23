import AIChatBubble from './AIChatBubble'
import MyChatBubble from './MyChatBubble'
import AIChatHeader from '@/assets/AIChatHeader.svg?react'
import X from '@/assets/X.svg?react'
import InputBox from './InputBox'

const ChatModal = () => {
  return (
    <div className='flex flex-col bg-[#DDEFFF] w-190 rounded-[0.625rem] shadow-[-8px_8px_18px_rgba(0,0,0,0.08)] pb-[2.12rem] min-h-164.75'>
      {/* Header */}
      <div className='bg-white rounded-[0.625rem] flex relative justify-center items-center w-full h-23'>
        <AIChatHeader />
        <button className='absolute right-5'>
          <X />
        </button>
      </div>
      <div className='flex-1 flex flex-col h-full justify-between'>
        {/* Bubble */}
        <div className='flex flex-col px-[1.56rem] pt-[2.12rem] gap-y-7'>
          <div className='flex justify-start'>
            <AIChatBubble text='정순자님, 어떤 것이 궁금하신가요?' />
          </div>
          <div className='flex justify-end'>
            <MyChatBubble text='옵션을 여러개 선택할 수 있나요' />
          </div>
        </div>
        {/* Input */}
        <InputBox />
      </div>
    </div>
  )
}

export default ChatModal
