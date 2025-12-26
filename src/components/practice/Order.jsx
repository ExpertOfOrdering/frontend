import React from 'react'
import Menu from './Menu'
import Drink from '@/assets/Drink.png'
import Active from '@/assets/AciveDot.png'
import InActive from '@/assets/InActive.png'
import Prev from '@/assets/Prev.png'
import Next from '@/assets/Next.png'
import Pay from '@/assets/Pay.png'

function Order() {
  return (
    <div>
      <div>
        <span>추천메뉴</span>
        <span>커피</span>
        <span>디카페인</span>
        <span>음료</span>
        <span>티</span>
        <span>푸드</span>
      </div>
      <div>
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
        <Menu img={Drink} name='딸기라떼' price='3000원' />
      </div>
      <div>
        <button>
          <img src={Prev} />
          이전
        </button>
        <img src={Active} />
        <img src={InActive} />
        <button>
          다음
          <img src={Next} />
        </button>
      </div>
      <div>
        <div>
          <div>
            <span>메뉴</span>
            <span>수량</span>
            <span>가격</span>
          </div>
          <div></div>
        </div>
        <div>
          <div></div>
          <span>
            선택한 상품<span>0개</span>
          </span>
          <div>
            <div>
              <img src={Pay} />
            </div>
            <div>
              <span>0원</span>
              <span>결제하기</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Order
