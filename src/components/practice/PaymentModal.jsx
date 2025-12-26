import React from 'react'
import ModalHeader from './ModalHeader'
import PaymentOption1 from './PaymentOption1'
import PaymentOption2 from './PaymentOption2'
import CardOp from '@/assets/CardOp.png'
import AppCard from '@/assets/AppCard.png'
import GiftCard from '@/assets/GiftCard.png'
import KaKaoPay from '@/assets/KaKaoPay.png'
import NaverPay from '@/assets/NaverPay.png'
import BackBtn from './BackBtn'

function PaymentModal() {
  const price = '3000원'
  return (
    <div>
      <ModalHeader text='결제수단을 선택해주세요' />
      <p>
        총 결제금액 <span>{price}원</span>
      </p>
      <div>
        <PaymentOption1 img={CardOp} text='카드 결제' desc='신용카드로 결제' />
        <PaymentOption1 img={AppCard} text='앱 카드' desc='바코드 NFC' />
      </div>
      <div>
        <PaymentOption2 img={GiftCard} text='상품권' />
        <PaymentOption2 img={KaKaoPay} text='카카오페이' />
        <PaymentOption2 img={NaverPay} text='네이버페이' />
      </div>
      <BackBtn />
    </div>
  )
}

export default PaymentModal
