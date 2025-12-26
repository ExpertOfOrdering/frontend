import React from 'react'
import ModalHeader from './ModalHeader'
import CardReader from '@/assets/CardReader.png'
import CreditCard from '@/assets/CreditCard.svg'
import BackBtn from './BackBtn'

function CardPayment() {
  const price = '3000원'
  return (
    <div>
      <ModalHeader text='결제를 진행해주세요' />
      <p>
        총 결제금액 <span>{price}원</span>
      </p>
      <div>
        <span>카드를 리더기에 드래그해주세요</span>
        <img src={CardReader} />
        <img src={CreditCard} />
      </div>
      <BackBtn />
    </div>
  )
}

export default CardPayment
