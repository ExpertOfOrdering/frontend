import React from 'react'
import ModalHeader from './ModalHeader'
import BackBtn from './BackBtn'
import Pay from '@/assets/Pay.png'

function CheckOrder() {
  return (
    <div>
      <ModalHeader text='주문 세부내역을 다시 한 번 확인해주세요' />
      <div>
        <span>
          선택한 상품<span>2개</span>
        </span>
        <span>
          선택한 상품<span>2개</span>
        </span>
      </div>
      <div>
        <BackBtn />
        <div>
          <div>
            <img src={Pay} />
          </div>
          <div>
            <span>6000원</span>
            <span>결제하기</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOrder
