import { useEffect, useRef } from 'react'
import { useOrderStore } from '@/store/orderStore'

export const useInactivityTimer = (time = 20000) => {
  const { setShowAiButton } = useOrderStore()
  const timer = useRef(null)

  const reset = (e) => {
    if (e?.target?.closest('.ai-btn')) return

    setShowAiButton(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setShowAiButton(true)
    }, time)
  }

  useEffect(() => {
    reset()

    const events = ['click', 'touchstart', 'mousemove']
    events.forEach((e) => window.addEventListener(e, reset))

    return () => {
      events.forEach((e) => window.removeEventListener(e, reset))
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])
}
