import React from 'react'

function MenuOption({ img, name }) {
  return (
    <div>
      <img src={img} />
      <span>{name}</span>
    </div>
  )
}

export default MenuOption
