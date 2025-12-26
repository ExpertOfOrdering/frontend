import React from 'react'
import OrderResult from '@/assets/OrderResult.png'

function Result() {
  return (
    <div>
      <img src={OrderResult} />
      <div></div>
      <div>
        <span>
          소요시간<span>02:12</span>
        </span>
        <span>
          주문 정확도<span>100%</span>
        </span>
      </div>
      <div>
        <button>오답보기</button>
        <button>초기화면으로</button>
      </div>
    </div>
  )
}

export default Result
