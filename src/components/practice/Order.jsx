import React from 'react'
import PracticeHeader from './practiceHeader'
import OrderItem from './OrderItem'
import Menu from './Menu'
import Drink from '@/assets/Drink.png'
import Active from '@/assets/AciveDot.png'
import InActive from '@/assets/InActive.png'
import Prev from '@/assets/Prev.png'
import Next from '@/assets/Next.png'
import Pay from '@/assets/Pay.png'

function Order() {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col w-208.5 bg-[#F49229]'>
          <PracticeHeader misson='뜨거운 캐모마일 1개 포장주문' />
          <div className='flex text-[1.875rem] w-full justify-center font-medium bg-[#F49229] pt-5'>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>추천메뉴</span>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>커피</span>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>디카페인</span>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>음료</span>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>티</span>
            <span className='px-8 py-2 rounded-t-[0.625rem]'>푸드</span>
          </div>
          <div className='grid grid-cols-4 gap-3 px-5 bg-[#EDEDED] py-[0.94rem]'>
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
            <Menu img={Drink} name='딸기라떼' price='3000원' />
          </div>
          <div className='flex py-5 px-5 bg-[#EDEDED] justify-between'>
            <div>
              <button className='flex text-white font-semibold text-[1.85606rem] bg-[#9F9F9F] rounded-[0.53031rem] justify-center items-center px-[1.53788rem] py-[0.95456rem] gap-1'>
                <img className='w-[1.53788rem] h-[1.53788rem]' src={Prev} />
                이전
              </button>
            </div>
            <div className='flex gap-[0.92rem] items-center'>
              <img className='w-[1.04169rem] h-[1.04169rem]' src={Active} />
              <img className='w-[1.04169rem] h-[1.04169rem]' src={InActive} />
            </div>
            <div>
              <button className='flex text-white font-semibold text-[1.85606rem] bg-[#9F9F9F] rounded-[0.53031rem] justify-center items-center px-[1.53788rem] py-[0.95456rem] gap-1'>
                다음
                <img className='w-[1.53788rem] h-[1.53788rem]' src={Next} />
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center bg-[#EDEDED] py-5'>
            <div className='flex flex-col gap-[0.88rem]'>
              <div className='flex text-[1.75rem] font-medium w-120.5 border-b-2 justify-between py-2'>
                <span>메뉴</span>
                <span>수량</span>
                <span>가격</span>
              </div>
              <div className='w-120.5 h-48.75 rounded-[0.625rem] bg-white'>
                <OrderItem />
              </div>
            </div>
            <div className='flex flex-col gap-2 ml-5'>
              <div className='w-71.75 h-[3.66rem] border-b-2'></div>
              <span className='flex text-[1.75rem] font-medium gap-5'>
                선택한 상품<span className='font-semibold text-[#E97800]'>0개</span>
              </span>
              <div className='flex w-71.75 h-37.75 bg-[#515151] rounded-[0.625rem] items-center justify-center gap-5'>
                <div>
                  <img className='w-21.75 h-21.75 ' src={Pay} />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[1.875rem] font-semibold text-white'>0원</span>
                  <span className='text-[1.875rem] font-semibold text-[#E97800]'>결제하기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
