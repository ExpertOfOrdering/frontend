import React from 'react'

function WelcomeCard({ name }) {
  return (
    <div>
      <div>
        <span>{name}님, 환영합니다!</span>
        <span>오늘도 함께 즐겁게 주문해봐요</span>
      </div>
    </div>
  )
}

export default WelcomeCard
