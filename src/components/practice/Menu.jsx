import React from 'react'

function Menu({ img, name, price }) {
  return (
    <div>
      <img src={img} />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  )
}

export default Menu
