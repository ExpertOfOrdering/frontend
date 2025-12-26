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
    <div className='flex flex-col justify-content items-center'>
      <div className='flex flex-col w-198.5 justify-center'>
        <ModalHeader text='선택하신 상품의 옵션상품을 모두 선택해주세요' />
        <AddMenu menuImg={Drink} menuName='캐모마일' menuPrice='3000원' />
        <div className='flex flex-col bg-[#EDEDED] px-[1.88rem] py-[1.81rem] gap-[2.81rem]'>
          <div className='flex flex-col gap-[0.94rem]'>
            <div className='flex'>
              <span className='text-[1.57994rem] font-semibold'>HOT/ICE</span>
            </div>
            <div className='flex gap-3'>
              <MenuOption img={Hot} name='HOT' />
              <MenuOption img={Ice} name='ICE' />
            </div>
          </div>
          <div className='flex flex-col gap-[0.94rem]'>
            <div className='flex'>
              <span className='text-[1.57994rem] font-semibold'>음료 맛</span>
            </div>
            <div className='flex gap-3'>
              <MenuOption img={Default} name='기본' />
              <MenuOption img={Light} name='연하게' />
              <MenuOption img={Deep} name='진하게' />
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-7 font-semibold text-white text-[2.52169rem] bg-[#EDEDED] rounded-b-[0.62581rem] py-10'>
          <button className='w-57 h-21 bg-[#515151] rounded-[0.7205rem]'>취소</button>
          <button className='w-57 h-21 bg-[#F49229] rounded-[0.7205rem]'>주문담기</button>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
