import React from 'react'

function practiceHeader({ misson }) {
  return (
    <div>
      <div>
        <span>연습 중</span>
        <button>종료</button>
      </div>
      <div>
        <span>{misson}</span>
      </div>
    </div>
  )
}

export default practiceHeader
