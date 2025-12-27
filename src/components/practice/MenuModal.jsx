import React from 'react'
import ModalHeader from './ModalHeader'
import AddMenu from './AddMenu'
import MenuOption from './MenuOption'
import Drink from '@/assets/Drink.png'
import Hot from '@/assets/Hot.svg'
import HotActive from '@/assets/HotActive.svg'
import Ice from '@/assets/Ice.svg'
import IceActive from '@/assets/IceActive.svg'
import Default from '@/assets/Default.svg'
import DefaultActive from '@/assets/DefaultActive.svg'
import Light from '@/assets/Light.svg'
import LightActive from '@/assets/LightActive.svg'
import Deep from '@/assets/Deep.svg'
import DeepActive from '@/assets/DeepActive.svg'
import { useOrderStore } from '@/store/orderStore'
import { useState, useEffect } from 'react'
import SelectAllOptions from './SelectAllOptions'
import { useInactivityTimer } from './useInactivityTimer'
import AiButtonFixed from './AiButtonFixed'

function MenuModal({ onClose }) {
  useInactivityTimer()

  const {
    selectedMenu,
    selectedHotIce,
    selectedTaste,
    setSelectedHotIce,
    setSelectedTaste,
    addOrder,
    resetOptions,
    quantity,
    setPracticeStep,
    showAiButton,
  } = useOrderStore()

  const [showWarning, setShowWarning] = useState(false)

  const handleAddMenu = () => {
    if (!selectedHotIce || !selectedTaste) {
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 1500)
      return
    }
    addOrder({
      ...selectedMenu,
      hotIce: selectedHotIce,
      taste: selectedTaste,
      quantity,
    })
    resetOptions()
    onClose()
  }

  const handleCancel = () => {
    resetOptions()
    onClose()
  }

  useEffect(() => {
    setPracticeStep(3)
  }, [])

  return (
    <div className='flex flex-col justify-end items-center fixed inset-0 z-50 mb-10'>
      <div className='flex flex-col w-198.5 justify-center'>
        <ModalHeader text='선택하신 상품의 옵션상품을 모두 선택해주세요' onClose={handleCancel} />
        <AddMenu
          menuImg={selectedMenu?.img}
          menuName={selectedMenu?.name}
          menuPrice={selectedMenu?.price}
        />
        <div className='relative flex flex-col bg-[#EDEDED] px-[1.88rem] py-[1.81rem] gap-[2.81rem]'>
          <div className='flex flex-col gap-[0.94rem]'>
            <div className='flex'>
              <span className='text-[1.57994rem] font-semibold'>HOT/ICE</span>
            </div>
            <div className='flex gap-3'>
              <MenuOption
                img={Hot}
                selectedImg={HotActive}
                name='HOT'
                onClick={() => setSelectedHotIce('HOT')}
                selected={selectedHotIce === 'HOT'}
              />
              <MenuOption
                img={Ice}
                selectedImg={IceActive}
                name='ICE'
                onClick={() => setSelectedHotIce('ICE')}
                selected={selectedHotIce === 'ICE'}
              />
            </div>
          </div>
          <div className='flex flex-col gap-[0.94rem]'>
            <div className='flex'>
              <span className='text-[1.57994rem] font-semibold'>음료 맛</span>
            </div>
            <div className='flex gap-3'>
              <MenuOption
                img={Default}
                selectedImg={DefaultActive}
                name='기본'
                onClick={() => setSelectedTaste('기본')}
                selected={selectedTaste === '기본'}
              />
              <MenuOption
                img={Light}
                selectedImg={LightActive}
                name='연하게'
                onClick={() => setSelectedTaste('연하게')}
                selected={selectedTaste === '연하게'}
              />
              <MenuOption
                img={Deep}
                selectedImg={DeepActive}
                name='진하게'
                onClick={() => setSelectedTaste('진하게')}
                selected={selectedTaste === '진하게'}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-7 font-semibold text-white text-[2.52169rem] bg-[#EDEDED] rounded-b-[0.62581rem] py-10'>
          <button
            className='w-57 h-21 bg-[#515151] rounded-[0.7205rem] cursor-pointer'
            onClick={handleCancel}
          >
            취소
          </button>
          <button
            className='w-57 h-21 bg-[#F49229] rounded-[0.7205rem] cursor-pointer'
            onClick={handleAddMenu}
          >
            주문담기
          </button>
        </div>
      </div>
      {showWarning && <SelectAllOptions />}
      <AiButtonFixed
        onClick={(step) => {
          console.log('현재 STEP:', step)
        }}
      />
    </div>
  )
}

export default MenuModal
