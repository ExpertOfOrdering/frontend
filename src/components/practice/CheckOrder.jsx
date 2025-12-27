import React from 'react'
import ModalHeader from './ModalHeader'
import BackBtn from './BackBtn'
import Pay from '@/assets/Pay.png'
import OrderItemDetail from './OrderItemDetail'
import { useOrderStore } from '@/store/orderStore'
import { useEffect } from 'react'
import { useInactivityTimer } from './useInactivityTimer'
import AiButtonFixed from './AiButtonFixed'

function CheckOrder({ onClose, onPay, onBack }) {
  useInactivityTimer()

  const { orders, getTotalPrice, getTotalCount, setPracticeStep, showAiButton } = useOrderStore()

  useEffect(() => {
    setPracticeStep(4)
  }, [])
  return (
    <div className='flex flex-col items-center bg-white rounded-[0.625rem] mt-42'>
      <ModalHeader onClose={onClose} text='주문 세부내역을 다시 한 번 확인해주세요' />
      <div className='flex flex-col items-center w-198.5 h-148 overflow-y-scroll'>
        {orders.map((item, i) => (
          <OrderItemDetail key={i} item={item} index={i} />
        ))}
        <div className='fixed flex w-184.75 h-26.25 rounded-[0.625rem] border-2 justify-center gap-[4.38rem] mt-110'>
          <span className='flex font-medium text-[2.1875rem] gap-[1.56rem] items-center'>
            선택한 상품<span className='font-semibold text-[#E97800]'>{getTotalCount()}개</span>
          </span>
          <span className='flex font-medium text-[2.1875rem] gap-[1.56rem] items-center'>
            총 결제금액<span className='font-semibold text-[#E97800]'>{getTotalPrice()}원</span>
          </span>
        </div>
      </div>
      <div className='flex w-198.5 bg-[#EDEDED] rounded-b-[0.625rem] gap-56 justify-center py-[1.88rem]'>
        <BackBtn onClick={onBack} />
        <div
          className='flex justify-center items-center w-[20.07575rem] h-42.25 bg-[#515151] rounded-[0.6995rem] gap-4 cursor-pointer'
          onClick={onPay}
        >
          <div className=''>
            <img className='w-[6.08569rem] h-[6.08569rem]' src={Pay} />
          </div>
          <div className='flex flex-col'>
            <span className='text-[2.0985rem] font-semibold text-[#E97800]'>
              {getTotalPrice()}원
            </span>
            <span className='text-[2.0985rem] font-semibold text-white'>결제하기</span>
          </div>
        </div>
      </div>
      <AiButtonFixed
        onClick={(step) => {
          console.log('현재 STEP:', step)
        }}
      />
    </div>
  )
}

export default CheckOrder
