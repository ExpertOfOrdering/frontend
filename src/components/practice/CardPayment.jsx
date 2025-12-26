import React from 'react'
import ModalHeader from './ModalHeader'
import CardReader from '@/assets/CardReader.png'
import CreditCard from '@/assets/CreditCard.svg'
import BackBtn from './BackBtn'

function CardPayment() {
  const price = '3000원'
  return (
    <div className='flex flex-col bg-[#EDEDED] w-198.5 rounded-b-[0.625rem]'>
      <ModalHeader text='결제를 진행해주세요' />
      <p className='text-[2.1875rem] font-medium px-5 py-5'>
        총 결제금액 <span className='text-[2.1875rem] font-semibold text-[#E97800]'>{price}</span>
      </p>
      <div className='flex justify-center'>
        <div className='flex flex-col w-188 h-121 items-center justify-center gap-[2.33rem] bg-white rounded-[0.625rem]'>
          <span className='font-semibold text-[2.23088rem] bg-[#F5F5F5]'>
            카드를 리더기에 드래그해주세요
          </span>
          <img src={CardReader} />
          <img src={CreditCard} />
        </div>
      </div>

      <div className='flex px-5 py-5'>
        <BackBtn />
      </div>
    </div>
  )
}

export default CardPayment
