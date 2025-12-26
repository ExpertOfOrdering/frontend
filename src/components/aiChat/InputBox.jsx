import ExQuestionButton from './ExQuestionButton'
import { useState, useMemo } from 'react'

const InputBox = ({ onSend, step }) => {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim()) return
    onSend?.(text)
    setText('')
  }

  const ExQuestionList = {
    1: ['하나는 포장하고 하나는 매장 주문할 수 있나요'],
    2: ['카테고리 이동은 어떻게 하나요', '메뉴 가격은 어떻게 확인하나요'],
    3: [
      '옵션을 여러개 선택할 수 있나요',
      '옵션을 중복 선택할 수 있나요',
      '옵션 선택을 안 하고 싶어요',
    ],
    4: [
      '메뉴 삭제는 어떻게 하나요',
      '옵션 변경은 어떻게 하나요',
      '총 금액 확인을 하고 싶어요',
      '결제 진행은 어떻게 하나요',
    ],
    5: ['결제 수단 변경은 어떻게 하나요'],
  }

  const pickRandomQuestion = (ExQuestionList, step) => {
    const list = ExQuestionList?.[step] ?? []
    if (list.length === 0) return []
    if (list.length === 1) return [list[0]]
    const shuffled = [...list]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, 2)
  }

  const questions = useMemo(() => {
    return pickRandomQuestion(ExQuestionList, step)
  }, [step])

  return (
    <div className='px-[1.56rem]'>
      <div className='flex flex-wrap gap-4'>
        {questions.map((q, idx) => (
          <ExQuestionButton onSend={onSend} text={q} key={idx} />
        ))}
      </div>
      <div className='w-full bg-white flex justify-between items-center px-6 h-23 rounded-[0.625rem] mt-6'>
        <input
          value={text}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return
            if (e.key === 'Enter') {
              e.preventDefault()
              const v = e.currentTarget.value
              if (!v.trim()) return
              onSend?.(v)
              setText('')
            }
          }}
          onChange={(e) => setText(e.target.value)}
          placeholder='질문을 입력하세요'
          className='w-[80%] ml-4 placeholder:text-[#9C9C9C] text-[1.625rem] font-normal focus:outline-none'
        />
        <button
          onClick={handleSend}
          className='cursor-pointer text-[1.625rem] text-[white] font-semibold bg-[#B7B7B7] rounded-[0.625rem] py-[0.62rem] px-[0.94rem]'
        >
          전송
        </button>
      </div>
    </div>
  )
}

export default InputBox
