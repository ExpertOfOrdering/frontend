import React from 'react'

function LevelCard({ level, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{level}</button>
    </div>
  )
}

export default LevelCard
