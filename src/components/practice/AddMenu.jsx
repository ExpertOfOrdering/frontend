import React from 'react'
import Minus from '@/assets/Minus.svg'
import Plus from '@/assets/Plus.svg'

function AddMenu({ menuImg, menuName, menuPrice }) {
  return (
    <div>
      <div>
        <img src={menuImg} />
      </div>
      <div>
        <span>{menuName}</span>
        <span>{menuPrice}</span>
      </div>
      <div>
        <img src={Minus} />
        <span>1개</span>
        <img src={Plus} />
      </div>
    </div>
  )
}

export default AddMenu
