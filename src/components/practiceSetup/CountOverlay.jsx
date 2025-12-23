import React, { useEffect, useState } from 'react'
import '@/styles/loader.css'

function CountOverlay({ onFinish }) {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      onFinish()
      return
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, onFinish])

  return (
    <div>
      <div>
        <div>{count}</div>
        <div className='loader' />
      </div>
    </div>
  )
}

export default CountOverlay
