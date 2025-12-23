import React from 'react'

function ModeBox({ img, name, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={img} alt='Mode Icon' />
      <span>{name}</span>
    </div>
  )
}

export default ModeBox
