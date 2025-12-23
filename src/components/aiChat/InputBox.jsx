import ExQuestionButton from './ExQuestionButton'
const InputBox = () => {
  return (
    <div className='px-[1.56rem]'>
      <div className='flex gap-4'>
        <ExQuestionButton text='옵션을 여러개 선택할 수 있나요' />
        <ExQuestionButton text='메뉴 삭제는 어떻게 하나요' />
      </div>
      <div className='w-full bg-white flex justify-between items-center px-6 h-23 rounded-[0.625rem] mt-6'>
        <input
          placeholder='질문을 입력하세요'
          className='ml-4 placeholder:text-[#9C9C9C] text-[1.625rem] font-normal focus:outline-none'
        />
        <button className='cursor-pointer text-[1.625rem] text-[white] font-semibold bg-[#B7B7B7] rounded-[0.625rem] py-[0.62rem] px-[0.94rem]'>
          전송
        </button>
      </div>
    </div>
  )
}

export default InputBox
