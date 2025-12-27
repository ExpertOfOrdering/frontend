import React from 'react'
import PracticeHeader from './practiceHeader'
import OrderItem from './OrderItem'
import Menu from './Menu'
import Active from '@/assets/AciveDot.png'
import InActive from '@/assets/InActive.png'
import Prev from '@/assets/Prev.png'
import Next from '@/assets/Next.png'
import Pay from '@/assets/Pay.png'
import MenuModal from './MenuModal'
import CheckOrder from './CheckOrder'
import PaymentModal from './PaymentModal'
import CardPayment from './CardPayment'
import AiButtonFixed from './AiButtonFixed'
import { menuData } from './menuData'
import { useInactivityTimer } from './useInactivityTimer'
import { useOrderStore } from '@/store/orderStore'
import { useState, useEffect } from 'react'
import ChatModal from '../aiChat/ChatModal'

function Order() {
  const [modalType, setModalType] = useState(null)
  const [offset, setOffset] = useState(0)
  const ITEMS = 8
  const page = Math.floor(offset / 8)
  const [open, setOpen] = useState(false)

  const [activeCategory, setActiveCategory] = useState('추천메뉴')
  const { setSelectedMenu, orders, getTotalCount, getTotalPrice, setPracticeStep, practiceStep } =
    useOrderStore()

  const categories = ['추천메뉴', '커피', '디카페인', '음료', '티', '푸드']

  const filteredMenu =
    activeCategory === '추천메뉴'
      ? menuData.slice(0, 8)
      : menuData.filter((item) => item.category === activeCategory)

  const visibleMenu = filteredMenu.slice(offset, offset + ITEMS)

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu)
    setModalType('menu')
  }

  useEffect(() => {
    if (modalType === 'menu') setPracticeStep(3)
    else if (modalType === 'check') setPracticeStep(4)
    else if (modalType === 'pay') setPracticeStep(5)
    else setPracticeStep(2)
  }, [modalType, setPracticeStep])

  useInactivityTimer()

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col w-208.5 bg-[#F49229]'>
          <PracticeHeader />
          <div className='flex text-[1.875rem] w-full justify-center font-medium bg-[#F49229] pt-5'>
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setOffset(0)
                }}
                className={`
        px-8 py-2 rounded-t-[0.625rem] cursor-pointer
        ${activeCategory === category ? 'bg-[#EDEDED]' : 'text-white'}
      `}
              >
                {category}
              </span>
            ))}
          </div>
          <div className='grid grid-cols-4 gap-3 px-5 h-131 bg-[#EDEDED] py-[0.94rem]'>
            {filteredMenu.length === 0 ? (
              <div className='col-span-4 text-center py-3 text-[1.5rem] text-[#999]'>
                해당 카테고리 메뉴 없음
              </div>
            ) : (
              visibleMenu.map((menu) => (
                <Menu
                  key={menu.id}
                  img={menu.img}
                  name={menu.name}
                  price={menu.price}
                  onClick={() => handleMenuClick(menu)}
                />
              ))
            )}
          </div>
          <div className='flex py-5 px-5 bg-[#EDEDED] justify-between'>
            <div>
              <button
                className='flex text-white font-semibold text-[1.85606rem] bg-[#9F9F9F] rounded-[0.53031rem] justify-center items-center px-[1.53788rem] py-[0.95456rem] gap-1 cursor-pointer'
                onClick={() => {
                  if (offset > 0) setOffset(offset - ITEMS)
                }}
              >
                <img className='w-[1.53788rem] h-[1.53788rem]' src={Prev} />
                이전
              </button>
            </div>
            <div className='flex gap-[0.92rem] items-center'>
              <img
                className='w-[1.04169rem] h-[1.04169rem] '
                src={page === 0 ? Active : InActive}
              />
              <img className='w-[1.04169rem] h-[1.04169rem]' src={page === 1 ? Active : InActive} />
            </div>
            <div>
              <button
                className='flex text-white font-semibold text-[1.85606rem] bg-[#9F9F9F] rounded-[0.53031rem] justify-center items-center px-[1.53788rem] py-[0.95456rem] gap-1 cursor-pointer'
                onClick={() => {
                  if (offset + ITEMS < filteredMenu.length) setOffset(offset + ITEMS)
                }}
              >
                다음
                <img className='w-[1.53788rem] h-[1.53788rem]' src={Next} />
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center bg-[#EDEDED] py-5'>
            <div className='flex flex-col gap-[0.88rem]'>
              <div className='flex text-[1.75rem] font-medium w-120.5 border-b-2 justify-between py-2'>
                <span>메뉴</span>
                <span className='pl-37'>수량</span>
                <span>가격</span>
              </div>
              <div className='w-120.5 h-48.75 h-guounded-[0.625rem] bg-white overflow-x-hidden whitespace-nowrap overflow-y-scroll'>
                {orders.length === 0 ? (
                  <div className='text-center text-[#999] py-4 text-[1.5rem]'>
                    선택된 메뉴가 없습니다
                  </div>
                ) : (
                  orders.map((item, index) => (
                    <OrderItem
                      key={index}
                      index={index}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  ))
                )}
              </div>
            </div>
            <div className='flex flex-col gap-2 ml-5'>
              <div className='w-71.75 h-[3.66rem] border-b-2'></div>
              <span className='flex text-[1.75rem] font-medium gap-5'>
                선택한 상품<span className='font-semibold text-[#E97800]'>{getTotalCount()}개</span>
              </span>
              <div
                className='flex w-71.75 h-37.75 bg-[#515151] rounded-[0.625rem] items-center justify-center cursor-pointer'
                onClick={() => setModalType('check')}
              >
                <div className='flex w-39 items-center justify-center'>
                  <img className='w-21.75 h-21.75 ' src={Pay} />
                </div>
                <div className='flex flex-col w-50'>
                  <span className='text-[1.875rem] font-semibold text-white'>
                    {getTotalPrice()}원
                  </span>
                  <span className='text-[1.875rem] font-semibold text-[#E97800]'>결제하기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalType === 'menu' && (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
          <MenuModal onClose={() => setModalType(null)} />
        </div>
      )}
      {modalType === 'check' && (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
          <CheckOrder
            onClose={() => setModalType(null)}
            onBack={() => setModalType(null)}
            onPay={() => setModalType('pay')}
          />
        </div>
      )}

      {modalType === 'pay' && (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
          <PaymentModal
            onClose={() => setModalType(null)}
            onCardPay={() => setModalType('card')}
            onBack={() => setModalType('check')}
          />
        </div>
      )}
      {modalType === 'card' && (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
          <CardPayment
            onClose={() => setModalType(null)}
            onBack={() => setModalType('pay')}
            onSuccess={() => setModalType('result')}
          />
        </div>
      )}
      <AiButtonFixed
        onClick={(step) => {
          console.log('현재 STEP:', step)
          setOpen(true)
        }}
      />
      <ChatModal step={practiceStep} open={open} closeModal={() => setOpen(false)} />
    </>
  )
}

export default Order
