import React from 'react'
import ModalHeader from './ModalHeader'
import CardReader from '@/assets/CardReader.png'
import CreditCard from '@/assets/CreditCard.svg'
import CardSuccess from '@/assets/CardSuccess.png'
import BackBtn from './BackBtn'
import { useOrderStore } from '@/store/orderStore'
import { useState, useEffect } from 'react'
import Result from './Result'
import { useInactivityTimer } from './useInactivityTimer'
import AiButtonFixed from './AiButtonFixed'

function CardPayment({ onClose, onBack, onSuccess }) {
  useInactivityTimer()

  const finishPractice = useOrderStore((s) => s.finishPractice)
  const { getTotalPrice, setPracticeStep } = useOrderStore()
  const [isInserted, setIsInserted] = useState(false)
  const [showSuccessView, setShowSuccessView] = useState(false)

  const handleCardClick = () => {
    if (isInserted) return

    setIsInserted(true)

    setTimeout(() => {
      const calculateAccuracy = useOrderStore.getState().calculateAccuracy
      calculateAccuracy()
      finishPractice()
      setShowSuccessView(true)
    }, 600)
  }

  useEffect(() => {
    setPracticeStep(5)
  }, [])

  return (
    <div className='flex flex-col bg-[#EDEDED] w-198.5 rounded-[0.625rem]'>
      <ModalHeader onClose={onClose} text='결제를 진행해주세요' />
      <p className='text-[2.1875rem] font-medium px-5 py-5'>
        총 결제금액{' '}
        <span className='text-[2.1875rem] font-semibold text-[#E97800]'>{getTotalPrice()}원</span>
      </p>
      <div className='flex'>
        <div className='relative flex flex-col w-188 h-121 items-center justify-start gap-[2.33rem] bg-white rounded-[0.625rem] pt-5'>
          <span className='font-semibold text-[2.23088rem] bg-[#F5F5F5]'>
            카드를 리더기에 드래그해주세요
          </span>
          <img className='' src={CardReader} />
          <img
            src={CreditCard}
            onClick={handleCardClick}
            className='cursor-pointer'
            style={{
              position: 'absolute',
              top: isInserted ? '68%' : '80%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-70%)',
              transition: 'top 0.6s ease',
            }}
          />
        </div>
      </div>

      <div className='flex px-5 py-5'>
        <BackBtn onClick={onBack} />
      </div>
      {showSuccessView && <Result />}
      <AiButtonFixed
        onClick={(step) => {
          console.log('현재 STEP:', step)
        }}
      />
    </div>
  )
}

export default CardPayment
