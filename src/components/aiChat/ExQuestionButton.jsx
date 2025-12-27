const ExQuestionButton = ({ text, onSend }) => {
  return (
    <div>
      <button
        onClick={() => onSend?.(text)}
        className='cursor-pointer px-[1.44rem] py-[0.94rem] bg-[#58afff4c] rounded-[3.125rem] text-[#003D74] text-[1.4375rem] font-normal'
      >
        {text}
      </button>
    </div>
  )
}

export default ExQuestionButton
