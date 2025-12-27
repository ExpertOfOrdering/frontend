import React, { useEffect, useState } from 'react'
import three from '@/assets/Three.svg'
import two from '@/assets/Two.svg'
import one from '@/assets/One.svg'
import start from '@/assets/Start.svg'
import '@/style/loader.css'
import countdownSound from '@/audio/countdown.mp3'

function CountOverlay({ onFinish }) {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const sound = new Audio(countdownSound)
    sound.play().catch((err) => {
      console.log('오디오 재생 실패:', err)
    })
  }, [])

  useEffect(() => {
    if (count === -1) {
      onFinish()
      return
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, onFinish])

  return (
    <div className='absolute h-screen max-w-208.5 w-full overflow-hidden inset-0 z-50 flex items-center justify-center bg-[rgba(8,8,8,0.84)]'>
      <div className='flex flex-col items-center gap-6'>
        {count === 3 && <img src={three} alt='3' />}
        {count === 2 && <img src={two} alt='2' />}
        {count === 1 && <img src={one} alt='1' />}
        {count === 0 && (
          <>
            <img src={start} alt='start' className='loader' />
          </>
        )}
      </div>
    </div>
  )
}

export default CountOverlay
