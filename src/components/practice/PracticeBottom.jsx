import React from 'react'
import StepItem from './StepItem'
import OrderType from '@/assets/OrderType.svg'
import Menu from '@/assets/Menu.svg'
import Payment from '@/assets/Payment.svg'
import Done from '@/assets/Done.svg'
import Next from '@/assets/Next.svg'

const steps = [
  { id: 1, label: '포장 선택', icon: OrderType },
  { id: 2, label: '상품 선택', icon: Menu },
  { id: 3, label: '결제 및 적립', icon: Payment },
  { id: 4, label: '주문 완료', icon: Done },
]

function PracticeBottom() {
  return (
    <div
      className='fixed bottom-0 z-50
        w-full max-w-208.5
        left-1/2 -translate-x-1/2
        bg-[#F6A44B]
        flex items-center justify-center
        py-3
        rounded-t-[20px]'
    >
      {steps.map((step, index) => (
        <div key={step.id} className='flex items-center'>
          <StepItem icon={step.icon} label={step.label} />

          {index !== steps.length - 1 && (
            <img src={Next} alt='next' className='mx-3 w-12.25 h-12.25' />
          )}
        </div>
      ))}
    </div>
  )
}

export default PracticeBottom
