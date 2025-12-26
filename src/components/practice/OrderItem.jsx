import React from 'react'
import Minus from '@/assets/Minus.svg'
import Plus from '@/assets/Plus.svg'

function OrderItem() {
  return (
    <div>
      <div>
        <button>X</button>
        <span>캐모마일</span>
        <div>
          <img src={Minus} />
          <span>1개</span>
          <img src={Plus} />
        </div>
        <span>3000원</span>
      </div>
    </div>
  )
}

export default OrderItem
