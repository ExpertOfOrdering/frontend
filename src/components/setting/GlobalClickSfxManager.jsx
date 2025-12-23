import { useEffect, useRef } from 'react'
import clickSrc from '@/audio/click.mp3'
import { useAudioStore } from '@/store/audioStore'

export default function GlobalClickSfxManager() {
  const sfx = useAudioStore((s) => s.sfx)
  const poolRef = useRef([])
  const idxRef = useRef(0)

  useEffect(() => {
    // 오디오 객체 6개 생성(끊김 방지)
    const POOL = 6
    poolRef.current = Array.from({ length: POOL }, () => {
      const a = new Audio(clickSrc)
      a.preload = 'auto'
      a.volume = Number(sfx) / 100
      return a
    })

    const shouldSkip = (target) => {
      if (!(target instanceof Element)) return true
      if (target.closest('[data-sfx="off"]')) return true
      const tag = target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
      if (target.closest?.('[contenteditable="true"]')) return true
      return false
    }

    const onPointerDown = (e) => {
      if (shouldSkip(e.target)) return
      const pool = poolRef.current
      if (!pool.length) return
      const a = pool[idxRef.current % pool.length]
      idxRef.current += 1
      try {
        a.currentTime = 0
        a.play().catch(() => {})
      } catch {}
    }

    document.addEventListener('pointerdown', onPointerDown, true)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      poolRef.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 볼륨 조절
  useEffect(() => {
    const v = Number(sfx) / 100
    poolRef.current.forEach((a) => (a.volume = v))
  }, [sfx])

  return null
}
