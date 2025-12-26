import React from 'react'
import ModalHeader from './ModalHeader'
import AddMenu from './AddMenu'
import MenuOption from './MenuOption'
import Drink from '@/assets/Drink.png'
import Hot from '@/assets/Hot.svg'
import Ice from '@/assets/Ice.svg'
import Default from '@/assets/Default.svg'
import Light from '@/assets/Light.svg'
import Deep from '@/assets/Deep.svg'

function MenuModal() {
  return (
    <div>
      <ModalHeader text='선택하시 상품의 옵션상품을 모두 선택해주세요' />
      <AddMenu menuImg={Drink} menuName='캐모마일' menuPrice='3000원' />
      <div>
        <div>
          <span>HOT/ICE</span>
        </div>
        <div>
          <MenuOption img={Hot} name='HOT' />
          <MenuOption img={Ice} name='ICE' />
        </div>
        <div>
          <span>음료 맛</span>
        </div>
        <div>
          <MenuOption img={Default} name='기본' />
          <MenuOption img={Light} name='연하게' />
          <MenuOption img={Deep} name='진하게' />
        </div>
      </div>
      <div>
        <button>취소</button>
        <button>주문담기</button>
      </div>
    </div>
  )
}

export default MenuModal
