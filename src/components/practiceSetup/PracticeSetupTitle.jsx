import React from 'react'

function PracticeSetupTitle({ text }) {
  return (
    <div className='w-full flex justify-center pt-5'>
      <div className='bg-[#F5F5F5] rounded-[1.25rem] px-3 py-2'>
        <span className='text-[3.4375rem] font-semibold'>{text}</span>
      </div>
    </div>
  )
}

export default PracticeSetupTitle
