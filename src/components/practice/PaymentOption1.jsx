import React from 'react'

function PaymentOption1({ img, text, desc }) {
  return (
    <div>
      <img src={img} />
      <div>
        <span>{text}</span>
        <span>{desc}</span>
      </div>
    </div>
  )
}

export default PaymentOption1
