import { useEffect, useRef } from 'react'
import { useAudioStore } from '@/store/audioStore'
import bgmSrc from '@/audio/bgm.mp3'

export default function BgmManager() {
  const bgm = useAudioStore((s) => s.bgm)
  const audioRef = useRef(null)

  useEffect(() => {
    const a = new Audio(bgmSrc)
    a.loop = true
    a.preload = 'auto'
    a.volume = Number(bgm) / 100
    audioRef.current = a

    const tryPlay = async () => {
      try {
        await a.play()
        window.removeEventListener('pointerdown', tryPlay)
        window.removeEventListener('click', tryPlay)
        window.removeEventListener('keydown', tryPlay)
      } catch (e) {
        console.log('[BGM] still blocked', e?.name)
      }
    }

    tryPlay() // 첫 시도(막힐 수 있음)

    // 막히면 계속 재시도
    window.addEventListener('pointerdown', tryPlay)
    window.addEventListener('click', tryPlay)
    window.addEventListener('keydown', tryPlay)

    return () => {
      window.removeEventListener('pointerdown', tryPlay)
      window.removeEventListener('click', tryPlay)
      window.removeEventListener('keydown', tryPlay)
      a.pause()
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = Number(bgm) / 100
    console.log('[BGM] volume updated ->', a.volume, 'from bgm=', bgm)
  }, [bgm])

  return null
}
