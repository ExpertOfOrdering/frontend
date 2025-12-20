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

    console.log('[BGM] created', { volume: a.volume, muted: a.muted, src: a.src })

    a.play().catch((e) => {
      console.log('[BGM] play blocked', e?.name, e?.message)
    })

    return () => {
      a.pause()
      audioRef.current = null
      console.log('[BGM] cleanup')
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
