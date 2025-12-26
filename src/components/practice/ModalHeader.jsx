import React from 'react'
import ModalX from '@/assets/ModalX.svg'

function ModalHeader({ text }) {
  return (
    <div>
      <span>{text}</span>
      <img src={ModalX} />
    </div>
  )
}

export default ModalHeader
